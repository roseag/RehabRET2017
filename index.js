
var WebSocketServer = require('ws').Server;
var SERVER_PORT = 8081;               // port number for the webSocket server
var wss = new WebSocketServer({port: SERVER_PORT}); // the webSocket server
var connections = [];          // list of connections to the server
var qw = [0,0,0,0];   //initialize quaternion array for w pod (base)


const SerialPort = require('serialport');
const Readline = SerialPort.parsers.Readline;
const port = new SerialPort('/dev/cu.usbserial-DN007D5S', {
  baudRate: 250000
}); //connect to RFduino's serial port at 250,000 bps

const parser = port.pipe(new Readline());
//pipe serial port data to parser


parser.on('data', function(data) {
//called whenever serial port data is recieved
    
	if (data != null) {
    var dataToSend = null;
		var dataArr = data.split(","); //split string of data into array
    if (dataArr.length == 5) {//quaternion format, convert to euler
      dataToSend = parseQuat(dataArr);
      console.log("QUAT: " + dataToSend);
    }
    else if (dataArr.length == 4) {//grasp format, get rid of letter (?)
      dataArr.shift();
      dataToSend = dataArr;
      console.log("GRASP: " + dataToSend)
    }
    else //
      console.log("BAD DATA");

    if (dataToSend != null && connections.length > 0) { //broadcasts messages to all webSocket clients
      for (myConnection in connections) {   // iterate over the array of connections
          connections[myConnection].send(dataToSend.join()); // send the data to each connection
          //*As a String, otherwise turns into a Blob
      }
    }
  }
});

//called whenever jacket.html is accessed
wss.on('connection', function(client) {
 console.log("New Connection"); // you have a new client
 connections.push(client); // add this client to the connections array
 
 //not used
 client.on('message', function (data) {	// when a client sends a message,
 console.log("sending to serial: " + data);
 port.write(data);
 
}); 
 
 client.on('close', function() { // when a client closes its connection
 console.log("connection closed"); // print it out
 var position = connections.indexOf(client); // get the client's position in the array
 connections.splice(position, 1); // and delete it from the array
 });
});


function parseQuat(dataArr) {
  var quat = convertQ(dataArr); //convert to decimal
  var letter = dataArr[0]; //grab letter from original data
  console.log(letter + ": " + quat);
  var euler = null;

  if (letter=='w') //set qw, do not send euler
    qw = quat;
  else { // send euler angle
    var euler = quat2Euler(quatProd(quatConjugate(qw),quatProd(quat,qw)));
    euler.unshift(letter); //add letter back
  }
  return euler;
}
 
//base 32  to floating pt
function convertQ(q) {
  var inpArr = [];
  for (var i = 1; i < 5; i++) 
    inpArr.push(decodeFloat(decode1(q[i].trim())));
  return inpArr;
}

//base32 to dec
function decode1(s) {
  var l = s.length;
 // println("Z" + l);
  var numer=0;
  var digit = 0;
  for(var i=0; i<l;i++) {
    var temp = s.charCodeAt(i);
    if(temp<58)
      digit=temp-48;
    else if(temp>=65)
      digit = temp-55;
    numer += digit*parseInt(Math.pow(32,i));
  } 
  return numer;
}

//dec to float
function decodeFloat(inString) {
  var inData;
  var data;
    inData = parseFloat(inString);
    if(inData> 32767 ) {
      inData -= 65536;
    }
    data = parseFloat(inData) / 16384.0;
    return data;
 }

var Pc = 0.0, G = 0.0, P = 1.0, Xp = 0.0, Zp = 0.0, Xe = 0.0;
var varmeasq = [0,0,0,0];
var cov = [0,0,0,0];
var varprocess = 1E-3;
//Function for Kalman Filter
function Kalmanfilter(val, varProcess, varmeas, prev, covariance)
{  
  Pc = covariance + varProcess;
  G = Pc/(Pc + varmeas);
  P = (1-G)*Pc;
  Xp = prev;
  Zp = Xp;
  Xe = G*(val-Zp)+Xp; // Update
  return(Xe);
}

// return the quaternion conjugate of quat
function quatConjugate(quat) {
  return [quat[0],-quat[1],-quat[2],-quat[3]]
}

// returns a quaternion from an axis angle representation
function quatAxisAngle(axis, angle) {
  var halfAngle = angle / 2.0;
  var sinHalfAngle = Math.sin(halfAngle);
  return [Math.cos(halfAngle),
  		-axis[0] * sinHalfAngle,
  		-axis[1] * sinHalfAngle,
  		-axis[2] * sinHalfAngle];
  }

function quatProd(a, b) {
  return [a[0] * b[0] - a[1] * b[1] - a[2] * b[2] - a[3] * b[3],
  		a[0] * b[1] + a[1] * b[0] + a[2] * b[3] - a[3] * b[2],
  		a[0] * b[2] - a[1] * b[3] + a[2] * b[0] + a[3] * b[1],
  		a[0] * b[3] + a[1] * b[2] - a[2] * b[1] + a[3] * b[0]];
}

// See Sebastian O.H. Madwick report 
// "An efficient orientation filter for inertial and intertial/magnetic sensor arrays" Chapter 2 Quaternion representation
function quat2Euler(q) {
	var euler = [0,0,0];
	var ysqr =  q[2]* q[2];
    var t0 = -2.0 * (ysqr + q[3] * q[3]) + 1.0;
    var t1 = +2.0 * (q[1] * q[2] - q[0] * q[3]);
    var t2 = -2.0 * (q[1] * q[3] + q[0] * q[2]);
    var t3 = +2.0 * (q[2] * q[3] - q[0] * q[1]);
    var t4 = -2.0 * (q[1] * q[1] + ysqr) + 1.0;
  // Keep t2 within range of asin (-1, 1)
    t2 = t2 > 1.0 ? 1.0 : t2;
    t2 = t2 < -1.0 ? -1.0 : t2;
    euler[1] = Math.asin(t2) * 2;
    euler[2] = Math.atan2(t3, t4);
    euler[0] = Math.atan2(t1, t0);
    euler[1] *= (180.0 / Math.PI);
    euler[0] *= (180.0 / Math.PI);
    euler[2] *= (180.0 / Math.PI);
    if (euler[1] < 0) euler[1] = 360.0 + euler[1];
    if (euler[0] < 0) euler[0] = 360.0 + euler[0];
    if (euler[2] < 0) euler[2] = 360.0 + euler[2];  
    return euler;
}
  





