require('phxerrors');
const { is, errSwitcher } = require('phxutils');
const net = require('net');
const readline = require('readline');
const CLASSNAME = 'CLIFrontEnd';
const c = require('ansi-colors');

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
          prompt : c.cyan.bold('bcall~> ')
        } );
        rl.on('close', () => {
          console.log(c.cyan.bold('\n\t-----------------------------------'))
          console.log(c.cyan.bold('\t---\tExiting BCALL CLI\t---'));
          console.log(c.cyan.bold('\t-----------------------------------\n'))
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
        console.log(c.cyan.bold('\n\t-----------------------------------'))
        console.log(c.cyan.bold('\t---\tEntering BCALL CLI\t---'));
        console.log(c.cyan.bold(`\t--\t${c.bgBlue(".help")} for commands\t--`));
        console.log(c.cyan.bold(`\t-- ${c.bgBlue(".exit")} or ${c.bgBlue(".q[uit]")} to exit  --`));
        console.log(c.cyan.bold('\t-----------------------------------\n\n'))
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
