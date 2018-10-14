# Bird CALL
## Bird Collisions Accurately Located and Logged

### Installation

First you need to ensure you have the following packages installed locally (ie with 'apt install' on Debian-based machines, 'zypper in' on Suse machines, or 'yum install' on Red Hat machines):

- sqlite3
- nodejs ( v8.2 or higher )
- make
- g++
- gcc
- git

On Debian machines the easiest way to install the proper node is with 

``` $ sudo curl -sL https://deb.nodesource.com/setup_8.x | bash - ; apt install nodejs ```

Next install this nodeJS package via npm:

``` $ npm i git+https://github.com/leithouse/bcall.git ```

Now you need to set up an environment variable that will point to the installation directory by adding a line to ~/.profile. For instance, if you installed at /home/bcall/bcall2, you could do the following from the command line:

``` $ echo export BCALL_DIR=/home/bcall/bcall2 >> ~/.profile ```

Now you need to ensure that your user has permissions to access the serial ports by adding it to the group dialer (following example assumes user name is bcall ):

``` # useradd -g dialer bcall ```

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
