require('phxerrors');
const { is, errSwitcher } = require('phxutils');
const { db } = require('../common');
const CLASSNAME = 'Collision';

module.exports = ( () => {
  let _ = new WeakMap();
  class Collision {
    
    /**
     * Create a new collision in the database
     * @param opt.piezoID {integer} ID of piezo collision recorded on
     * @param opt.estEl {float} Estimated elevation of collision = ( piezo max - piezo min ) / 2
     * @param opt.wave {string} Digital wave recorded by piezo
     * @returns {integer} ID of collision on success, -1 on failure
     */
    static mk(opt) {
      let METHODNAME = 'mk(opt)';
      try {
        let query = {
          pid : is( is(opt, Object, 'opt').piezoID, '1..', 'opt.piezoID'),
          el : is( opt.estEl, 'number', 'opt.estEl'),
          wave : is( opt.wave, 'string', 'opt.wave'),
          tstamp : Date.now()
        }
        let res = db.prepare('INSERT INTO COLLISION (PIEZO_ID, COLL_EST_EL, COLL_WAVE, COLL_TSTAMP) VALUES (@pid, @el, @wave, @tstamp)').run(query);
        if( res === undefined ) return -1;
        return res.lastInsertROWID;
      }
      catch( err ) { errSwitcher( CLASSNAME, METHODNAME, err ) }
    }

    /**
     * Delete collision from database
     * @param id {integer} ID of collision to delete
     * @returns {integer} ID of removed collision on success, -1 on failure
     */
    static rm(id) {
      let METHODNAME = 'rm(id)';
      try {
        is( id, '1..', 'id');
        let res = db.prepare(`DELETE FROM COLLISION WHERE COLL_ID = ${id}`).run();
        if( res.changes == 0 ) return -1;
        return id;
      }
      catch( err ) { errSwitcher( CLASSNAME, METHODNAME, err ) }
    }

    /**
     * Return a list of all collisions associated with a piezo, list is sorted by most recent first
     * @param id {integer} Piezo id
     * @returns {Collision[]} An array of collisions
     */
    static fetchByProfileID(id) {
      let METHODNAME = 'fetchByProfileID(id)';
      try {
        is( id, '1..', 'id');
        let output = [];
        db.prepare(`SELECT COLL_ID FROM COLLISION WHERE PIEZO_ID = ${id} ORDER BY COLL_TSTAMP DESC`).all().forEach( (row) => {
          output.push( new Collision(row.COLL_ID) );
        });
        return output;
      }
      catch( err ) { errSwitcher(CLASSNAME, METHODNAME, err) }
    }

    /**
     * Data structure representing a piezo collision
     * @param id {integer} ID of collision to construct
     */
    constructor(id) {
      let METHODNAME = 'constructor(id)';
      try {
        is( id, '1..', 'id');
        let res = db.prepare(`SELECT * FROM COLLISION WHERE COLL_ID = ${id}`).get();
        if( res === undefined )
          throw new ArgValueError(CLASSNAME, METHODNAME, id, 'Invalid collision id');
        let me = {
          id : id,
          piezoID : res.PIEZO_ID,
          estEl : res.COLL_EST_EL,
          wave : res.COLL_WAVE,
          tstamp : res.COLL_TSTAMP
        }
        _.set(this, me);
      }
      catch( err ) { errSwitcher( CLASSNAME, METHODNAME, err ) }
    }

    get id() { return _.get(this).id }
    get piezoID() { return _.get(this).piezoID }
    get wave() { return _.get(this).wave }
    get estEl() { return _.get(this).estEl }
    get timestamp() { return _.get(this).tstamp }
    get tsString() { 
      let d = new Date( this.timestamp );
      return d.toLocaleDateString() + ' ' + d.toLocaleTimeString();
    }
  }
  return Collision;
})();
