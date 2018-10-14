const { db } = require('../../common');
const Piezo = require('../index');
const Facade = require('../../facade');
const should = require('chai').should();
const { expect } = require('chai');

let monID, defaultCfg;
describe("Piezo", function() {
  defaultCfg = {
    monID : 1,
    fcdID : 1,
    pIndex : 1,
    dir : 'N',
    elMax : 15,
    elMin : 10,
    name : 'foo',
    desc : 'bar',
    pOn : true 
  }
  before( function() {
    this.timeout(10000);
    ['PIEZO_WAVE', 'COLLISION', 'PIEZO', 'ZONE', 'MONITOR', 'LOCATION'].forEach( (table) => {
      db.prepare(`DELETE FROM ${table}`).run();
    });
    let res = db.prepare('INSERT INTO LOCATION (LOC_LAT, LOC_LONG, LOC_ADDR, LOC_NAME, LOC_DESC) VALUES (43.0769654,-87.8831759, "2131 East Hartford Avenue, Milwaukee Wisconsin 53211", "test", "test")').run();
    let locID = res.lastInsertROWID;
    res = db.prepare(`INSERT INTO MONITOR (MON_MAC, MON_NAME, MON_DESC, LOC_ID) VALUES ("testmac", "testmon", "", ${locID})`).run();
    monID = res.lastInsertROWID;
    res = db.prepare('INSERT INTO FACADE (FCD_NAME, FCD_DESC) VALUES ("test", "test")').run();
    let fcdID = res.lastInsertROWID;
  });
  let clear = () => {
    db.prepare("DELETE FROM PIEZO WHERE ZN_ID > 0").run();
    db.prepare("DELETE FROM ZONE WHERE ZN_ID > 0").run();
  };
  describe('static getByMonID(id)', function() {
    before( function(done) {
      let p = Promise.resolve();
      for( let i = 0; i < 10; i++ ) {
        let cfg = { ...defaultCfg};
        cfg.monID = monID;
        cfg.pIndex = i;
        p = p.then( () => Piezo.create(cfg) );
      }
      p.then( () => done() );
    });
    it('returns a map of piezos', function() {
      let l = Piezo.getByMonID(monID);
      expect( l ).to.have.property('size', 10);
    });
  });
  describe('static create()', function() {
    let p = db.prepare("SELECT * FROM PIEZO");
    let z = db.prepare("SELECT * FROM ZONE");
    beforeEach( function() { clear() });
    afterEach( function() { clear() });
    it('should add row to PIEZO and ZONE', function(done) {
      Piezo.create( defaultCfg )
      .then( (x) => {
        p.all().should.have.lengthOf(1);
        done();
      });
    });
  });
  describe("constructor()", function() {
    before( function(done) { 
      Piezo.create(defaultCfg)
      .then( () => { done() });
    });
    after( function() { 
      clear();
    });
    it("piezo should have name", function() {
      new Piezo({id :1}).should.have.property('name', 'foo');
    });
    it("piezo should have elMax", function() {
      new Piezo({id : 1}).should.have.property('elMax', 15);
    });
    it("piezo should have elMin", function() {
      new Piezo({id : 1}).should.have.property('elMin', 10);
    });
    it("piezo should have desc", function() {
      new Piezo({id : 1}).should.have.property('desc', 'bar');
    });
    it("piezo should have dir", function() {
      new Piezo({id : 1}).should.have.property('dir', 'N');
    });
    it("piezo should have facade", function() {
      new Piezo({id : 1}).should.have.property('facade').which.is.an.instanceof(Facade).that.has.property('name', 'test');
    });
    it("piezo should have pIndex", function() {
      new Piezo({id : 1}).should.have.property('pIndex', 1);
    });
    it("piezo should have isOn property", function() {
      let p = new Piezo({id : 1 } );
      p.isOn.should.equal(true);
    });
  });
  describe("setters", function() {
    before( function() { 
      Piezo.create( defaultCfg );
    });
    after( function() { 
      clear();
    });
    it("name should change name", function() {
      let x = new Piezo({id : 1});
      x.name = 'test';
      new Piezo({id : 1}).should.have.property('name', 'test');
    });
    it("desc should change desc", function() {
      let x = new Piezo({id : 1});
      x.desc = 'test';
      new Piezo({id : 1}).should.have.property('desc', 'test');
    });
    describe("el should change", function() {
      let x;
      before(function() { x = new Piezo({id : 1}) });
      it('min', function() {
        x.el = {min : 5}
        new Piezo({id : 1}).should.have.property('elMin', 5);
      });
      it('max', function() {
        x.el = {max : 20};
        new Piezo({id : 1}).should.have.property('elMax', 20);
      });
      it('range', function() {
        x.el = {min : 0, max : 30};
        x = new Piezo({id : 1});
        x.should.have.property('elMin', 0);
        x.should.have.property('elMax', 30);
      });
    });
    it('should change dir', function() {
      new Piezo({id : 1}).dir = 'W';
      new Piezo({id : 1}).should.have.property('dir', 'W');
    });
    it('should create new facade', function() {
      new Piezo({id : 1}).facade = { name : 'test', desc : 'case' };
      new Piezo({id : 1}).should.have.property('facade').which.is.an.instanceof(Facade).that.has.property('name', 'test');
    });
  });
  describe('collision', function() {
    before( () => { Piezo.create(defaultCfg) });
    after( () => { 
      db.prepare("DELETE FROM PIEZO_WAVE").run();
      db.prepare("DELETE FROM COLLISION").run();
      db.prepare("DELETE FROM PIEZO").run();
    });
    it('should create a new collision', function() {
      let coll = new Piezo({id : 1}).addCollision({data : '01010101'});
      expect( coll ).to.exist;
      let res = db.prepare(`SELECT * FROM PIEZO_WAVE WHERE COLL_ID = ${coll}`).get();
      res.PWAVE_DATA.should.equal('01010101');
    });
  });
});
