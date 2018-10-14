require('phxerrors');
const net = require('net');
const EventEmitter = require('events');
const { is, errSwitcher } = require('phxutils');
const CLASSNAME = 'MonConn';

const parseHit = (msg) => {
  let data = msg.split('&');
  let output = {
    piezo : parseInt( data[0].split('=')[1].trim() ),
    hitwave : data[1].split('=')[1].trim()
  }
  return output;
}


module.exports = ( () => {
  let _ = new WeakMap();
  class MonConn extends EventEmitter {
    constructor(sock) {
      super();
      let METHODNAME = 'constructor(sock)';
      
      try { is( sock, net.Socket, 'sock') }
      catch( err ) { errSwitcher(CLASSNAME, METHODNAME, err) }
      
      sock.setEncoding('utf8');
      sock.setTimeout(10000);
      
      sock.on('data', (d) => {
        d = d.trim();
        if( d.startsWith('checkin') ) {
          this.emit('checkin', Date.now() );
          return;
        }
        if( d.startsWith('ID=') ) return;
        if( d != '' ) {
          try {
            let msg = parseHit(d);
            this.emit('hit', msg);
          }
          catch(err) { return }
        }
      });
      
      sock.on('timeout', () => {
        sock.end();
        sock = null;
        this.emit('timeout');
      });
      
      sock.on('error', (e) => this.emit('err', e) );
      
      sock.on('end', () => this.emit('ended') );

      _.set(this, sock);
    }
    close() {
      this.emit('closed');
      _.get(this).end();
      _.delete(this);
    }
  }
  return MonConn;
})();
