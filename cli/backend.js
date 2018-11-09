require('phxerrors');
const { is, errSwitcher } = require('phxutils');
const net = require('net');
const readline = require('readline');
const EventEmitter = require('events');
const CLASSNAME = 'CLIBackEnd';
const c = require('ansi-colors');

module.exports = ( () => {
  let _ = new WeakMap();
  class CLIBackEnd extends EventEmitter {
    /**
     * Back end for the command line interface. Sets up a  readline interface with input and output tied to the socket passed in.
     * @param sock {net.Socket} Socket to set up CLI on
     */
    constructor(sock) {
      super();
      let METHODNAME = 'constructor(sock)';
      try {
        is( sock, net.Socket, 'sock' );
        let me = {
          conn : sock,
          rl : readline.createInterface({
            input : sock,
            output : sock,
            prompt : 'bcall~> '
          })
        }
        me.rl.on('line', (l) => this.emit('line', l) );
        _.set(this, me);
      }
      catch( err ){ errSwitcher( CLASSNAME, METHODNAME, err ) }
    }

    /**
     * Sets up a question-response sequence on the interface
     * @param ques {String} The question to ask
     * @returns {Promise} The answer as a string
     */
    ask(ques) {
      let METHODNAME = 'ask(ques)';
      return new Promise( (resolve, reject) => {
        try { 
          is( ques, 'string', 'ques');
          this.once('line', (l) => { 
            resolve( l.trim() );
          } );
          this.tell(c.bold(`${c.green.underline('\[?\]')} `+ques));
        }
        catch( err ) { errSwitcher(CLASSNAME, METHODNAME, err ) }
      });
    };
    /**
     * Sends a string to print to the front end
     * @param what {String} What to print to the front end
     * @returns {boolean}
     */
    tell(what) {
      let METHODNAME = 'tell(what)';
      try {
        is( what, 'string', 'what');
        _.get(this).rl.output.write(c.bold(what));
        return true;
      }
      catch( err ) { errSwitcher(CLASSNAME, METHODNAME, err) }
    }
  }
  return CLIBackEnd;
})();
