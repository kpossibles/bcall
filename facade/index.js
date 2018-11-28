const { db } = require('../common');

const mystmts = {
  mk : db.prepare("INSERT INTO FACADE (FCD_NAME, FCD_DESC) VALUES (@name, @desc)"),
  rm : db.prepare("DELETE FROM FACADE WHERE FCD_ID = @id"),
  byID : db.prepare("SELECT * FROM FACADE WHERE FCD_ID = @id"),
  byName : db.prepare("SELECT * FROM FACADE WHERE FCD_NAME = @name"),
  change : {
    name : db.prepare("UPDATE FACADE SET FCD_NAME = @name WHERE FCD_ID = @id"),
    desc : db.prepare("UPDATE FACADE SET FCD_DESC = @desc WHERE FCD_ID = @id"),
    all : db.prepare("UPDATE FACADE SET (FCD_NAME, FCD_DESC) = (@name, @desc) WHERE FCD_ID = @id")
  },
  allIDs : db.prepare("SELECT FCD_ID FROM FACADE WHERE FCD_ID > 0 ORDER BY FCD_ID DESC")
}

module.exports=( () => {
  let _ = new WeakMap();
  class Facade {

    static create(opts) {
      try {
        let query = {
          name : opts.name,
          desc : typeof opts.desc == 'undefined' ? null : opts.desc
        }
        let res = mystmts.mk.run(query);
        if(res.changes != 1) throw new Error();
        return res.lastInsertROWID;
      }
      catch(err) { throw err }
    }
    static list() {
      let res = mystmts.allIDs.all();
      let output = [];
      res.forEach( (f) => {
        output[f.FCD_ID] = ( new Facade({ id : f.FCD_ID }) );
      });
      return output;
    }
    static edit(opts){
        let res='';
        try{
            if(typeof opts.id!='undefined') {
                if(opts.desc!='' && opts.name!=''){
                    if(opts.desc!='')
                        res = mystmts.change.name.run({name : opts.name, id : opts.id}); 
                    else if(opts.name!='')
                        res = mystmts.change.desc.run({desc : opts.desc, id : opts.id}); 
                }
                else
                    res = mkstmts.change.all.run(opts);
                if(res.changes != 1) throw new Error();
                console.log(`FACADE EDIT: Changes made on ${opts.id}!`);
                return true;
            }   
        } catch(err){ throw err }
    }
    constructor(opts) {
      let res;
      try {
        if(typeof opts.id != 'undefined')
          res = mystmts.byID.get({ id : parseInt(opts.id) });
        else if(typeof opts.name != 'undefined')
          res = mystmts.byName.get({ name : opts.name });
        else
          throw new Error();
      }
      catch(err) { throw err }
      let me = {
        id : res.FCD_ID,
        name : res.FCD_NAME,
        desc : res.FCD_DESC
      }
      _.set(this, me);
    }

    get id() { return _.get(this).id };
    get name() { return _.get(this).name };
    get desc() { return _.get(this).desc == null ? undefined : _.get(this).desc };
    set name(n) { 
      mystmts.change.name.run({name : n, id : _.get(this).id}); 
      _.get(this).name = n; 
    };
    set desc(d) { 
      mystmts.change.desc.run({desc : d, id : _.get(this).id}); 
      _.get(this).desc = d;
    };
    set change(opts) {
      opts.id = _.get(this).id;
      mystmts.change.all.run(opts); 
      _.get(this).name = opts.name; 
      _.get(this).desc = opts.desc; 
    };

  }
  return Facade;
})();
