const Monitor = require('..');
const MonConn = require('../monconn');
const MonServer = require('../monserver');
const { expect } = require('chai');
const net = require('net');

let server, client, conn;
describe('MonServer class', function() {
  let evt;
  it('emits an event with monID when receiving a string starting with ID', function(done) {
    server = new MonServer();
    server.init();
    server.once('conn', (d) => {
      evt = d;
      expect( d).to.have.property('monID', 5);
      done();
    });
    client = net.createConnection({ port : 53211 }, () => {
      client.write('ID=5\r');
    });
  });
  it('the event contains a reference to the socket', function() {
    expect( evt.conn ).to.have.property('writable', true );
    conn = evt.conn;
  });
});


describe('MonConn class', function() {
  it('emits checkin event', function(done) {
    conn = new MonConn(conn);
    conn.once('checkin', () => done() );
    client.write('checkinasdfasdfasdfvasdf\n\n\n');
  });
  it("emits a hit event with correct data", function(done) {
    let pid = 5;
    let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
    conn.once('hit', (d) => {
      expect( d.piezo ).to.equal(pid);
      expect( d.hitwave ).to.equal(wave);
      done();
    });
    client.write(`PID=${pid}&PWAVE=${wave}\r`);
  });
  describe('rapidfire hits', function() {
    for( let i = 0; i < 1000; i++ ) {
      it("emits a hit event with correct data", function(done) {
        let pid = 5;
        let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
        conn.once('hit', (d) => {
          expect( d.piezo ).to.equal(pid);
          expect( d.hitwave ).to.equal(wave);
          done();
        });
        client.write(`PID=${pid}&PWAVE=${wave}\r`);
      });
    }
  });
  describe('timeout', function() {
    after( function(done) {
      try { conn.close(); client.end(); conn = null }
      catch( err ) { }
      server.once('conn', (d) => {
        conn = new MonConn( d.conn );
        done();
      });
      client = net.createConnection({ port : 53211 }, () => {
        client.write('ID=5\r');
      });
    });
    it.skip('emits timeout event after 10s and closes socket', function(done) {
      this.timeout(10100);
      conn.on('timeout', () => {
        setTimeout( () => {
          expect(client).to.have.property('writable', false);
          done();
        }, 50 );
      });
    });
  });
  describe('end()', function() {
    after( function(done) {
      server.once('conn', (d) => {
        conn = new MonConn( d.conn );
        done();
      });
      client = net.createConnection({ port : 53211 }, () => {
        client.write('ID=5\r');
      });
    });
    it('emits ended event and closes socket', function(done) {
      conn.once('closed', () => {
        setTimeout( () => {
          expect( client ).to.have.property('writable', false);
          done();
        }, 50);
      });
      conn.close();
    });
  });
});

let info = { id : 1, name : 'test', locID : 1 };
let mon;
describe('Monitor class', function() {
  after(function() { 
    server.close(); 
    client.end(); 
    if( conn.close )
      conn.close();
    else if( conn.end )
      conn.end(); 
  });
  let res;
  it('mk(opt) returns a new database row id', function() {
    res = Monitor.mk( info );
    expect( res ).to.be.above(0);
  });
  describe('constructor', function() {
    it("constructs with returned id", function() {
      mon = new Monitor( res );
      expect( mon ).to.exist;
    });
    ['id', 'name'].forEach( (p) => {
      it(`sets property ${p}`, function() {
        expect( mon ).to.have.property(p, info[p]);
      });
    });
    it('sets property isIdentifying', function() {
      expect( mon ).to.have.property('isIdentifying').which.is.false;
    });
    it('sets Location property (UWM SARUP)', function() {
      let l = mon.location;
      expect( l ).to.exist;
      expect( l ).to.have.property('name', 'UWM SARUP');
    });
  });
  describe('identify(which)', function() {
    it('turns on', function() {
      mon.identify(true);
      expect( mon.isIdentifying).to.be.true;
    });
    it('turns off', function() {
      mon.identify(false);
      expect( mon.isIdentifying).to.be.false;
    });
    it.skip('times out after thirty seconds', function(done) {
      this.timeout(31000);
      mon.identify(true);
      setTimeout( () => {
        expect( mon.isIdentifying ).to.be.false;
        done();
      }, 30000);
    });
  });
  describe('addPiezo(opt)', function() {
    it('returns a Piezo', function() {
      let p = mon.addPiezo({ fcdID : 1, name : 'test', dir : 'S', pid : 4, el : { min : 5, max : 16 } } );
      expect( p ).to.exist;
      expect( p ).to.have.property('pinID', 4);
    });
  });
  describe('addConn(conn)', function() {
    before( function(done) {
      conn.close();
      server.on('conn', (d) => {
        conn = d.conn;
        done();
      });
      client = net.createConnection( { port : 53211 }, () => { client.write('ID=5') } );
    });
    it('returns false for isActive before adding conn', function() {
      expect( mon ).to.have.property('isActive').which.is.false;
    });
    it('passes on checkin event', function(done) {
      mon.on('checkin', () => done() );
      mon.addConn(conn);
      client.write('checkin');
    });
    it('emits identify event when monitor is identifying', function(done) {
      after( function() { mon.identify(false) } );
      let pID = 2;
      mon.on('identify', (p) => {
        expect( p ).to.equal(pID);
        done();
      });
      mon.identify(true);
      client.write('PID=2&PWAVE=1010101010101010101010101');
    });
    it('returns true for isActive after adding conn', function() {
      expect( mon.isActive ).to.be.true;
    });
    describe('hit', function() {
      let wave = '0000010101010100001100001010101010101000101101011111';
      let pID = 4;
      let hitCnt;
      it('emits hit event', function(done) {
        hitCnt = mon.piezos[pID].collisions.length
        mon.identify(false);
        mon.on('hit', (h) => { 
          expect( h ).to.equal(pID);
          done();
        });
        client.write(`PID=${pID}&PWAVE=${wave}`);
      });
      it('adds a collision', function() {
        expect( mon.piezos[pID].collisions.length ).to.equal( hitCnt + 1 );
      });
    });
    describe('end conn', function() {
      it('emits disconnect when connection ends', function(done) {
        mon.on('disconnect', () => done() );
        client.end();
      });
      it('returns false for isActive after connection ended', function() {
        expect( mon.isActive ).to.be.false;
      });
    });
  });
});
