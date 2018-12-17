#include <WiFi101.h>
//#include <QList.h>
#include <SPI.h>
#include "config.h"

//QList<char*> commList;
WiFiClient client;
int const NUMPINS = 16;
int pinNums[] = {0,1,5,6,9,10,11,12,13,15,16,17,18,19,20,21};
String myMAC = "";
const unsigned long checkinInterval = 1000;
unsigned long lastCheckin = 0;

void wificonnect();
void serverconnect();
void readInput(int pinIndex);
char* mkComm(int pinIndex, char* wave);
void phoneHome(char* comm);
void watcher(int pinIndex);

void blink(int length);
void pinSetup();
void getMyMAC();


/**
 *  @summary Setup protocol run on embedded boot.
 *  Phase 1 : Connects to wifi. 2 blinks
 *  If WiFi cannot connect after 30 seconds, red LED lights consistently and function doesn't exit
 *  Phase 2 : Connects to server. 3 blinks
 *  If client cannot connect after 30 seconds, red LED lights consistently and function doesn't exit
 *  Phase 3 : Writes "ID=[monitor's id]\r\n" to server
 *  Phase 4 : Internal setup. Sets pulldowns on available pins. Sets myMAC variable via WiFi library. 
 *  Starts watcher loops on all pins.
 *  On completion red LED blinks twice for 100 ms with 200 ms in between
 */
void setup() 
{
  Serial.begin(9600);
  WiFi.setPins(8,7,4,2);
  wificonnect();
  serverconnect();
  pinSetUp();
  getMyMAC();
  blink(100);
  delay(200);
  blink(100);
  Serial.println("Setup complete!");
  
}

/**
* Main program loop. Calls phoneHome and yields. If not in touch with server for 10 seconds sends message "checkin"
*/
void loop() 
{
  serverconnect();
  
  for(int i = 0; i < NUMPINS; i++) {watcher(i);}
  
  if(millis() - lastCheckin > checkinInterval) 
  {
    client.println("checkin"); 
    lastCheckin = millis();
  }
  //Serial.println("looping...");
}



/**
 * Attempts to connect to WiFi via SSID and Password in config file. Attempts for 30 seconds. 
 * While connecting red LED blinks twice for 100ms with 100ms in between and 300ms after.
 *  If WiFi cannot connect after a minute, red LED lights consistently and function doesn't exit
*/
void wificonnect() 
{
  int i = 0;
  WiFi.begin(netSSID, netPWRD);
  while(WiFi.status() != WL_CONNECTED && i < 60) 
  {
    for(int j = 0; j < 2; j++) 
    {
      blink(100);
      delay(100);
    }
    delay(300);
    i++;
  }
  if(WiFi.status() != WL_CONNECTED) 
  {
    digitalWrite(13, HIGH);
    while(true);
  }
}

/**
 *  Attempts to connect to birdcall server via IP and Port in config file. Attempts for 30 seconds.  
 *  While connecting red LED blinks three times for 100ms with 100ms in between and a 200ms delay after.
 *  If client cannot connect after a minute, red LED lights consistently and function doesn't exit
 *  Once connected, Writes "ID=[monitor's id]\r\n" to server
*/
void serverconnect() 
{
  if(client.connected()) return;

  int i = 0;
  while(!client.connected() && i < 60) 
  {
    client.connect(netSRVR, netPORT);
    for(int j = 0; j < 3; j++) 
    {
      blink(100);
      delay(100);
    }
    delay(200);
    i++;
  }
  if(!client.connected()) 
  {
    Serial.println("Not connected to server");
    digitalWrite(13, HIGH);
    while(true);
  }
  delay(250);
  Serial.println("Connected to monitor Server...sending message to server");
  String msg = "ID=" + String(monID);
  client.println(msg);
  delay(250);
}

/**
* Blinks red LED
* @param length {Integer} Time interval in ms to light LED
*/
void blink(int length) 
{
  digitalWrite(13, HIGH);
  delay(length);
  digitalWrite(13, LOW);
}

/**
* Reads input from piezo, writes 1s and 0s (highs and lows) to buffer, then calls mkComm with pinIndex and input buffer. 
* Size of buffer corresponds to readWindow in config file. Returns char array formatted by mkComm
* @param pinIndex {Integer} Index of the pinNums array telling which pin to read input on
*/
void readInput(int pinIndex) 
{
  Serial.println("In readInput method...");
  char input[readWindow + 1];
  int pinNum = pinNums[pinIndex];
  for(int i = 0; i < readWindow; i++) 
  {
    input[i] = digitalRead(pinNum) ? '1' : '0';
    //if (input[i] == '1') blink(50);
    delay(1);
  }
  input[readWindow] = '\0';
  mkComm(pinIndex, input); //method doesn't return anything
}

/**
 * Takes pinIndex and wave and creates char array of form P=pinIndex&W=wave
 * @param pinIndex {integer}
 * @param wave {char*}
 * @returns char*
 */
char* mkComm(int pinIndex, char* wave) 
{
  String intro = "P=" + String(pinIndex);
  String w = "&W=";
  int iLength = intro.length();
  char comm[iLength + readWindow + 1];
  
  int i = 0;
  for( ; i < iLength; i++) {comm[i] = intro.charAt(i);}
  
  for(i = 0; i < 3; i++)   {comm[i + iLength] = w[i];}
  
  for(i = 0; i < readWindow + 1; i++) {comm[i + 3 + iLength] = wave[i];}
  
  Serial.print(String(pinIndex)+ "'s mkComm string:");
  Serial.println(comm);
  phoneHome(comm);
}

/**
* Contacts the server and transmits hit data any pending communications. Sends message as "P=[pinIndex]&W=[wave]\r\n".
* If wifi not connected, attempts to connect to wifi and server
* If client not connected, attempt to connect to server and send ID string
* If fails to connect to either, lights red LED and blocks
*/
void phoneHome(char* comm) 
{
  if(WiFi.status() != WL_CONNECTED) wificonnect();
  
  if(!client.connected()) serverconnect();
  
    Serial.print("phoning...");
    client.flush();
    client.println(comm);
    lastCheckin = millis();
    Serial.println("sent comm");
}

/**
* Watches a pin for input. When input is received, calls readInput to format comm, 
* pushes comm to commList and then delays for time according to waitAfter in config file
* @param pinIndex {Integer} index of pinNums array corresponding to pin to monitor
*/
void watcher(int pinIndex) 
{
  int pinNum = pinNums[pinIndex];
  if(!digitalRead(pinNum)) return;
  readInput(pinIndex);
}

/**
* Pulls down all pins in pinNums array and sets pin 13 to OUTPUT for LED
*/
void pinSetUp() 
{
  pinMode(13, OUTPUT);
  for(int i = 0; i < NUMPINS; i++) {pinMode(pinNums[i], INPUT_PULLDOWN);}
  Serial.println("Pins have been setup");
}

/**
* Uses WiFi library to fetch MAC address and puts into myMAC variable
*/
void getMyMAC() 
{
  byte mac[6];
  WiFi.macAddress(mac);
  for(int i = 5; i > -1; i--) 
  {
    myMAC.concat(String(mac[i], HEX));
    if(i != 0) myMAC.concat(":");
  }
  Serial.println("My MAC address: " + myMAC);
}
