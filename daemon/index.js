#!/usr/bin/node

require('phxerrors');
const { is, errSwitcher, localIPs } = require('phxutils');
//const logger = require('../logger');
const Monitor = require('../monitor');
const CLI = require('../cli');
const net = require('net');
const Location = require('../location');
const Flasher = require('../flasher');
const BCALL_DIR = process.env.BCALL_DIR;
const Facade = require('../facade');
const color = require('ansi-colors');

const monServer = Monitor.server();
const cliServer = new CLI.Server('/tmp/bcall');
let mons = Monitor.list();
let fcds = Facade.list();
let locs = Location.list();

monServer.init().then( () => {
  monServer.on('conn', (d) => {
    console.log( `Monitor connection from monitor id ${d.monID}` );
    setTimeout( () => mons[d.monID].addConn(d.conn), 500 );
  });
});

const commands =
`\n${color.underline.bold('COMMANDS')}
○ ${color.bgBlue.bold('.tutorial')}: ${color.reset('Getting started')}
○ ${color.bgBlue.bold('.help')}: ${color.reset('lists all the commands')}
○ ${color.bgBlue.bold('.q[uit] / .exit')}: ${color.reset('quits the program')}
○ ${color.bgBlue.bold('mon-list')}: ${color.reset('list all the Monitors')}
○ ${color.bgBlue.bold('mon-add')}: ${color.reset('add a new Monitor and flashes the Arduino code to the connected chip')}
○ ${color.bgBlue.bold('ident <Monitor ID>')}: ${color.reset('identifies the piezo sensors to add to the system')}
○ ${color.bgBlue.bold('find-devs')}: ${color.reset('finds the correct Arduino serial port when its connected to the system')}
○ ${color.bgBlue.bold('loc-next-id')}: ${color.reset('find next available location ID')}
○ ${color.bgBlue.bold('mon-add-info-only')}: ${color.reset('adds a new Monitor without flashing the arduino')}
○ ${color.bgBlue.bold('facade-add')}: ${color.reset('add a new facade')}
○ ${color.bgBlue.bold('facade-list')}: ${color.reset('list all the facades in the database')}
○ ${color.bgBlue.bold('facade-change')}: ${color.reset('modify a pre-existing facade from the DB')}
○ ${color.bgBlue.bold('piezo-list')}: ${color.reset('list all the piezo sensors')}
○ ${color.bgBlue.bold('collision-list')}: ${color.reset('list collisions with criteria - time, piezo, direction, monitor, etc')}
○ ${color.bgBlue.bold('export')}: ${color.reset('export database information criteria to CSV')}`;

const tutorial = 
`Welcome to BirdCALL! 

Before getting started in this program, you must flash the embedded.ino code to the USB-connected Arduino chip (Feather M0 WiFi) using the Arduino IDE.
1. Use command ${color.bgBlue('mon-add-info-only')} to correctly add a monitor to the system before starting up the Arduino chip.
2. Next, use command ${color.bgBlue('ident <Monitor ID #>')} to add all the piezo sensors to the system
3. Your BirdCALL program is ready to receive data!
4. Use other commands under ${color.bgBlue('.help')} to modify, list, and export collected data.`;

/**
 * Formats table row entries for list commands
 * @param {*} type 
 * @param {*} listing 
 */
let formatTableRow = (type, listing) => {
	let f = '';
	if (type == 'monitor'){
		if( !listing)
			listing = { id : 'ID', name : 'Name', isActive : 'isActive', piezoCount : 'NumPiezos' }
		let obj = ['id', 'name', 'isActive'];
		obj.forEach( (prop) => {
			if(listing['id'] == 'ID')
				f = f + '\t' + color.bold(listing[ prop ]); 
			else
				f = f + '\t' + listing[ prop ];
		});
		if (listing['piezoCount'] != 'NumPiezos') f = f + '\t\t' + listing[ 'piezoCount' ];
		else f = f + '\t' + color.bold(listing[ 'piezoCount' ]);
	} else if (type == 'facade'){
		if( !listing )
			listing = { id : 'ID', name : 'Name', desc : 'Description'}
		let obj = ['id', 'name', 'desc'];
		obj.forEach( (prop) => {
			if(listing['id'] == 'ID')
				f = f + '\t' + color.bold(listing[ prop ]); 
			else
				f = f + '\t' + listing[ prop ];
		});
	} else if (type == 'location'){
		if( !listing )
			listing = { id : 'ID', name : 'Name', addr : 'Address', desc : 'Description'}
		let obj = ['id', 'name', 'addr', 'desc'];
		obj.forEach( (prop) => {
				if (listing[prop] == undefined)
						f = f + '\tN/A';
				else{
					if(listing['id'] == 'ID')
						f = f + '\t' + color.bold(listing[ prop ]); 
					else
					f = f + '\t' + listing[ prop ];
				}
		});
	} else {
		console.log(`formatTableRow: unable to find type: ${type}`);
	}
	return f;
}

