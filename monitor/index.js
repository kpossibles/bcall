require('phxerrors');
const Location = require('../location');
const Piezo = require('../piezo');
const MonConn = require('./monconn');
const EventEmitter = require('events');
const MonServer = require('./monserver');
const { is, errSwitcher, exists } = require('phxutils');
const { db } = require('../common');
const CLASSNAME = 'Monitor';
const color = require('ansi-colors');

module.exports=( () => {
  let _ = new WeakMap();
  class Monitor extends EventEmitter {
   
    /**
     * Compile a list of all monitors in the system
     * @returns {Monitor[]} Array of all monitors
     */
    static list() {
      let METHODNAME = 'list()';
      try {
        let output = {};
        db.prepare('SELECT MON_ID FROM MONITOR').all().forEach( (row) => {
          output[row.MON_ID] =  new Monitor( row.MON_ID );
        });
        return output;
      }
      catch( err ) { errSwitcher( CLASSNAME, METHODNAME, err ) }
    }

    /**
     * Returns the next unused monitor id
     * @returns {integer}
     */
    static nextID() {
      let idlist = db.prepare('SELECT MON_ID FROM MONITOR').all();
      let max = 0;
      idlist.forEach( (row) => {
        if( row.MON_ID > max ) max = row.MON_ID;
      })
      return max + 1;
    }
    
    /**
     * Returns a monitor server instance, which opens a TCP socket on port 53211
     * @returns {MonServer}
     */
    static server() { return new MonServer() }
    
    /**
     * Create a new monitor by adding a row to the database;
     * @param opt.locID {integer} ID of location associated with monitor
     * @param opt.name {string} Name of new Monitor
     * @param opt.id {integer} The id of the new Monitor
     * @returns {integer} The id of the monitor created
     */
    static mk(opt) {
      let METHODNAME = 'mk(opt)';
      try {
        let query = {
          locID : is( opt.locID, '1..', 'opt.locID'),
          name : is( opt.name, 'string', 'opt.name'),
          id : is( opt.id, '1..', 'opt.id')
        }
        let res = db.prepare("INSERT INTO MONITOR VALUES (@id, @locID, @name)").run(query);
        if( res )
          return res.lastInsertROWID;
        return -1;
      }
      catch(err) { errSwitcher(CLASSNAME, METHODNAME, err) }
    }
    
    /**
     * Datastructure representing an arduino monitor
     * @param id {integer} id of monitor to construct
     */
    constructor(id) {
      super();
      let METHODNAME = 'constructor(id)';
      let res = db.prepare("SELECT * FROM MONITOR WHERE MON_ID = @id").get( { id : is(id, '1..', 'id') } ); 
      if( !res )
        throw new ArgValueError(CLASSNAME, METHODNAME, id, 'No such id');
      let me = {
        id : res.MON_ID,
        name : res.MON_NAME,
        locID : res.LOC_ID,
        ident : false,
        identTimeout : null
      }
      _.set(this, me);
    }

    get id() { return _.get(this).id }
    get name() { return _.get(this).name }
    get location() { return new Location({ id :_.get(this).locID }) }
    get isIdentifying() { return _.get(this).ident }
    get isActive() { if( _.get(this).conn) return true; return false }
    get piezos() { return Piezo.fetchByMonID(_.get(this).id) }
    get piezoCount() { 
      let cnt = 0;
      for( let p in this.piezos ) cnt++;
      return cnt;
    }
    
    /**
     * Turn on identify function. When the monitor is identifying and recieves a hit, 
     * it will emit the event 'identify' with the corresponding piezo identifier. 
     * @param which {boolean} True = turn on, false = turn off
     * @returns {void}
    */
    identify(which) {
      // clearTimeout( _.get(this).identTimeout );
      if( which ) {
        _.get(this).ident = true;
        // _.get(this).identTimeout = setTimeout( () => { 
        //   _.get(this).ident = false;
        //   this.emit('identTimeout');
        // }, 30000 );
      }
      else{
        _.get(this).ident = false;
      }
    }

    /**
     * Add a network socket connection. This will listen to a socket and 
     * cause the class to emit events.
     * @param conn {net.Socket} The socket to listen to
     * @fires 'hit'
     * @fires 'timeout'
     * @fires 'ended'
     * @fires 'error'
     * @fires unregistered
     * @returns {void}
     */
    addConn(sock) {
      let METHODNAME = 'addConn(conn)';
      if( _.get(this).conn != null ) {
        _.get(this).conn.removeAllListeners();
        _.get(this).conn.close();
        _.get(this).conn = null;
      }
      let conn = new MonConn(sock);
      _.get(this).conn = conn;
      conn.on('checkin', () => {
        this.emit('checkin');
      });
      conn.on('hit', (d) => {
        if( _.get(this).ident ) {
          this.emit('identify', d.piezo);
          return;
        }
        if( ! this.piezos[ d.piezo ] ) {
          let warn = `${color.red.bold('[WARNING]')} Monitor ${this.id} - ${this.name}: Hit from unregistered pin ${d.piezo} while not in identify mode`;
          console.log(warn);
          this.emit('unregistered', { piezo : d.piezo, warn : warn });
          return;
        }
        this.piezos[d.piezo].hit( d.hitwave );
        this.emit('hit', d.piezo);
      });
      let closeit = () => {
        if( _.get(this).conn ) {
          _.get(this).conn.close();
          _.get(this).conn = null;
        }
      }
      conn.on('timeout', () => {
        this.emit('timeout');
        closeit(); 
      });
      conn.on('ended', () => {
        this.emit('disconnect');
        closeit();
      });
      conn.on('error', (e) => {
        this.emit('error', e);
        closeit(); 
      });
    }

    /**
     * Add a piezo to the monitor
     * @param opt.fcdID {integer} ID of the facade associated with the Piezo
     * @param opt.name {string} The name of the piezo
     * @param opt.dir {string} the direction of the surface
     * @param opt.pid {integer} the pin identifier (pinID)
     * @param opt.el.min {float} the minimum elevation of the piezo zone
     * @param opt.el.max {float} the maximum elevation of the piezo zone
     * @returns {Piezo} An instance of the piezo created
     */
    addPiezo(opt) {
      let METHODNAME = 'addPiezo(opt)';
      try {
        is( is(opt, Object, 'opt').fcdID, '1..', 'opt.fcdID');
        is( opt.name, 'string', 'opt.name');
        is( opt.dir, 'string', 'opt.dir');
        is( opt.pid, '0..16', 'opt.pid');
        is( is(opt.el, Object, 'opt.el').max, 'number', 'opt.el.max');
        is( opt.el.min, 'number', 'opt.el.min');
        opt.monID = _.get(this).id;
        return new Piezo( Piezo.mk(opt) );
      }
      catch( err ) { errSwitcher(CLASSNAME, METHODNAME, err) }
    }
  }
  return Monitor;
})();
