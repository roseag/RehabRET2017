var qa = [];
var hqa = [];
var Eulera = []; // psi, theta, phi
var qb =[];
var qbprev = [];
var hqb = [];
var Eulerb = []; // psi, theta, phi
var qc = []
var qcprev = [];
var hqc = [];
var Eulerc = []; // psi, theta, phi
var qd = [];
var qdprev = [];
var hqd = [];
var Eulerd = []; // psi, theta, phi
var qe = [];
var hqe = [];
var Eulere = []; // psi, theta, phi
var q = [];
var hq = [];
var Euler = []; // psi, theta, phi
var lh = [];
var rh = [];

function readQ(reading) {
  if (reading != null && reading.length == 5) {
      var inpArr = [];
      var label = reading[0] + ": ";
      for (var i = 1; i < 5; i++) {
          inpArr.push(decodeFloat(decode1(reading[i].trim())));
          label += reading[i] + ": " + inpArr[i-1] + "    ";
      }

      console.log(reading);
      console.log(inpArr)

      if (reading[0] == "a") {
        //text[0].html(label);
        qa = inpArr;
      }
      else if (reading[0] == "b") {
        //text[1].html(label); //reading[1] + " " + reading[2] + " " + reading[3] + " " + reading[4]);
        qb = inpArr;
      }
      else if (reading[0] == "c") {
        //text[2].html(label); //reading[1] + " " + reading[2] + " " + reading[3] + " " + reading[4]);
        qc = inpArr;
      }
      else if (reading[0] == "d") { 
        //text[3].html(label);//reading[1] + " " + reading[2] + " " + reading[3] + " " + reading[4]);
        qd = inpArr;
        /*for (var j = 1;j<=4;j++) {
          
            qd.push(Kalmanfilter(decodeFloat(decode1(trim(inputStringArr[j]))),varprocess,varmeasq[j-1],qdprev[j-1],cov[j-1]));
            cov.push(P);

            }*/
      }
      else if (reading[0] == "e") {
        //text[4].html(label);//"e: " + reading[1] + " " + reading[2] + " " + reading[3] + " " + reading[4]);
        qe = inpArr;
      }
      else if (reading[0] == "w") {
        //text[5].html(label);//"w: " + reading[1] + " " + reading[2] + " " + reading[3] + " " + reading[4]);
         q = inpArr; 
      }
      //else
       // console.log("weird data: " + reading);
    }
}
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
    numer += digit*parseInt(pow(32,i));
  } 
  return numer;
}

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


