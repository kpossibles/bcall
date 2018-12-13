require('phxerrors');
const { is, errSwitcher } = require('phxutils');
const { db } = require('../common');
const Collision = require('./collision');
const CLASSNAME = 'Piezo';

const valRange = (min, max) => {
  return max - min > 0;
}

const valDir = (d) => {
  return ['N','NE','E','SE','S','SW','W','NW'].indexOf(d) != -1;
}

module.exports = ( () => {
  let _ = new WeakMap();
  class Piezo {
    
    /**
     * Create a new Piezo
     * @param opt.monID {integer} ID of the Monitor the piezo is attached to
     * @param opt.fcdID {integer} ID of the Facade associated with the piezo
     * @param opt.name {string} Name of Piezo
     * @param opt.dir {string} Direction the piezo is facing
     * @param opt.el.min {float} Lower bound of the piezo's elevation
     * @param opt.el.max {float} Upper bound of the piezo's elevation
     * @param opt.pid {integer} Identifier used by monitor for the piezo pin
     * @returns {integer} ID of the Piezo created, -1 on failure
     */
    static mk( opt ) {
      let METHODNAME = 'mk(opt)';
      try {
        let query = {
          monID : is( is( opt, Object, 'opt').monID, '1..', 'opt.monID' ),
          fcdID : is( opt.fcdID, '1..', 'opt.fcdID'),
          name : is( opt.name, 'string', 'opt.name' ),
          dir : is( opt.dir, 'string', 'opt.dir' ),
          min : is( is( opt.el, Object, 'opt.el' ).min, 'number', 'opt.min' ),
          max : is( opt.el.max, 'number', 'opt.max' ),
          pid : is( opt.pid, '0..', 'opt.pid' )
        }
        if( !valDir( query.dir ) )
          throw new ArgValueError(CLASSNAME, METHODNAME, query.dir, 'Invalid direction');
        if( ! valRange( query.min, query.max ) )
          throw new ArgValueError(CLASSNAME, METHODNAME, `[${query.min}-${query.max}]`, 'Invalid elevation range');
        let res = db.prepare("INSERT INTO PIEZO (MON_ID, FCD_ID, PIEZO_NAME, PIEZO_DIR, PIEZO_MIN, PIEZO_MAX, PIEZO_PIN_ID) VALUES (@monID, @fcdID, @name, @dir, @min, @max, @pid)").run(query);
        if( res !== undefined ) return res.lastInsertROWID;
        return -1;
      }
      catch( err ) { errSwitcher( CLASSNAME, METHODNAME, err ) }
    }
    /**
     * Compile a list of all piezos in the system
     * @returns {JSON} Array of all piezo
     */
    static list() {
      let METHODNAME = 'list()';
      try {
        let res = db.prepare("SELECT PIEZO_ID FROM PIEZO WHERE PIEZO_ID > 0 ORDER BY PIEZO_ID DESC").all();
        let output = {};
        res.forEach( (row) => {
          let cur = new Piezo(row.PIEZO_ID);
          output[cur.pinID] = cur;
        });
        return output;
      }
      catch( err ) { errSwitcher( CLASSNAME, METHODNAME, err ) }
    }
    
    /**
     * Returns a JSON structure of Piezos associated with a monitor where key=>value = pinID=>Piezo
     * @param id {integer} ID of monitor to fetch for
     * @returns {JSON} pinID=>Piezo
     */
    static fetchByMonID(id) {
      let METHODNAME = 'fetchByMonID(id)';
      try {
        let output = {};
        is( id, '1..', 'id');
        db.prepare(`SELECT PIEZO_ID FROM PIEZO WHERE MON_ID = ${id}`).all().forEach( (row) => {
          let cur = new Piezo(row.PIEZO_ID);
          output[cur.pinID] = cur;
        })
        return output;
      }
      catch(err) { errSwitcher(CLASSNAME, METHODNAME, err) }
    }
    
    /**
     * Calls Collision.export() to export Collisions to csv
     * @returns {String} csvName
     */
    static export(){
      let METHODNAME = 'export()';
      try {
        let csvName = Collision.export();
        return csvName;
      }
      catch(err) { errSwitcher(CLASSNAME, METHODNAME, err) }
    }
    /**
     * Data structure representing an individual piezo
     * @param id {integer} The ID of the piezo to construct
     */
    constructor(id) {
      let METHODNAME = 'constructor(id)';
      let res;
      try { 
        is( id, '1..', 'id');
        res = db.prepare(`SELECT * FROM PIEZO WHERE PIEZO_ID = ${id}`).get();
        if( res === undefined)
          throw new ArgValueError(CLASSNAME, METHODNAME, id, 'No piezo with specified id');
      }
      catch(err) { errSwitcher(CLASSNAME, METHODNAME, err) }
      let me = {
        id : res.PIEZO_ID,
        monID : res.MON_ID,
        name : res.PIEZO_NAME,
        dir : res.PIEZO_DIR,
        min : res.PIEZO_MIN,
        max : res.PIEZO_MAX,
        pid : res.PIEZO_PIN_ID,
        fcdID : res.FCD_ID
      }
      _.set(this,me);
    }
    get id() { return _.get(this).id }
    get monID() { return _.get(this).monID }
    get name() { return _.get(this).name }
    get dir() { return _.get(this).dir }
    get el() { return { min : _.get(this).min, max : _.get(this).max } }
    get pinID() { return _.get(this).pid }
    get fcdID() { return _.get(this).fcdID }
    get collisions() { return Collision.fetchByProfileID( this.id ) }

    /**
     * Register a hit on this piezo by making a collision in the database
     * @param wave {string} The digital wave of the piezo as a string
     * @returns {Collision} Instance of collision created
     */
    hit(wave) {
      let METHODNAME = 'hit(wave)';
      let opt = {};
      try { 
        opt.wave = is( wave, 'string', 'wave').trim();
        if( opt.wave.length == 0 )
          // throw new ArgValueError(CLASSNAME, METHODNAME, '"'+wave+'"', 'Logging with an empty wave');
          console.log(`[WARNING] ${CLASSNAME}.${METHODNAME} Logging empty wave string`);
        opt.estEl = ( _.get(this).max + _.get(this).min ) / 2;
        opt.piezoID = _.get(this).id;
        return new Collision( Collision.mk(opt) );
      } 
      catch(err) { errSwitcher( CLASSNAME, METHODNAME, err ) } 
    }
  }
  return Piezo;
})();
