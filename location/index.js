const Geo = require('node-geocoder');
const geo = Geo({provider : 'opencage', apiKey : 'd51997cb07094a34870046d91b5d5838' });
const { db } = require('../common');
const mystmts = {
  mk : db.prepare("INSERT INTO LOCATION (LOC_LAT, LOC_LONG, LOC_ADDR, LOC_NAME, LOC_DESC) VALUES (@lat, @lon, @addr, @name, @desc)"),
  byID : db.prepare("SELECT * FROM LOCATION WHERE LOC_ID = @id"),
  change : {
    name : db.prepare("UPDATE LOCATION SET LOC_NAME = @name WHERE LOC_ID = @id"),
    desc : db.prepare("UPDATE LOCATION SET LOC_DESC = @desc WHERE LOC_ID = @id")
  },
  allIDs : db.prepare("SELECT LOC_ID FROM LOCATION WHERE LOC_ID > 0 ORDER BY LOC_ID DESC")
};

module.exports=( () => {
  let _ = new WeakMap();
  class Location {
      
    // new code
    /**
     * Compile a list of all locations in the system
     * @returns {Location[]} Array of all locations
     */
    static list() {
      let METHODNAME = 'list()';
      try {
        let res = mystmts.allIDs.all();
        let output = [];
        res.forEach( (row) => {
            output[row.LOC_ID] =( new Location({ id : row.LOC_ID }) );
        });
        return output;
      }
      catch( err ) { errSwitcher( CLASSNAME, METHODNAME, err ) }
    }

  	//---New method
    static nextID() {
      let idlist = mystmts.allIDs.all();
      let max = 0;
      idlist.forEach( (row) => {
        if( row.LOC_ID > max ) max = row.LOC_ID;
      })
      return max + 1;
    }

    //Changed opts.address to opts.addr 
    static create(opts) {
    	try {
    		let query = {
    			name : opts.name,
    			desc : opts.desc === undefined ? null : opts.desc
    		}
    		let lookup;
    		if(opts.addr !== undefined)
    			lookup = geo.geocode(opts.addr)
    		else if(opts.longitude !== undefined && opts.latitude !== undefined)
    			lookup = geo.geocode(opts.latitude + ', ' + opts.longitude);
    		else
    			{throw "No lookup data provided"}
    		return lookup.then( (res) => {
    			res = res[0];
    			query.addr = res.streetNumber + ' ' + res.streetName + ', ' + res.city + ' ' + res.state + ' ' + res.zipcode;
    			query.lat = res.latitude;
    			query.lon = res.longitude;
    		})
    		.then( () => mystmts.mk.run(query) )
    		.catch( (err) => _ );
    	}
    	catch(err) { throw err }
    }
    constructor(opts) {
      let res;
      if(opts.id !== undefined)
        res = mystmts.byID.get({id : opts.id });
      else if(opts.monID !== undefined)
        res = mystmts.byMonID.get({ monID : opts.monID });
      else
        throw new SyntaxError();
      if(res === undefined) throw new TypeError();
      let me = {
        id : res.LOC_ID,
        lat : res.LOC_LAT,
        lon : res.LOC_LONG,
        addr : res.LOC_ADDR,
        name : res.LOC_NAME,
        desc : res.LOC_DESC
      }
      _.set(this, me);
    }
    get id() { return _.get(this).id };
    get name() { return _.get(this).name };
    get desc() { return _.get(this).desc == null ? undefined : _.get(this).desc;};
    get addr() { return _.get(this).addr };

    set name(n) {
      mystmts.change.name.run({name : n, id : _.get(this).id });
      _.get(this).name = n;
    }
    set desc(d) {
      mystmts.change.desc.run({desc : d, id : _.get(this).id });
      _.get(this).desc = d;
    }
  }
  return Location;
})();


