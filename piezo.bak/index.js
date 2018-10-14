const { db } = require('../common');
const Facade = require('../facade');
const Collision = require('../collision');
const mystmts = {
  begin : db.prepare("BEGIN"),
  commit : db.prepare("COMMIT"),
  rollback : db.prepare("ROLLBACK"),
  byID : db.prepare("SELECT * FROM ZONE NATURAL JOIN PIEZO WHERE ZN_ID = @id"),
  byMonID : db.prepare("SELECT * FROM PIEZO NATURAL JOIN MONITOR NATURAL JOIN FACADE NATURAL JOIN ZONE WHERE MON_ID = @monID"),
  change : {
    name : db.prepare("UPDATE ZONE SET ZN_NAME = @name WHERE ZN_ID = @id"),
    dir : db.prepare("UPDATE ZONE SET ZN_DIR = @dir WHERE ZN_ID = @id"),
    el : {
      max : db.prepare("UPDATE ZONE SET ZN_EL_MAX = @max WHERE ZN_ID = @id"),
      min : db.prepare("UPDATE ZONE SET ZN_EL_MIN = @min WHERE ZN_ID = @id"),
      range : db.prepare("UPDATE ZONE SET (ZN_EL_MIN, ZN_EL_MAX) = (@min, @max) WHERE ZN_ID = @id")
    },
    desc : db.prepare("UPDATE ZONE SET ZN_DESC = @desc WHERE ZN_ID = @id"),
    on : db.prepare("UPDATE PIEZO SET PIEZO_ON = @on WHERE ZN_ID = @id"),
    facadeID : db.prepare("UPDATE ZONE SET FCD_ID = @fcdID WHERE ZN_ID = @id")
  },
  p : {
    mk : db.prepare("INSERT INTO PIEZO (ZN_ID, PIEZO_INDEX, PIEZO_ON) VALUES (@znID, @pIndex, @pOn)")
  },
  z : {
    mk : db.prepare("INSERT INTO ZONE (MON_ID, FCD_ID, ZN_DIR, ZN_EL_MAX, ZN_EL_MIN, ZN_NAME, ZN_DESC) VALUES (@monID, @fcdID, @znDir, @znElMax, @znElMin, @znName, @znDesc)"),
    avgEl : db.prepare("SELECT ( (ZN_EL_MAX - ZN_EL_MIN) / 2 ) AS AVG_EL FROM ZONE WHERE ZN_ID = @znID")
  },
  collisionIDs : db.prepare("SELECT * FROM COLLISION WHERE DEV_ID = @id")
}

