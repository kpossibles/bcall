require('phxerrors');
const { is, errSwitcher } = require('phxutils');
//const Logger = require('../logger');
const net = require('net');
const EventEmitter = require('events');
const CLASSNAME = 'MonServer';
const log = (x) => {
  console.log(x);
  //Logger.write(x);
}

module.exports = ( () => {
  let _ = new WeakMap();
  class MonServer extends EventEmitter {
    constructor() {
      super();
      let me = {
      }
      _.set(this, me);
    }
    init() {
      return new Promise( (resolve, reject) => {
        _.get(this).server = net.createServer( (conn) => {
          conn.setEncoding('utf8');
          conn.on('data', (d) => {
            d = d.trim();
            if( d.startsWith('ID') ) {
              let monID = parseInt( d.substring(3) );
              this.emit('conn', { monID : monID, conn : conn });
            }
          });
        }).listen({ host : '0.0.0.0', port : '53211' }, () => {
          log('Monitor server listening on external port 53211');
          console.log('Firewall may need to be disabled or adjusted');
          resolve();
        });
      });
    }
    close() {
      _.get(this).server.close();
    }
  }
  return MonServer;
})();
