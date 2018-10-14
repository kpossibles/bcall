require('phxerrors');
const { is, errSwitcher } = require('phxutils');
const net = require('net');
const readline = require('readline');
const CLASSNAME = 'CLIFrontEnd';

module.exports = ( () => {
  class CLIFrontEnd {
    /**
     * Front end for the command line interface. Opens a tcp connection to a specified socket. When data is received on the socket it is written to console. Also opens a readline terminal interface attached to stdin. When data is received on stdin, it is written to the socket. When stdin receives '.exit', '.q', or '.quit', the CLI exits
     * @param path {String} The path to the socket to connect to
     */
    constructor(path) {
      let METHODNAME = 'constructor(path)';
      try { 
        is( path, 'string', 'path');
        let conn = net.createConnection(path);
        conn.setEncoding('utf8');
        let rl = readline.createInterface( {
          input : process.stdin,
          output : process.stdout,
          prompt : 'bcall~> '
        } );
        rl.on('close', () => {
          console.log('\n\t-----------------------------------')
          console.log('\t---\tExiting BCALL CLI\t---');
          console.log('\t-----------------------------------\n')
          process.exit(0);
        });
        rl.on('line', (l) => {
          if( l === '.exit' || l === '.q' || l === '.quit' )
            rl.emit('close');
          else {
            conn.write(l + '\n');
            rl.prompt();
          }
        });
        console.log('\n\t-----------------------------------')
        console.log('\t---\tEntering BCALL CLI\t---');
        console.log('\t-- ".exit" or ".q[uit]" to exit  --');
        console.log('\t-----------------------------------\n\n')
        conn.on('data', (d) => {
          console.log(d);
          rl.prompt();
        });
        conn.on('end', () => { rl.emit('close')  } );
        conn.on('error', () => { rl.emit('close') } );
        rl.prompt();
      }
      catch( err ) { errSwitcher( CLASSNAME, METHODNAME, err ) }
    }
  }
  return CLIFrontEnd;
})();
