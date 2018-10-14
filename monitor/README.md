<a name="Monitor"></a>

## Monitor
**Kind**: global class  

* [Monitor](#Monitor)
    * [new Monitor(id)](#new_Monitor_new)
    * _instance_
        * [.identify(which)](#Monitor+identify) ⇒ <code>void</code>
        * [.addConn(conn)](#Monitor+addConn) ⇒ <code>void</code>
        * [.addPiezo()](#Monitor+addPiezo) ⇒ <code>Piezo</code>
    * _static_
        * [.list()](#Monitor.list) ⇒ [<code>Array.&lt;Monitor&gt;</code>](#Monitor)
        * [.nextID()](#Monitor.nextID) ⇒ <code>integer</code>
        * [.server()](#Monitor.server) ⇒ <code>MonServer</code>
        * [.mk()](#Monitor.mk) ⇒ <code>integer</code>

<a name="new_Monitor_new"></a>

### new Monitor(id)
Datastructure representing an arduino monitor


| Param | Type | Description |
| --- | --- | --- |
| id | <code>integer</code> | id of monitor to construct |

<a name="Monitor+identify"></a>

### monitor.identify(which) ⇒ <code>void</code>
Turn on identify function. When the monitor is identifying and recieves a hit, it will emit the event 'identify' with the corresponding piezo identifier. Times out after 30s.

**Kind**: instance method of [<code>Monitor</code>](#Monitor)  

| Param | Type | Description |
| --- | --- | --- |
| which | <code>boolean</code> | True = turn on, false = turn off |

<a name="Monitor+addConn"></a>

### monitor.addConn(conn) ⇒ <code>void</code>
Add a network socket connection. This will listen to a socket and cause the class to emit events.

**Kind**: instance method of [<code>Monitor</code>](#Monitor)  
**Emits**: <code>event:&#x27;hit&#x27;</code>, <code>event:&#x27;timeout&#x27;</code>, <code>event:&#x27;ended&#x27;</code>, <code>event:&#x27;error&#x27;</code>, <code>event:unregistered</code>  

| Param | Type | Description |
| --- | --- | --- |
| conn | <code>net.Socket</code> | The socket to listen to |

<a name="Monitor+addPiezo"></a>

### monitor.addPiezo() ⇒ <code>Piezo</code>
Add a piezo to the monitor

**Kind**: instance method of [<code>Monitor</code>](#Monitor)  
**Returns**: <code>Piezo</code> - An instance of the piezo created  

| Param | Type | Description |
| --- | --- | --- |
| opt.fcdID | <code>integer</code> | ID of the facade associated with the Piezo |
| opt.name | <code>string</code> | The name of the piezo |
| opt.dir | <code>string</code> | the direction of the surface |
| opt.pid | <code>integer</code> | the pin identifier (pinID) |
| opt.el.min | <code>float</code> | the minimum elevation of the piezo zone |
| opt.el.max | <code>float</code> | the maximum elevation of the piezo zone |

<a name="Monitor.list"></a>

### Monitor.list() ⇒ [<code>Array.&lt;Monitor&gt;</code>](#Monitor)
Compile a list of all monitors in the system

**Kind**: static method of [<code>Monitor</code>](#Monitor)  
**Returns**: [<code>Array.&lt;Monitor&gt;</code>](#Monitor) - Array of all monitors  
<a name="Monitor.nextID"></a>

### Monitor.nextID() ⇒ <code>integer</code>
Returns the next unused monitor id

**Kind**: static method of [<code>Monitor</code>](#Monitor)  
<a name="Monitor.server"></a>

### Monitor.server() ⇒ <code>MonServer</code>
Returns a monitor server instance, which opens a TCP socket on port 53211

**Kind**: static method of [<code>Monitor</code>](#Monitor)  
<a name="Monitor.mk"></a>

### Monitor.mk() ⇒ <code>integer</code>
Create a new monitor by adding a row to the database;

**Kind**: static method of [<code>Monitor</code>](#Monitor)  
**Returns**: <code>integer</code> - The id of the monitor created  

| Param | Type | Description |
| --- | --- | --- |
| opt.locID | <code>integer</code> | ID of location associated with monitor |
| opt.name | <code>string</code> | Name of new Monitor |
| opt.id | <code>integer</code> | The id of the new Monitor |

