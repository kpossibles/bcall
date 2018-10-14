const Geo = require('node-geocoder');
const geo = Geo({provider : 'opencage', apiKey : 'd51997cb07094a34870046d91b5d5838' });
const { db } = require('../common');
const mystmts = {
  mk : db.prepare("INSERT INTO LOCATION (LOC_LAT, LOC_LONG, LOC_ADDR, LOC_NAME, LOC_DESC) VALUES (@lat, @lon, @addr, @name, @desc)"),
  byID : db.prepare("SELECT * FROM LOCATION WHERE LOC_ID = @id"),
  change : {
    name : db.prepare("UPDATE LOCATION SET LOC_NAME = @name WHERE LOC_ID = @id"),
    desc : db.prepare("UPDATE LOCATION SET LOC_DESC = @desc WHERE LOC_ID = @id")
  }
};

module.exports=( () => {
  let _ = new WeakMap();
  class Location {
    static create(opts) {
      try {
        let query = {
          name : opts.name,
          desc : opts.desc === undefined ? null : opts.desc
        }
        let lookup;
        if(opts.address !== undefined)
          lookup = geo.geocode(opts.address)
        else if(opts.longitude !== undefined && opts.latitude !== undefined)
          lookup = geo.geocode(opts.latitude + ', ' + opts.longitude);
        else
          throw "No lookup data provided"
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