module.exports=( () => {
  let _ = new WeakMap();
  class Piezo {

    static getByMonID(id) {
      let output = new Map();
      mystmts.byMonID.all({ monID : id }).forEach( (p) => {
        output.set(p.ZN_ID, new Piezo( { id : p.ZN_ID } ) );
      });
      return output;
    }

    static create(opts) {  
      if(opts.monID === undefined) throw "No monitor defined for new piezo";
      if(opts.pIndex === undefined) throw "No (monitor-specific) index defined for new piezo";
      let zoneQuery = {
        monID : opts.monID,
        fcdID : opts.fcdID,
        znDir : opts.dir,
        znElMax : opts.elMax,
        znElMin : opts.elMin,
        znName : opts.name,
        znDesc : opts.desc
      }
      let piezoQuery = {
        pIndex : opts.pIndex,
        pOn : opts.pOn ? 1 : 0
      }
      let runZone = new Promise( (resolve, reject) => {
        let createdZone = mystmts.z.mk.run(zoneQuery);
        if(createdZone === undefined)
          reject("Failed to add zone to DB");
        else
          resolve(createdZone.lastInsertROWID);
      });
      let runPiezo = (znID) => new Promise( (resolve, reject) => {
        piezoQuery.znID = znID;
        let createdPiezo = mystmts.p.mk.run(piezoQuery);
        if(createdPiezo === undefined)
          reject("Failed to add piezo to DB");
        else
          resolve(createdPiezo.lastInsertROWID);
      });
      mystmts.begin.run();
      return runZone
      .then( (znID) => { runPiezo(znID); return znID } )
      .then( (znID) => { mystmts.commit.run(); return znID } )
      .catch( (err) => {
        mystmts.rollback.run();
        console.log(err);
      })
    }

    constructor(opts) {
      let row = mystmts.byID.get({id : opts.id});
      if(row === undefined) throw "No piezo found with id " + opts.id;
      let me = {
        id : row.ZN_ID,
        monID : row.MON_ID,
        on : row.PIEZO_ON ? true : false,
        name : row.ZN_NAME,
        desc : row.ZN_DESC,
        elMax : row.ZN_EL_MAX,
        elMin : row.ZN_EL_MIN,
        dir : row.ZN_DIR,
        fcdID : row.FCD_ID,
        pIndex : row.PIEZO_INDEX
      }
      _.set(this, me);
    }

    get id() { return _.get(this).id }
    get name() { return _.get(this).name }
    get desc() { return _.get(this).desc == null ? undefined : _.get(this).desc; }
    get elMax() { return _.get(this).elMax }
    get elMin() { return _.get(this).elMin }
    get dir() { return _.get(this).dir }
    get facade() { return new Facade({id : _.get(this).fcdID}); }
    get facadeID() { return _.get(this).fcdID }
    get pIndex() { return _.get(this).pIndex }
    get isOn() { return _.get(this).on }
    get collisionList() {
      let res = mystmts.collisionIDs.all({ id : _.get(this).id });
      let output = [];
      res.forEach( (c) => {
        output.push( new Collision( c.COLL_ID ) );
      });
      return output;
    }
    get collisionCount() {
      let res = mystmts.collisionIDs.all({ id : _.get(this).id });
      return res.length;
    }

    set name(n) {
      let res = mystmts.change.name.run({name : n, id : _.get(this).id});
      if(res !== undefined) {
        _.get(this).name = n;
        return res;
      }
    }
    set desc(d) {
      let res = mystmts.change.desc.run({desc : d, id : _.get(this).id});
      if(res !== undefined) {
        _.get(this).desc = d;
        return res;
      }
    }
    set el(opts) {
      let which = 0;
      let query = { id : _.get(this).id };
      if(opts.min !== undefined) {
        which = 1;
        query.min = opts.min;
      }
      if(opts.max !== undefined) {
        which += 2;
        query.max = opts.max;
      }
      if(which == 0) throw "Invalid options";
      let res = which == 1 ? mystmts.change.el.min.run(query) : (which == 2 ? mystmts.change.el.max.run(query) : mystmts.change.el.range.run(query) );
      if(res !== undefined) {
        _.get(this).elMin = which != 2 ? opts.min : _.get(this).elMin;
        _.get(this).elMax = which > 1 ? opts.max : _.get(this).elMax;
        return res;
      }
    }
    set dir(d) {
      let res = mystmts.change.dir.run({dir : d, id : _.get(this).id});
      if(res !== undefined) {
        _.get(this).dir = d;
        return res;
      }
    }
    set facade(opts) {
      try {
        let f = Facade.create(opts);
        let res = mystmts.change.facadeID.run({fcdID : f, id : _.get(this).id});
        _.get(this).fcdID = f.FCD_ID;
        return res;
      } catch(err) { throw err }
    }
    
    addCollision(opts) {
      if( opts.data === undefined) throw new SyntaxError("No collision data");
      try {
        let avgEl = (_.get(this).elMax - _.get(this).elMin) / 2 + _.get(this).elMin;
        let coll = Collision.create({ 
          pID : _.get(this).id, 
          devType : 0,
          el : avgEl,
          data : opts.data
        });
        return coll;
      }
      catch(err) { throw new ReferenceError("Failed to create collision") }
    }
  }
  return Piezo;
})();
