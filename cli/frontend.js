require('phxerrors');
const { is, errSwitcher } = require('phxutils');
const net = require('net');
const readline = require('readline');
const CLASSNAME = 'CLIFrontEnd';
const c = require('ansi-colors');
const CFonts = require('cfonts');
const gradient = require('gradient-string');
const style = require('ansi-styles');

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
          console.log(gradient.mind('\n■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■'));
          console.log(c.cyan.bold(`${style.color.ansi16m.hex('#473b7b')}█${style.color.close}\t\t\tExiting BCALL CLI\t\t\t  ${style.color.ansi16m.hex('#30d2be')}█${style.color.close}`));
          console.log(gradient.mind('■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■\n'));
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
        // start title sequence
        let title = CFonts.render('BirdCALL', {
          font: 'block',              // define the font face
          align: 'left',              // define text alignment
          colors: ['system'],         // define all colors
          background: 'transparent',  // define the background color, you can also use `backgroundColor` here as key
          letterSpacing: 1,           // define letter spacing
          lineHeight: 1,              // define the line height
          space: false,                // define if the output text should have empty lines on top and on the bottom
          maxLength: '0',             // define how many character can be on one line
        });
        console.log('');
        console.log(gradient.mind(title.string));
        console.log(gradient.mind('\n■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■'));
        console.log(c.cyan.bold(`${style.color.ansi16m.hex('#473b7b')}█${style.color.close}\t\t\tEntering BCALL CLI\t\t\t  ${style.color.ansi16m.hex('#30d2be')}█${style.color.close}`));
        console.log(c.cyan.bold(`${style.color.ansi16m.hex('#473b7b')}█${style.color.close}\t\t   ${c.bgBlue(".tutorial")} for Getting Started\t\t  ${style.color.ansi16m.hex('#30d2be')}█${style.color.close}`));
        console.log(c.cyan.bold(`${style.color.ansi16m.hex('#473b7b')}█${style.color.close}\t\t\t${c.bgBlue(".help")} for commands\t\t\t  ${style.color.ansi16m.hex('#30d2be')}█${style.color.close}`));
        console.log(c.cyan.bold(`${style.color.ansi16m.hex('#473b7b')}█${style.color.close}\t\t      ${c.bgBlue(".exit")} or ${c.bgBlue(".q[uit]")} to exit\t\t\t  ${style.color.ansi16m.hex('#30d2be')}█${style.color.close}`));
        console.log(gradient.mind('■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■\n'))
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
