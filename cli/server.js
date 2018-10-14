require('phxerrors');
const { is, errSwitcher } = require('phxutils');
const net = require('net');
const EventEmitter = require('events');
const fs = require('fs');
const CLIBackEnd = require('./backend');
const CLASSNAME = 'CLIServer';

module.exports = ( () => {
  let _ = new WeakMap();
  class CLIServer extends EventEmitter {
    
    /**
     * TCP Server for the Command Line Interface. Listens on a given path, and on receiving a connection attaches the socket to a CLBackEnd instance
     * @param path {String} The path to listen for connections at
     */
    constructor(path) {
      super();
      let METHODNAME = 'constructor(path)';
      try {
        is( path, 'string', 'path');
        path = path.trim();
        if( path.indexOf(';') != -1 ||
          path.indexOf('.') != -1 ||
          path.indexOf('eval') != -1 ||
          path.indexOf('__') != -1 || 
          path.indexOf('`') != -1 ||
          path.indexOf('$') != -1 ||
          ! path.startsWith('/tmp/') 
        )
          throw new ArgValueError(CLASSNAME, METHODNAME, path, 'Invalid Path')
        else {
          try { fs.unlinkSync(path); }
          catch( err ) { }
        }
        let conns = [];
        let server = net.createServer( (c) => {
          c.setEncoding('utf8');
          this.emit('conn', new CLIBackEnd(c) );
          conns.push(c);
        }).listen(path, () => console.log(`CLI Server listening @ ${path}`) );
        let me = {
          server : server,
          conns : conns
        }
        _.set(this, me);
      }
      catch( err ) { errSwitcher(CLASSNAME, METHODNAME, err) }
    }

    /**
     * Ends every connection and closes the server
     */
    kill() {
      _.get(this).conns.forEach( (c) => c.end('Server is shutting down') );
      _.get(this).server.close();
    }
  }
  return CLIServer;
})();
