
# Bird CALL
## Bird Collisions Accurately Located and Logged

### Installation

First you need to ensure you have the following packages installed locally (ie with 'apt install' on Debian-based machines, `zypper in` on Suse machines, or 'yum install' on Red Hat machines):

- sqlite3
- nodejs ( v8.2 or higher )
- make
- g++
- gcc
- git

On Debian machines the easiest way to install the proper node is with 

``` $ sudo curl -sL https://deb.nodesource.com/setup_8.x | bash - ; apt install nodejs ```

On Suse machines, use YaST2 Software Management to search for sqlite3, nodejs, make, gcc, gcc-c++, git to install them all at once.

Next install this nodeJS package via npm:

``` $ npm i git+https://github.com/kpossibles/bcall.git ```

Now you need to set up an environment variable that will point to the installation directory by adding a line to ~/.profile. For instance, if you installed at /home/bcall/bcall2, you could do the following from the command line:

``` $ echo export BCALL_DIR=/home/bcall/bcall2 >> ~/.profile ```

Now you need to ensure that your user has permissions to access the serial ports by adding it to the group dialer for flashing the embedded code to the Arduino chip (following example assumes user name is bcall):

``` # useradd -g dialer bcall ```

Dialout via OpenSUSE

```sudo usermod -a -G dialout bcall```

Now reboot so the last two changes take effect

``` # systemctl reboot ```

Finally create a fresh database

``` 
$ cd $BCALL_DIR/lib
$ ./mkdb
```

### Usage

Launch the daemon (the process that always runs in the background)

```
$ cd $BCALL_DIR/bin
$ ./bcalld
```

Launch the front end interface

```
$ cd $BCALL_DIR/bin
$ ./bcall
```
### Getting Started

Before getting started in this program, you must flash the embedded.ino code to the USB-connected Arduino chip (Feather M0 WiFi) using the Arduino IDE. Modify `$BCALL_DIR/embedded` with the relevant netSSID, etc to your wifi router. Make sure you have a static IP address on your computer too.

1. Use command `mon-add-info-only` to add a monitor to the system BEFORE starting up the Arduino chip. System is limited to one monitor, so use Monitor ID = 1.
2. Next, use command `ident <Monitor ID #>` to add all the piezo sensors to the system.
3. Your BirdCALL program is ready to receive data!
4. To view all available commands, enter `.help`

#### Using the Program
1. `facade-add`,`facade-change` - adds/edits a new facade
2. `piezo-list`, `mon-list`, `loc-list`, `facade-list` - lists out all existing piezos, monitors, locations and facades respectively
3. `export` - export all the collision data to CSV in `$BCALL/export`
