var qa = [];
var hqa = [];
 // psi, theta, phi
var qb =[];
var qbprev = [];
var hqb = [];
//var Eulerb = [0,0,0]; // psi, theta, phi
var qc = []
var qcprev = [];
var hqc = [];
//var Eulerc = [0,0,0]; // psi, theta, phi
var qd = [];
var qdprev = [];
var hqd = [];
//var Eulerd = [0,0,0]; // psi, theta, phi
var qe = [];
var hqe = [];
//var Eulere = [0,0,0]; // psi, theta, phi
var q = [];
var hq = [];
//var Euler = [0,0,0]; // psi, theta, phi
var lh = [];
var rh = [];
//shoulder angles
var alphals = 0, betals = 0, gammals = 0;
var alphars = 0, betars = 0, gammars = 0;
//elbow angles
var alphale = 0, betale = 0, gammale = 0;
var alphare = 0, betare = 0, gammare = 0;

function Handanim()
{
  //gammals = -i;
  //gammars = -i;
  gammals=Euler.b.z;
  alphals = Euler.b.y;
  betals = Euler.b.x;

  gammale=Euler.a.z;
  alphale = Euler.a.y;
  betale = Euler.a.x;



  var cals,cbls,cgls, sals, sbls, sgls;
  var cars,cbrs,cgrs, sars, sbrs, sgrs;
  sals = sin(radians(alphals));
  sbls = sin(radians(betals));
  sgls = sin(radians(gammals));
  cals = cos(radians(alphals));
  cbls = cos(radians(betals));
  cgls = cos(radians(gammals));
  sars = sin(radians(alphars));
  sbrs = sin(radians(betars));
  sgrs = sin(radians(gammars));
  cars = cos(radians(alphars));
  cbrs = cos(radians(betars));
  cgrs = cos(radians(gammars));
  alphare = alphars;
  alphale = alphals;
  push();
  translate(SIZEX/2-150,SIZEY/2-200,0);
  rotateZ(radians(alphals));
  rotateY(radians(betals));
  rotateX(radians(gammals));
  armsample(); 
  pop(); 
  push();
  translate(SIZEX/2-150+200*(cgls*sbls*cals+sgls*sals),SIZEY/2-200+200*(cals*sgls-cals*sbls*sals),200*cgls*cbls);
  rotateZ(radians(alphale));
  rotateY(radians(betale));
  rotateX(radians(gammale));
  armsample(); 
  pop(); 
  push();
  translate(SIZEX/2+150,SIZEY/2-200,0);
  rotateZ(radians(alphars));
  rotateY(radians(betars));
  rotateX(radians(gammars));
  armsample(); 
  pop(); 
  push();
  translate(SIZEX/2+150+200*(cgrs*sbrs*cars+sgrs*sars),SIZEY/2-200+200*(cars*sgrs-cars*sbrs*sars),200*cgrs*cbrs);
  rotateZ(radians(alphare));
  rotateY(radians(betare));
  rotateX(radians(gammare));
  armsample();  
  pop();   
}

function drawBody() {
  noStroke();
  fill(38, 38, 100,100);
  ellipse(SIZEX/2, SIZEY/2-300, 150, 145); // head
  rect(SIZEX/2-30,SIZEY/2-235, 60,45); // neck
  rect(SIZEX/2-130,SIZEY/2-200, 270, 300); // body  
  rect(SIZEX/2-130,SIZEY/2+105,60,240); // left leg
  rect(SIZEX/2-150+230,SIZEY/2+105,60,240); // right leg
  fill(222, 222, 249);
  ellipse(SIZEX/2-75+35, SIZEY/2-350+35, 35, 12); // left eye
  ellipse(SIZEX/2+75-35, SIZEY/2-350+35, 35, 12); // right eye
  ellipse(SIZEX/2, SIZEY/2-350+90, 35, 6); // right eye
}

function armsample() {
  //noStroke();
  stroke(61,69,88);
  //strokeWeight(2);
  fill(214, 102, 153,100);
  beginShape();
  vertex(0,0,0);
  vertex(0,10,0);
  vertex(10,10,0);
  vertex(10,0,0);
  endShape(CLOSE);
  beginShape();
  vertex(0,0,200);
  vertex(0,10,200);
  vertex(10,10,200);
  vertex(10,0,200);
  endShape(CLOSE);
  beginShape();
  vertex(0,0,0);
  vertex(0,0,200);
  vertex(0,10,200);
  vertex(0,10,0);
  endShape(CLOSE);
  beginShape();
  vertex(10,0,0);
  vertex(10,0,200);
  vertex(10,10,200);
  vertex(10,10,0);
  endShape(CLOSE);
  beginShape();
  vertex(0,0,0);
  vertex(10,0,0);
  vertex(10,0,200);
  vertex(0,0,200);
  endShape(CLOSE);
}

function textinpage()
{
  
   //LEFT SHOULDER
   textBox[2].html("Extension/Flexion:" + round(gammals));
   textBox[3].html("Internal/external rotation:" + round(degrees(alphals)));
   textBox[4].html("Abduction/Adduction:" + round(degrees(betals)));
  //LEFT ELBOW
   textBox[6].html("Extension/Flexion:" + round(degrees(gammale)));
   textBox[7].html("Pronation/Supination:" + round(degrees(alphale)));
  //RIGHT SHOULDER
   textBox[9].html("Extension/Flexion:" + round(gammars));
   textBox[10].html("Internal/external rotation:" + round(degrees(alphars)));
   textBox[11].html("Abduction/Adduction:" + round(degrees(betars)));
  //RIGHT ELBOW
   textBox[13].html("Extension/Flexion:" + round(degrees(gammare)));
   textBox[14].html("Pronation/Supination:" + round(degrees(alphare)));
  
   textBox[15].html("Sampling rate: " +round(frameRate()));
  

}

function eulerAngles() {
   textBox[2].html("eulerA" + Euler.a);
   textBox[3].html("eulerB" + Euler.b);
   textBox[4].html("eulerC:" + Euler.c);
   textBox[5].html("eulerD:" + Euler.d);

}

  


