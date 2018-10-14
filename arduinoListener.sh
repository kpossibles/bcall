#!/usr/bin/node

const net = require('net');
const srvr = net.createServer( (conn) => {
  console.log('arduino connected');
  conn.setEncoding('utf8');
  conn.setTimeout(10000);
  conn.on('data', (d) => {
    console.log(`Received comm '${d}'`);
  });
  conn.on('timeout', () => console.log('timed out after 10 seconds of no contact') );
  conn.on('error', (err) => console.log(`caught error on socket : ${err.message}`) );
  conn.on('end', () => console.log('arduino disconnected') );
}).listen( { host : '0.0.0.0', port : 53211 }, () => console.log('Listening for connections on external port 53211. Firewall may need to be adjusted or disabled to let connections through.') );
