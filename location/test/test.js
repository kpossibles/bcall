const { db } = require('../../common');
const Location = require('../index');
const should = require('chai').should();

describe("Location", function() {
  this.timeout(10000);
  describe('static create()', function() {
    let clear = () => {
      db.prepare("DELETE FROM LOCATION WHERE LOC_ID > 0").run();
    };
    let l = db.prepare("SELECT * FROM LOCATION");
    beforeEach( function() { clear() });
    afterEach( function() { clear() });
    it('should add row to LOCATION with just name and address or name, desc and address', function() {
      return Location.create( { name : 'test', address : '2472 n dousman st, milwaukee wi 53212' } )
      .then( (res) => { 
        res.should.have.property('changes', 1);
        return Location.create( { name : 'test', desc : 'bar', address : '4100 n prospect ave, milwaukee wi 53211'} ); 
      })
      .then( (res) => {
        res.should.have.property('changes', 1);
        l.all().should.have.lengthOf(2);
      });
    });
  });
  describe("constructor()", function() {
    before( function(done) {
      Location.create( { name : 'foo', desc : 'bar', address : '2472 n dousman st, milwaukee wi 53212'} ) 
      .then( () => Location.create( { name : 'single', address : '4100 n prospect ave, shorewood wi 53211' })
      .then( () => { done() })
      );
    })
    after( function() { db.prepare("DELETE FROM LOCATION WHERE LOC_ID > 0").run(); });
    it("complete location should have name", function() {
       new Location({id :1}).should.have.property('name', 'foo');
    });
    it("complete location should have desc", function() {
       new Location({id : 1}).should.have.property('desc', 'bar');
    });
    it("incomplete location should have name", function() {
      new Location({id : 2}).should.have.property('name', 'single');
    });
    it("incomplete location should have no desc", function() {
      new Location({id : 2}).should.have.property('desc', undefined);
    });
  });
  describe("setters", function() {
    before( function(done) {
      Location.create( { name : 'foo', desc : 'bar', address : '3424 n shepard st, milwaukee wi 53211' } )
      .then( () => done() );
    });
    after( function() { db.prepare("DELETE FROM LOCATION WHERE LOC_ID > 0").run(); });
    it("name should change name", function() {
        let x = new Location({id : 1});
        x.name = 'test';
        new Location({id : 1}).should.have.property('name', 'test');
      });
    it("desc should change desc", function() {
        let x = new Location({id : 1});
        x.desc = 'test';
        new Location({id : 1}).should.have.property('desc', 'test');
    });
  });
});
