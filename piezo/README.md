## Classes

<dl>
<dt><a href="#Collision">Collision</a></dt>
<dd></dd>
<dt><a href="#Piezo">Piezo</a></dt>
<dd></dd>
</dl>

<a name="Collision"></a>

## Collision
**Kind**: global class  

* [Collision](#Collision)
    * [new Collision(id)](#new_Collision_new)
    * [.mk()](#Collision.mk) ⇒ <code>integer</code>
    * [.rm(id)](#Collision.rm) ⇒ <code>integer</code>
    * [.fetchByProfileID(id)](#Collision.fetchByProfileID) ⇒ [<code>Array.&lt;Collision&gt;</code>](#Collision)

<a name="new_Collision_new"></a>

### new Collision(id)
Data structure representing a piezo collision


| Param | Type | Description |
| --- | --- | --- |
| id | <code>integer</code> | ID of collision to construct |

<a name="Collision.mk"></a>

### Collision.mk() ⇒ <code>integer</code>
Create a new collision in the database

**Kind**: static method of [<code>Collision</code>](#Collision)  
**Returns**: <code>integer</code> - ID of collision on success, -1 on failure  

| Param | Type | Description |
| --- | --- | --- |
| opt.piezoID | <code>integer</code> | ID of piezo collision recorded on |
| opt.estEl | <code>float</code> | Estimated elevation of collision = ( piezo max - piezo min ) / 2 |
| opt.wave | <code>string</code> | Digital wave recorded by piezo |

<a name="Collision.rm"></a>

### Collision.rm(id) ⇒ <code>integer</code>
Delete collision from database

**Kind**: static method of [<code>Collision</code>](#Collision)  
**Returns**: <code>integer</code> - ID of removed collision on success, -1 on failure  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>integer</code> | ID of collision to delete |

<a name="Collision.fetchByProfileID"></a>

### Collision.fetchByProfileID(id) ⇒ [<code>Array.&lt;Collision&gt;</code>](#Collision)
Return a list of all collisions associated with a piezo, list is sorted by most recent first

**Kind**: static method of [<code>Collision</code>](#Collision)  
**Returns**: [<code>Array.&lt;Collision&gt;</code>](#Collision) - An array of collisions  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>integer</code> | Piezo id |

<a name="Piezo"></a>

## Piezo
**Kind**: global class  

* [Piezo](#Piezo)
    * [new Piezo(id)](#new_Piezo_new)
    * _instance_
        * [.hit(wave)](#Piezo+hit) ⇒ [<code>Collision</code>](#Collision)
    * _static_
        * [.mk()](#Piezo.mk) ⇒ <code>integer</code>
        * [.rm(id)](#Piezo.rm) ⇒ <code>integer</code>
        * [.fetchByMonID(id)](#Piezo.fetchByMonID) ⇒ <code>JSON</code>

<a name="new_Piezo_new"></a>

### new Piezo(id)
Data structure representing an individual piezo


| Param | Type | Description |
| --- | --- | --- |
| id | <code>integer</code> | The ID of the piezo to construct |

<a name="Piezo+hit"></a>

### piezo.hit(wave) ⇒ [<code>Collision</code>](#Collision)
Register a hit on this piezo by making a collision in the database

**Kind**: instance method of [<code>Piezo</code>](#Piezo)  
**Returns**: [<code>Collision</code>](#Collision) - Instance of collision created  

| Param | Type | Description |
| --- | --- | --- |
| wave | <code>string</code> | The digital wave of the piezo as a string |

<a name="Piezo.mk"></a>

### Piezo.mk() ⇒ <code>integer</code>
Create a new Piezo

**Kind**: static method of [<code>Piezo</code>](#Piezo)  
**Returns**: <code>integer</code> - ID of the Piezo created, -1 on failure  

| Param | Type | Description |
| --- | --- | --- |
| opt.monID | <code>integer</code> | ID of the Monitor the piezo is attached to |
| opt.fcdID | <code>integer</code> | ID of the Facade associated with the piezo |
| opt.name | <code>string</code> | Name of Piezo |
| opt.dir | <code>string</code> | Direction the piezo is facing |
| opt.el.min | <code>float</code> | Lower bound of the piezo's elevation |
| opt.el.max | <code>float</code> | Upper bound of the piezo's elevation |
| opt.pid | <code>integer</code> | Identifier used by monitor for the piezo pin |

<a name="Piezo.rm"></a>

### Piezo.rm(id) ⇒ <code>integer</code>
Removes a piezo from the database

**Kind**: static method of [<code>Piezo</code>](#Piezo)  
**Returns**: <code>integer</code> - ID removed on success, -1 on failure  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>integer</code> | ID of piezo to delete |

<a name="Piezo.fetchByMonID"></a>

### Piezo.fetchByMonID(id) ⇒ <code>JSON</code>
Returns a JSON structure of Piezos associated with a monitor where key=>value = pinID=>Piezo

**Kind**: static method of [<code>Piezo</code>](#Piezo)  
**Returns**: <code>JSON</code> - pinID=>Piezo  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>integer</code> | ID of monitor to fetch for |

