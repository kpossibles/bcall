require('phxerrors');
const { is, errSwitcher } = require('phxutils');
const { execFile } = require('child_process');
const fs = require('fs');
const SP = require('serialport');
const Monitor = require('../monitor');
const EMBEDDED_DIR = `${process.env.BCALL_DIR}/embedded/`;
const CONFIG_PATH = `${EMBEDDED_DIR}/config.h`;
const LIB_DIR = `${process.env.BCALL_DIR}/lib`;
const BUILD_PATH = `${LIB_DIR}/builder`;
const FLASH_PATH = `${LIB_DIR}/flasher`;
const CLASSNAME = 'Flasher';

module.exports = ( () => {
  class Flasher {
    static writeConfig(cfg) {
      let METHODNAME = 'writeConfig(cfg)';
      return new Promise( (resolve, reject) => {
        let monID;
        let buff;
        try {
          is( is(cfg, Object, 'cfg').ssid, 'string', 'cfg.ssid');
          ['psk', 'serverIP'].forEach( (prop) => {
            is( cfg[prop], 'string', `cfg.${prop}`);
          });
          ['readTime', 'waitTime', 'port'].forEach( (prop) => {
            is( cfg[prop], '0..', `cfg.${prop}` );
          });
          buff = `char netSSID[] = "${cfg.ssid}";\nchar netPWRD[] = "${cfg.psk}";\nIPAddress netSRVR(`;
          buff = buff + cfg.serverIP.replace(/\./g, ',');
          buff = buff + `);\nint netPORT = ${cfg.port};\nint readWindow = ${cfg.readTime};\nint waitAfter = ${cfg.waitTime};\n`;
          monID = Monitor.nextID();
          buff = buff + `int monID = ${monID};\n`;
        }
        catch( err) { errSwitcher( CLASSNAME, METHODNAME, err ) }
        fs.writeFile( CONFIG_PATH, buff, 'utf8', (err) => {
          if(err) reject( new SystemError(CLASSNAME, METHODNAME, err.message) );
          resolve(monID);
        });
      }); 
    }

    static compile() {
      let METHODNAME = 'compile()';
      console.log('yar');
      return new Promise( (resolve, reject) => {
        const child = execFile( BUILD_PATH, (err, stdout, stderr) => {
          console.log('running');
          if( err ) {
            console.log(err);
            reject( new SystemError( CLASSNAME, METHODNAME, err.message ) ) 
          }
          resolve();
          child.on('exit', (code) => {
            console.log(code);
            if( code == 0 ) resolve();
            reject( new SystemError( CLASSNAME, METHODNAME, `builder script (${BUILD_PATH}) returned an exit code of ${code}`) );
          });
        });
      });
    }

    static flash(port) {
      let METHODNAME = 'flash(port)';
      return new Promise( (resolve, reject) => {
        try { is( port, 'string', 'port' ) }
        catch( err ){ errSwitcher( CLASSNAME, METHODNAME, err ) }
        const child = execFile( FLASH_PATH, [ port ], (err, stdout, stderr) => {
          if( err ) reject( new SystemError( CLASSNAME, METHODNAME, err.message ) );
          else resolve();
          child.on('exit', (code) => {
            if( code == 0 ) resolve();
            reject( new SystemError( CLASSNAME, METHODNAME, `flasher script (${FLASH_PATH}) returned an exit code of ${code}`) );
          });
        });
      });
    }

    static findDev() {
      let METHODNAME = 'findDev()';
      return new Promise( (resolve, reject) => {
        SP.list().then( (ports) => {
          let foundPorts = [];
          ports.forEach( (p) => {
            if( ( p.manufacturer && ( p.manufacturer == 'Adafruit' || p.manufacturer == '239a' ) )
              ||( p.pnpId &&  p.pnpId.includes('Adafruit') ) 
            )
              foundPorts.push( p.comName );
          });
          resolve(foundPorts);
        })
      });
    }
  }
  return Flasher;
})();
