require('phxerrors');
const { is, errSwitcher } = require('phxutils');
const fs = require('fs');
const CLASSNAME = 'Logger';
const logPath = `${process.env.BCALL_DIR}/logs`;

module.exports = ( () => {
  let _ = new WeakMap();
  if( arguments.callee._logger )
    return arguments.callee._logger;
  class Logger {
    constructor() {
      let me = {
        fname : `${logPath}/${Date.now()}.txt`,
        writeChain : Promise.resolve()
      }
      let recurseOpen = () => {
        if( ! me.fd ) {
          fs.open(me.fname, 'w', (err, fd) => {
            if( err ) 
              setTimeout( () => recurseOpen(), 1000 );
            else
              me.fd = fd;
          });
        }
      }
      recurseOpen();
      _.set(this, me);
    }
    write(x) {
      _.get(this).writeChain = _.get(this).writeChain.then( () => {
        return new Promise( (resolve, reject) => {
          let d = new Date().toISOString();
          let buff = `${d} - ${x}\n`;
          fs.write( _.get(this).fd, buff, (err, written, string) => {
            if( err ) {
              console.log('Logger error:');
              console.log(err);
              console.log();
              resolve();
            }
            resolve();
          });
        })
      });
    }
    close() {
      fs.close( _.get(this).fd, () => 
        console.log('Logger file closed')
      );
    }
  }
  let logger = new Logger();
  arguments.callee._logger = logger;
  return logger;
})();
