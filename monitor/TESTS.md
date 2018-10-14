Monitor server listening on external port 53211
Firewall may need to be disabled or adjusted
Unhandled SqliteError - SQLITE_CONSTRAINT_PRIMARYKEY 'UNIQUE constraint failed: MONITOR.MON_ID'
# TOC
   - [MonServer class](#monserver-class)
   - [MonConn class](#monconn-class)
     - [rapidfire hits](#monconn-class-rapidfire-hits)
     - [timeout](#monconn-class-timeout)
     - [end()](#monconn-class-end)
   - [Monitor class](#monitor-class)
     - [constructor](#monitor-class-constructor)
     - [identify(which)](#monitor-class-identifywhich)
     - [addPiezo(opt)](#monitor-class-addpiezoopt)
     - [addConn(conn)](#monitor-class-addconnconn)
       - [hit](#monitor-class-addconnconn-hit)
       - [end conn](#monitor-class-addconnconn-end-conn)
<a name=""></a>
 
<a name="monserver-class"></a>
# MonServer class
emits an event with monID when receiving a string starting with ID.

```js
server = new MonServer();
server.init();
server.once('conn', (d) => {
  evt = d;
  expect( d).to.have.property('monID', 5);
  done();
});
client = net.createConnection({ port : 53211 }, () => {
  client.write('ID=5\r');
});
```

the event contains a reference to the socket.

```js
expect( evt.conn ).to.have.property('writable', true );
conn = evt.conn;
```

<a name="monconn-class"></a>
# MonConn class
emits checkin event.

```js
conn = new MonConn(conn);
conn.once('checkin', () => done() );
client.write('checkinasdfasdfasdfvasdf\n\n\n');
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

<a name="monconn-class-rapidfire-hits"></a>
## rapidfire hits
emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

emits a hit event with correct data.

```js
let pid = 5;
let wave = '101110111101111111111111111100000000000000000001111111111111111010101111111111111';
conn.once('hit', (d) => {
  expect( d.piezo ).to.equal(pid);
  expect( d.hitwave ).to.equal(wave);
  done();
});
client.write(`PID=${pid}&PWAVE=${wave}\r`);
```

<a name="monconn-class-timeout"></a>
## timeout
<a name="monconn-class-end"></a>
## end()
emits ended event and closes socket.

```js
conn.once('closed', () => {
  setTimeout( () => {
    expect( client ).to.have.property('writable', false);
    done();
  }, 50);
});
conn.close();
```

<a name="monitor-class"></a>
# Monitor class
<a name="monitor-class-constructor"></a>
## constructor
<a name="monitor-class-identifywhich"></a>
## identify(which)
<a name="monitor-class-addpiezoopt"></a>
## addPiezo(opt)
<a name="monitor-class-addconnconn"></a>
## addConn(conn)
<a name="monitor-class-addconnconn-hit"></a>
### hit
<a name="monitor-class-addconnconn-end-conn"></a>
### end conn
