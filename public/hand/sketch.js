//0-90
var hand = {
  i: [0,0],
  m: [0,0],
  r: [0,0],
  p: [0,0]
}

var i1 = 0, 
  m1 = 0, 
  r1 = 0, 
  p1 = 0, 
  i2 = 0, 
  m2 = 0, 
  r2 = 0,
  p2 = 0;
  
function slider(x,y,finger) {
  createSlider(0,90,0)
  .position(x, y)
  .changed(function(){ finger = this.value(); console.log(finger); });
}
function setup() {
  createCanvas(1366, 768, WEBGL);
  // create sliders
  var low = 0, high = 90, mid = 45;
  var i = 20;
  //index1
  slider(20,20,i1);
  slider(150,20,i2);
  /*
  createSlider(low,high,mid)
  .position(i, i)
  .changed(function(){ i1 = this.value() });
  
  //index2
  createSlider(low,high,mid)
  .position(i+130, i)
  .changed(function(){ i2 = this.value() });
  */
  //middle
  
  
  m1Sldr = createSlider(low,high,mid).position(i, i+30);
  m2Sldr = createSlider(low,high,mid).position(i+130, i+30);
  //ring
  r1Sldr = createSlider(low,high,mid).position(i, i+60);
  r2Sldr = createSlider(low,high,mid).position(i+130, i+60);
  //pinky
  p1Sldr = createSlider(low,high,mid).position(i, i+90);
  p2Sldr = createSlider(low,high,mid).position(i+130, i+90);
}

function draw() {
  Handanim();
}

function Handanim() {
  var x = -width/4;
  var y = height/3;
  var z = -52;
  //left wrist
  fill('#4781DB');
  stroke(0);
  strokeWeight(1);
  push();
  translate(x, y);
  box(width / 75, height / 5, z+2);
  pop();
  //left finger MCP
  push();
  translate(x, y - height / 11, z);
  sphere(height / 80);
  rotateX(-PI / 2);
  rotateZ(radians(i1));
  cylinder(height / 80, 100);
  pop();
  push();
  translate(x, y - height / 30, z);
  sphere(height / 80);
  rotateX(-PI / 2);
  rotateZ(radians(m1));
  cylinder(height / 80, 100);
  pop();
  push();
  translate(x, y + height / 30, z);
  sphere(height / 80);
  rotateX(-PI / 2);
  rotateZ(radians(r1));
  cylinder(height / 80, 100);
  pop();
  push();
  translate(x, y + height / 12, z);
  sphere(height / 80);
  rotateX(-PI / 2);
  rotateZ(radians(p1));
  cylinder(height / 80, 100);
  pop();
  //left finger PIP
  push();
  translate(x, y - height / 11, z);
  translate(-100 * sin(radians(i1)), 0, -100 * cos(radians(i1)));
  sphere(height / 75);
  rotateX(-PI / 2);
  rotateZ(radians(i1));
  rotateZ(radians(i2));
  cylinder(height / 80, 80);
  pop();
  push();
  translate(x, y - height / 30, z);
  translate(-100 * sin(radians(m1)), 0, -100 * cos(radians(m1)));
  sphere(height / 75);
  rotateX(-PI / 2);
  rotateZ(radians(m1));
  rotateZ(radians(m2));
  cylinder(height / 80, 80);
  pop();
  push();
  translate(x, y + height / 30, z);
  translate(-100 * sin(radians(r1)), 0, -100 * cos(radians(r1)));
  sphere(height / 75);
  rotateX(-PI / 2);
  rotateZ(radians(r1));
  rotateZ(radians(r2));
  cylinder(height / 80, 80);
  pop();
  push();
  translate(x, y + height / 12, z);
  translate(-100 * sin(radians(p1)), 0, -100 * cos(radians(p1)));
  sphere(height / 75);
  rotateX(-PI / 2);
  rotateZ(radians(p1));
  rotateZ(radians(p2));
  cylinder(height / 80, 80);
  pop();
  //left finger DIP
  push();
  translate(x, y - height / 11, z);
  translate(-100 * sin(radians(i1)) - 80 * sin(radians(i1 + i2)), 0, -100 * cos(radians(i1)) - 80 * cos(radians(i2 + i1)));
  sphere(height / 75);
  rotateX(-PI / 2);
  rotateZ(radians(i1));
  rotateZ(radians(i2));
  cylinder(height / 80, 50);
  pop();
  push();
  translate(x, y - height / 30, z);
  translate(-100 * sin(radians(m1)) - 80 * sin(radians(m1 + m2)), 0, -100 * cos(radians(m1)) - 80 * cos(radians(m2 + m1)));
  sphere(height / 75);
  rotateX(-PI / 2);
  rotateZ(radians(m1));
  rotateZ(radians(m2));
  cylinder(height / 80, 50);
  pop();
  push();
  translate(x, y + height / 30, z);
  translate(-100 * sin(radians(r1)) - 80 * sin(radians(r1 + r2)), 0, -100 * cos(radians(r1)) - 80 * cos(radians(r2 + r1)));
  sphere(height / 75);
  rotateX(-PI / 2);
  rotateZ(radians(r1));
  rotateZ(radians(r2));
  cylinder(height / 80, 50);
  pop();
  push();
  translate(x, y + height / 12, z);
  translate(-100 * sin(radians(p1)) - 80 * sin(radians(p1 + p2)), 0, -100 * cos(radians(p1)) - 80 * cos(radians(p2 + p1)));
  sphere(height / 75);
  rotateX(-PI / 2);
  rotateZ(radians(p1));
  rotateZ(radians(p2));
  cylinder(height / 80, 50);
  pop();
}