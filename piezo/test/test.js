require('phxerrors');
const { expect } = require('chai');
const Piezo = require('..');
const Collision = require('../collision');
const Monitor = require('../../monitor');
const Facade = require('../../facade');

let monID, pID, p, info, fID, collID, wave, cinfo;
describe('Piezo Static tests', function() {
  before(function() {
    monID = Monitor.mk( { locID : 1, id : 1, name : 'foobar' } );
    fID = 1;
    wave = '1000001001010111100000001010101100000100000';
    info = { fcdID : fID, monID : monID, name : 'test', dir : 'N', el : { min : 0.22, max : 10.5 }, pid : 0 };
  });
  describe('mk(opt)', function() {
    it('creates a new Piezo in the database', function() {
      pID = Piezo.mk(info);
      expect( pID ).to.not.equal(-1);
      p = new Piezo(pID);
    });
  });
  describe('rm(id)', function() {
    it('deletes the piezo from the database', function() {
      let p2 = Piezo.mk(info);
      let tmp = new Piezo(p2);
      expect( tmp ).to.exist;
      let x = Piezo.rm(p2);
      expect( x ).to.equal(p2);
      expect( () => new Piezo(p2) ).to.throw(ArgValueError);
    });
  });
  describe('fetchByMonID(id)', function() {
    it('returns an object filled with Piezos', function() {
      for( let i = 0; i < 15; i++) {
        Piezo.mk(info);
        info.pid++;
      }
      let cnt = 0;
      let l = Piezo.fetchByMonID(monID);
      for( let p in l ) {
        expect( l[p] ).to.have.property('pinID');
        cnt++;
      }
      expect( cnt ).to.equal( 15 );
    });
  });
});

let coll;
describe('Collision class', function() {
  before( function() {
    cinfo = { piezoID : pID, estEl : 25, wave :wave };
  });
  it('mk(opt) creates a collision', function() {
    collID = Collision.mk( cinfo );
    expect( collID ).to.be.above(0);
    coll = new Collision( collID );
  });
  it('rm(id) deletes a collision', function() {
    let c2 = Collision.mk( cinfo );
    expect( c2 ).to.be.above(0);
    let res = Collision.rm(c2);
    expect( res ).to.equal(c2);
    expect( () => new Collision(c2) ).to.throw(ArgValueError);
  });
  describe('constructor(id)', function() {
    cinfo = { piezoID : pID, estEl : 25, wave :wave };
    for( let prop in cinfo ) {
      it(`constructs with property ${prop} at correct value`, function() {
        expect( coll ).to.have.property(prop, cinfo[prop] );
      });
    }
    it('constructs with correct property id', function() {
      expect( coll ).to.have.property('id', collID);
    });
    it('constructs with timestamp and tsString converts local time', function() {
      console.log('\n\t***\n');
      console.log('\tManually check these value');
      console.log( '\t' + coll.timestamp );
      console.log( '\t' + coll.tsString );
      console.log('\n\t***\n');
    });
  });
  it.skip('fetchByProfileID(id) returns an array of collisions the correct length', function() {
    for( let i = 0; i < 99; i++ ) {
      Collision.mk(cinfo);
    }
    let carr = Collision.fetchByProfileID(pID);
    expect( carr.length ).to.equal(100);
    carr.forEach( (c) => {
      expect( c ).to.have.property('wave');
    });
  });
});

describe('Piezo instance', function() {
  before(function() {
    monID = Monitor.mk( { locID : 1, id : 2, name : 'foobar' } );
    fID = 1;
    wave = '1000001001010111100000001010101100000100000';
    info = { fcdID : fID, monID : monID, name : 'test', dir : 'N', el : { min : 0.22, max : 10.5 }, pid : 10 };
    pID = Piezo.mk(info);
    p = new Piezo(pID);
  });
  it( 'constructs with correct properties', function() {
    for( let prop in info ) {
      if( prop == 'el' )
        expect( p.el ).to.deep.equal( info.el );
      else if( prop == 'pid' )
        expect( p.pinID ).to.equal(info.pid);
      else
        expect( p ).to.have.property(prop, p[prop]);
    }
  });
  it('has property collision that fetches all associated collisions', function() {
    let tmp = { piezoID : pID, wave : '10001010011100', estEl : 9.2 };
    for( let i = 0; i < 50; i++ )
      Collision.mk(tmp);
    expect( p.collisions.length ).to.equal(50);
  });
  it('hit(wave) returns a collision', function() {
    coll = p.hit(wave);
    expect( coll ).to.exist;
    expect( coll ).to.have.property('wave');
  });
  it('hit(wave) accepts empty wave', function() {
    coll = p.hit(' ');
    expect( coll ).to.exist;
    expect( coll ).to.have.property('wave');
  });
});