let fillRow = () => {
  let r = '';
  for( let i = 0; i < 60; i++ ) r += color.magenta('-');
  return r;
}
let filledRow = fillRow();

cliServer.on('conn', (c) => {
  let monSetup = (m) => {
    m.on('unregistered', (d) => {
      c.tell(d.warn);
    });
    m.on('hit', (pid) => {
      c.tell(`Registered hit on ${color.bgBlue(m.name)} (${color.bgBlue(m.id)}) pinID ${color.bgBlue(pid)})`);
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
    let list = '';
    if( lsp == -1 ) 
      cmd = l;
    else {
      cmd = l.substring(0,lsp);
      args = l.substring(lsp+1).trim();
    }
    if( cmd == '' )
      return;
    switch( cmd ) {
			case '.tutorial':
				c.tell(tutorial);
				c.once('line', coreCmd);
				break;
      case '.help':
        c.tell(commands);
        c.once('line', coreCmd);
        break;
      // new code
      case 'facade-add' :
          let finfo = {};
            c.ask('Name of Facade?').then( (ans) => {
                finfo.name = ans.trim();
                return c.ask('Facade description?');
          }).then ( (ans)=>{
              finfo.desc = ans.trim();
              let fcd = Facade.create(finfo);
              c.tell(`${finfo.name} with ID: ${fcd} added\n`);
              fcds = Facade.list();
          })
          .catch( (err) => { color.red(c.tell(err.message)) })
          .then ( ()=>{
              c.once('line', coreCmd );
          });
          break;
      case 'test':
          if(args!=undefined)
              c.tell(`Facade ${args}: `+Facade.id);
          c.once('line', coreCmd );
          break;
      case 'facade-change' :
          list = {};
          if( args == undefined ) {
            c.tell(`Invalid facade ID; command is ${color.bgBlue('facade-change [ID]')}`);
            c.once('line', coreCmd);
            return;
            }
          list.id = args;
          c.ask('Name of Facade? (leave blank if no changes)').then( (ans) => {
              list.name = ans.trim();
              return c.ask('Description? (leave blank if no changes)')
        }).then( (ans) =>{
            list.desc = ans.trim();
            let temp = Facade.edit(list);
            c.tell(`Facade id ${list.id} details changed ${temp}\n`);
            fcds = Facade.list();
              
        }).catch( (err) => { color.red(c.tell(err.message)) })
          .then ( ()=>{
              c.once('line', coreCmd );
          });
          break;
      case 'facade-list':
          list = `\n${filledRow}\n` + formatTableRow('facade') + `\n${filledRow}\n` ;
          for( let id in fcds ) {
          list = list + formatTableRow( 'facade', fcds[id] ) + '\n';
          }
          list = list + filledRow;
          c.tell(list);
          c.once('line', coreCmd);
          break;
      case 'loc-list':
        list = `\n${filledRow}\n` + formatTableRow('location') + `\n${filledRow}\n` ;
        for( let id in locs ) {
          list = list + formatTableRow('location', locs[id] ) + '\n';
        }
        list = list + filledRow;
        c.tell(list);
        c.once('line', coreCmd);
        break;
      //new code end
      case 'mon-list' :
        list = `\n${filledRow}\n` + formatTableRow('monitor') + `\n${filledRow}\n` ;
        for( let id in mons ) {
          list = list + formatTableRow('monitor', mons[id] ) + '\n';
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
    })
    .then( (ans) => {
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
          let f = () => Flasher.flash(port).then( () => resolve() ).catch( (err) => { c.tell( color.red(err.message) ); c.ask('Try again? (y[es]/no)').then( (ans) => { if( ans.startsWith('y') ) f(); else reject(err) } ) } );
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
        .catch( (err) => { c.tell(color.red(err.message)) })
        .then( () => {
          c.tell( ' --- Exiting Monitor Flashing SubProgram ---\n' );
          c.once('line', coreCmd );
        })
        break;
      case 'ident' :
				if( ! mons[args] ) 
				{
          c.tell(`Invalid monitor ID; command is ${color.bgBlue('ident [ID]')}`);
          c.once('line', coreCmd);
          return;
        }
        let mon = mons[args];
				mon.identify(true);
				
				let ident = (pid) => 
				{
          let info = { pid : pid };
          c.tell('Piezo detected\n');
          c.ask('Name of piezo?').then( (ans) => {
            info.name = ans.trim();
            return c.ask('Minimum detection elevation?');
          })
          .then( (ans) => {
            info.el = { min : Number(ans) }
            return c.ask('Maximum detection elevation?');
          })
          .then( (ans) => {
            info.el.max = Number(ans);
            return c.ask('N, NE, E, SE, S, SW, W, or NW?');
          })
          .then( (ans) => {
            info.dir = ans.trim();
            info.fcdID = 1;
            c.tell('Defaulting to tempered glass facade\n');
            let piezo = mon.addPiezo(info);
            c.tell(`${piezo.name} successfully added to ${mon.name}\n`);
						//mon.once('identify', ident);
          });
				}
				
				let kill =  () => 
				{
					mon.removeListener('identify', ident);
					//mon.removeAllListeners('identify');
					mon.removeListener('identTimeout', kill);
					//mon.removeAllListeners('identTimeout');

					c.tell(` --- Exiting Identify on ${mon.name} SubProgram ---\n`);
					c.once('line', coreCmd);
				}
				
        mon.once('identTimeout', kill);
        mon.once('identify', ident);
				let chkQuit = (l) => 
				{
          if( l == 'stop' ) {
            c.removeListener('line', l);
            kill();
          }
				}
				
        c.tell(` --- Entering Identify on ${mon.name} SubProgram --- \n\t\t -- 'stop' to exit -- \n`);
        c.once('line', coreCmd);
        
        break;
      case 'mon-next-id': 
        let mid = Monitor.nextID();
        c.tell(` Next available monitor ID is ${mid}\n`);
        c.once('line', coreCmd);
        break;
        //---New code
      case 'loc-next-id':
      let lid = Location.nextID();
      c.tell(` Next available location ID is ${lid}\n`);
      c.once('line', coreCmd);
      break;
      //---
      case 'find-devs':
        Flasher.findDev().then( (devs) => {
          c.tell( devs + '\n' );
          c.once('line', coreCmd);
        });
        break;
      case 'mon-add-info-only':
      //---New code
      let monInfo = {}
      let locInfo = {}

      c.ask('What is the address of the building in which the Monitor is located? (Leave blank for default location)').then( (ans) => {
        locInfo.addr = ans.trim();
        return c.ask('Give a name to this location. (Leave blank for default location)');
      })
      .then( (ans) => {
        locInfo.name = ans.trim();
        if (locInfo.name != '' && locInfo.addr != '') {
          try {
            let locNextID = Location.nextID();
            let loc = new Location(Location.create(locInfo));
            c.tell('New location successfully created')
            locs=Location.list();
            let locGetID = loc.id();
            //c.tell(`Next locID before adding new loc: ${locNextID}. locID of new loc: ${logGetID}\n`);
            monInfo.locID = LocNextID;
          }
          catch(err) {
            c.tell( color.red(err.message + '\n' + '(ERROR) Location will default to UWM SARUP' + '\n'));
            monInfo.locID = 1;
          }
        }
        else {
          c.tell('Location will default to UWM SARUP' + '\n');
          monInfo.locID = 1;
        }
        return c.ask('What should we name the monitor?');
      })
    
      //---End of New Code
        .then( (ans) => {
          monInfo.name = ans;
          return c.ask('What is the ID of the monitor? (answer help if this doesnt make sense)')
    })
    .then( (ans) => {
          if( ans == 'help' ) {
            let tut = `\nAll directory references are located within the main bcall directory at ${color.bgBlue.bold(process.env.BCALL_DIR)}\n
            Until the CLI flasher is fixed, the monitor info needs to be set manually\n
This involves editing config.h in the directory embedded\n
You can use the command ${color.bgBlue.bold('"mon-next-id"')} to retrieve the proper id\n
After editing the file, go to the lib directory (${color.bgBlue.bold('$BCALL_DIR/lib')})\n
Type ${color.bgBlue.bold('./builder')} to compile the binary\n
Next make sure that the arduino is connected via usb to this computer\n
Ensure the arduino is in bootloader mode with two rapid presses to the reset button\n
Now you need to know the port that the device is on, currently we found ports at:\n`;
            c.tell(tut);
            Flasher.findDev().then( (devs) => {
              tut = `${color.bgBlue.bold(devs)} + \n
In the future you can use the command ${color.bgBlue.bold('find-devs')} to skip the tutorial and just find the dev\n
If there are multiple devices shown, try unplugging the arduino and seeing which one disappears\n
Now you run the flasher (still from the lib directory: ${color.bgBlue('$BCALL_DIR/lib')})\n
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
            monInfo.id = parseInt(ans);
            try {
              let m = new Monitor( Monitor.mk(monInfo) );
              c.tell('Monitor successfuly created\n');
              monSetup(m);
              mons = Monitor.list();
              c.once('line', coreCmd);
            }
            catch( err ) { 
              c.tell( color.red(err.message + '\n') );
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
