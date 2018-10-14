const { db } = require('../../common');
const Facade = require('../index');
const should = require('chai').should();

describe("Facade", function() {
  describe('static create()', function() {
    let clear = () => {
      db.prepare("DELETE FROM FACADE WHERE FCD_ID > 0").run();
    };
    let f = db.prepare("SELECT * FROM FACADE");
    beforeEach( function() { clear() });
    afterEach( function() { clear() });
    it('should add row to FACADE with just name', function() {
      Facade.create( { name : 'test' } );
      f.all().should.have.lengthOf(1);
    });
    it('should add row to FACADE with name and desc', function() {
      Facade.create( { name : 'test', desc : 'bar' } );
      f.all().should.have.lengthOf(1);
    });
  });
  describe("constructor()", function() {
    before( function() { Facade.create( { name : 'foo', desc : 'bar' } ); Facade.create( { name : 'single' }) });
    after( function() { db.prepare("DELETE FROM FACADE WHERE FCD_ID > 0").run(); });
    it("complete facade should have name", function() {
      new Facade({id :1}).should.have.property('name', 'foo');
    });
    it("complete facade should have desc", function() {
      new Facade({id : 1}).should.have.property('desc', 'bar');
    });
    it("incomplete facade should have name", function() {
      new Facade({id : 2}).should.have.property('name', 'single');
    });
    it("incomplete facade should have no desc", function() {
      new Facade({id : 2}).should.have.property('desc', undefined);
    });
  });
  describe("setters", function() {
    before( function() { Facade.create( { name : 'foo', desc : 'bar' } );});
    after( function() { db.prepare("DELETE FROM FACADE WHERE FCD_ID > 0").run(); });
    it("name should change name", function() {
      let x = new Facade({id : 1});
      x.name = 'test';
      new Facade({id : 1}).should.have.property('name', 'test');
    });
    it("desc should change desc", function() {
      let x = new Facade({id : 1});
      x.desc = 'test';
      new Facade({id : 1}).should.have.property('desc', 'test');
    });
    it("change should change name and desc", function() {
      let x = new Facade({id : 1});
      x.change = {name : 'test', desc : 'yar'};
      x = new Facade({id : 1});
      x.should.have.property('name', 'test');
      x.should.have.property('desc', 'yar');
    });
  });
});
