#!/usr/bin/node

require('phxerrors');
const { is, errSwitcher, localIPs } = require('phxutils');
//const logger = require('../logger');
const Monitor = require('../monitor');
const CLI = require('../cli');
const net = require('net');
const Flasher = require('../flasher');
const BCALL_DIR = process.env.BCALL_DIR;

const monServer = Monitor.server();
const cliServer = new CLI.Server('/tmp/bcall');
let mons = Monitor.list();
monServer.init().then( () => {
  monServer.on('conn', (d) => {
    console.log( `Monitor connection from monitor id ${d.monID}` );
    setTimeout( () => mons[d.monID].addConn(d.conn), 500 );
  });
});

let formatMon = (mon) => {
  if( !mon )
    mon = { id : 'ID', name : 'Name', isActive : 'isActive', piezoCount : 'NumPiezos' }
  let f = '';
  ['id', 'name', 'isActive', 'piezoCount'].forEach( (prop) => {
    f = f + '\t' + mon[ prop ];
  });
  return f;
}
let fillRow = () => {
  let r = '';
  for( let i = 0; i < 60; i++ ) r += '-';
  return r;
}
let filledRow = fillRow();

cliServer.on('conn', (c) => {
  let monSetup = (m) => {
    m.on('unregistered', (d) => {
      c.tell(d.warn);
    });
    m.on('hit', (pid) => {
      c.tell(`Registered hit on ${m.name} (${m.id}) pinID ${pid})`);
    });
  }
  for( let id in mons ) {
    let m = mons[id];
    monSetup(m);
  }
  let coreCmd = (l) => {
    l = l.trim();
    let lsp = l.indexOf(' ');
    let cmd, args;
    if( lsp == -1 ) 
      cmd = l;
    else {
      cmd = l.substring(0,lsp);
      args = l.substring(lsp+1).trim();
    }
    if( cmd == '' )
      return;
    switch( cmd ) {
      case 'mon-list' :
        let list = `\n${filledRow}\n` + formatMon() + `\n${filledRow}\n` ;
        for( let id in mons ) {
          list = list + formatMon( mons[id] ) + '\n';
        }
        list = list + filledRow;
        c.tell(list);
        c.once('line', coreCmd);
        break;
      case 'mon-add' :
        c.tell('This function is currently broken\n');
        c.once('line', coreCmd);
        return;
        let monID;
        let cfg = { readTime : 1000, waitTime : 1000, port : 53211 };
        c.tell(' ---- Starting Monitor Flashing SubProgram ----');
        c.ask('WiFi SSID (name) running monitor on?').then( (ans) => {
          cfg.ssid = ans.trim();
          return c.ask('WiFi PSK (password)?')
        }).then( (ans) => {
          cfg.psk = ans.trim();
          let ips = localIPs();
          let t = 'Found local IPs: ';
          let first = true;
          ips.forEach( (ip) => {
            if( first )
              first = false;
            else
              t = t + ', ';
            t = t + ip;
          })
          c.tell(t + '\n');
          return c.ask('Which IP will the server listen on?');
        })
        .then( (ans) => {
          cfg.serverIP = ans;
          c.tell('Writing config.h...\n');
          return Flasher.writeConfig(cfg);
        })
        .then( (m) => {
          monID = m;
          c.tell('Compiling binary...\n');
          return Flasher.compile();
        })
        .then( () => {
          c.tell('Searching for device...\n');
          return Flasher.findDev();
        })
        .then( (ports) => {
          console.log(ports);
          let f = 'Found Adafruit device on ports: ';
          let first = true;
          ports.forEach( (p) => {
            if( !first ) f += ', ';
            else first = false;
            f += p;
          });
          c.tell( f + '\n' );
          return c.ask('Which port is the device to be flashed into a monitor?');
        })
        .then( (port) => {
          c.tell( 'Please ensure that bootloader is turned on in device' );
          return port;
        })
        .then( (port) => new Promise( (resolve, reject) => {
          c.tell( `Flashing new monitor to device on port ${port}...` );
          let f = () => Flasher.flash(port).then( () => resolve() ).catch( (err) => { c.tell( err.message ); c.ask('Try again? (y[es]/no)').then( (ans) => { if( ans.startsWith('y') ) f(); else reject(err) } ) } );
          f();
        }) )
        .then( () => {
          return c.ask('What should we name the new monitor?');
        })
        .then( (name) => {
          c.tell( 'Defaulting location to UWM SARUP\n' );
          Monitor.mk({ locID : 1, name : name, id : monID });
          mons[monID] = new Monitor(monID);
          return name;
        })
        .then( (name) => {
          c.tell( `Monitor ${name} created\n` );
        })
        .catch( (err) => { c.tell(err.message) })
        .then( () => {
          c.tell( ' --- Exiting Monitor Flashing SubProgram ---\n' );
          c.once('line', coreCmd );
        })
        break;
      case 'ident' :
        if( ! mons[args] ) {
          c.tell('Invalid monitor ID');
          c.once('line', coreCmd);
          return;
        }
        let mon = mons[args];
        mon.identify(true);
        let ident = (pid) => {
          let info = { pid : pid };
          c.tell('Piezo detected\n');
          c.ask('Name of piezo?').then( (ans) => {
            info.name = ans.trim();
            return c.ask('Minimum detection elevation?');
          }).then( (ans) => {
            info.el = { min : Number(ans) }
            return c.ask('Maximum detection elevation?');
          }).then( (ans) => {
            info.el.max = Number(ans);
            return c.ask('N, NE, E, SE, S, SW, W, or NW?');
          }).then( (ans) => {
            info.dir = ans.trim();
            info.fcdID = 1;
            c.tell('Defaulting to tempered glass facade\n');
            let piezo = mon.addPiezo(info);
            c.tell(`${piezo.name} added to ${mon.name}\n`);
            mon.once('identify', ident);
          });
        }
        let kill =  () => {
          mon.removeListener('identify', ident);
          mon.removeListener('identTimeout', kill);
          c.tell(` --- Exiting Identify on ${mon.name} SubProgram ---\n`);
          c.once('line', coreCmd);
        }
        mon.once('identTimeout', kill);
        mon.once('identify', ident);
        let chkQuit = (l) => {
          if( l == 'stop' ) {
            c.removeListener('line', l);
            kill();
          }
        }
        c.once('line', coreCmd);
        c.tell(` --- Entering Identify on ${mon.name} SubProgram --- \n\t\t -- 'stop' to exit -- \n`);
        break;
      case 'mon-next-id': 
        let mid = Monitor.nextID();
        c.tell(` Next available monitor ID is ${mid}\n`);
        c.once('line', coreCmd);
        break;
      case 'find-devs':
        Flasher.findDev().then( (devs) => {
          c.tell( devs + '\n' );
          c.once('line', coreCmd);
        });
        break;
      case 'mon-add-info-only':
        let info = { locID : 1 }
        c.tell('Defaulting location to UWM SARUP\n');
        c.ask('What should we name the monitor?')
        .then( (ans) => {
          info.name = ans;
          return c.ask('What is the ID of the monitor? (answer help if this doesnt make sense)')
        }).then( (ans) => {
          if( ans == 'help' ) {
            let tut = `\nAll directory references are located within the main bcall directory at ${process.env.BCALL_DIR}\n
            Until the CLI flasher is fixed, the monitor info needs to be set manually\n
This involves editing config.h in the directory embedded\n
You can use the command "mon-next-id" to retrieve the proper id\n
After editing the file, go to the lib directory\n
Type ./builder to compile the binary\n
Next make sure that the arduino is connected via usb to this computer\n
Ensure the arduino is in bootloader mode with two rapid presses to the reset button\n
Now you need to know the port that the device is on, currently we found ports at:\n`;
            c.tell(tut);
            Flasher.findDev().then( (devs) => {
              tut = `${devs} + \n
In the future you can use the command find-devs to skip the tutorial and just find the dev\n
If there are multiple devices shown, try unplugging the arduino and seeing which one disappears\n
Now you run the flasher (still from the lib directory)\n
The flasher takes one argument, and that argument is the device the arduino is on\n
For example, if your device is at /dev/ttyACM1, you would run\n\n
./flasher /dev/ttyACM1\n\n
Flashing can be finicky, you may need to try quite a few times \n
My personal method is to try, wait a half a second, try, wait a second, try, wait 2 seconds, try, etc\n
If the arduino flashes correctly you will get a printout that doesn\'t end in an error, and the arudino\'s red LED with flash twice.\n
The arduino will then boot into it\'s normal mode and blink the red LED thrice at a time to signal it is looking to connect to the server\n
When the arduino is connected to the server, it checks in every 200 ms or so, and you will see the wifi activity happening via the orange LED\n
Now you can start this process over\n`;
              c.tell(tut);
              c.once('line', coreCmd);
            })
          }
          else {
            info.id = ans;
            try {
              let m = new Monitor( Monitor.mk(info) );
              c.tell('Monitor successfuly created\n');
              monSetup(m);
              mons = Monitor.list();
              c.once('line', coreCmd);
            }
            catch( err ) { 
              c.tell( err.message + '\n' );
              c.once('line', coreCmd);
            }
          }
        });
        break;
      default: c.once('line', coreCmd);
    }
  };
  c.once('line', coreCmd);
});
