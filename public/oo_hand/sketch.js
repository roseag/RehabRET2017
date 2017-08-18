var hand = {
  i: [0,0],
  m: [0,0],
  r: [0,0],
  p: [0,0]
}
var x,y,z;

function setup() {
  createCanvas(1366, 768, WEBGL);
  makeSliders();
  x = -width/4;
  y = height/3;
  z = -52;
}

function draw() {
  Handanim();
}
function makeSliders() {
  var y = 20;
  for (finger in hand) {
    createP(finger).position(10,y-10);
    slider(hand[finger],0,20,y);
    slider(hand[finger],1,150,y);
    y+=30;
  }
}
function slider(finger,index,x,y) {
  createSlider(0,90,0)
  .position(x, y)
  .changed(function(){ finger[index] = this.value();
   console.log(finger[index])});
}

function keyPressed() {
  console.log(createVector(x,y,z));
  if (keyCode == UP_ARROW)
    y -= 10;
  else if (keyCode == DOWN_ARROW)
    y += 10;
  else if (keyCode == LEFT_ARROW)
    x -= 10;
  else if (keyCode == RIGHT_ARROW)
    x += 10;
}

function Handanim() {
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
  rotateZ(radians(hand.i[0]));
  cylinder(height / 80, 100);
  pop();
  push();
  translate(x, y - height / 30, z);
  sphere(height / 80);
  rotateX(-PI / 2);
  rotateZ(radians(hand.m[0]));
  cylinder(height / 80, 100);
  pop();
  push();
  translate(x, y + height / 30, z);
  sphere(height / 80);
  rotateX(-PI / 2);
  rotateZ(radians(hand.r[0]));
  cylinder(height / 80, 100);
  pop();
  push();
  translate(x, y + height / 12, z);
  sphere(height / 80);
  rotateX(-PI / 2);
  rotateZ(radians(hand.p[0]));
  cylinder(height / 80, 100);
  pop();
  //left finger PIP
  push();
  translate(x, y - height / 11, z);
  translate(-100 * sin(radians(hand.i[0])), 0, -100 * cos(radians(hand.i[0])));
  sphere(height / 75);
  rotateX(-PI / 2);
  rotateZ(radians(hand.i[0]));
  rotateZ(radians(hand.i[1]));
  cylinder(height / 80, 80);
  pop();
  push();
  translate(x, y - height / 30, z);
  translate(-100 * sin(radians(hand.m[0])), 0, -100 * cos(radians(hand.m[0])));
  sphere(height / 75);
  rotateX(-PI / 2);
  rotateZ(radians(hand.m[0]));
  rotateZ(radians(hand.m[1]));
  cylinder(height / 80, 80);
  pop();
  push();
  translate(x, y + height / 30, z);
  translate(-100 * sin(radians(hand.r[0])), 0, -100 * cos(radians(hand.r[0])));
  sphere(height / 75);
  rotateX(-PI / 2);
  rotateZ(radians(hand.r[0]));
  rotateZ(radians(hand.r[1]));
  cylinder(height / 80, 80);
  pop();
  push();
  translate(x, y + height / 12, z);
  translate(-100 * sin(radians(hand.p[0])), 0, -100 * cos(radians(hand.p[0])));
  sphere(height / 75);
  rotateX(-PI / 2);
  rotateZ(radians(hand.p[0]));
  rotateZ(radians(hand.p[1]));
  cylinder(height / 80, 80);
  pop();
  //left finger DIP
  push();
  translate(x, y - height / 11, z);
  translate(-100 * sin(radians(hand.i[0])) - 80 * sin(radians(hand.i[0] + hand.i[1])), 0, -100 * cos(radians(hand.i[0])) - 80 * cos(radians(hand.i[1] + hand.i[0])));
  sphere(height / 75);
  rotateX(-PI / 2);
  rotateZ(radians(hand.i[0]));
  rotateZ(radians(hand.i[1]));
  cylinder(height / 80, 50);
  pop();
  push();
  translate(x, y - height / 30, z);
  translate(-100 * sin(radians(hand.m[0])) - 80 * sin(radians(hand.m[0] + hand.m[1])), 0, -100 * cos(radians(hand.m[0])) - 80 * cos(radians(hand.m[1] + hand.m[0])));
  sphere(height / 75);
  rotateX(-PI / 2);
  rotateZ(radians(hand.m[0]));
  rotateZ(radians(hand.m[1]));
  cylinder(height / 80, 50);
  pop();
  push();
  translate(x, y + height / 30, z);
  translate(-100 * sin(radians(hand.r[0])) - 80 * sin(radians(hand.r[0] + hand.r[1])), 0, -100 * cos(radians(hand.r[0])) - 80 * cos(radians(hand.r[1] + hand.r[0])));
  sphere(height / 75);
  rotateX(-PI / 2);
  rotateZ(radians(hand.r[0]));
  rotateZ(radians(hand.r[1]));
  cylinder(height / 80, 50);
  pop();
  push();
  translate(x, y + height / 12, z);
  translate(-100 * sin(radians(hand.p[0])) - 80 * sin(radians(hand.p[0] + hand.p[1])), 0, -100 * cos(radians(hand.p[0])) - 80 * cos(radians(hand.p[1] + hand.p[0])));
  sphere(height / 75);
  rotateX(-PI / 2);
  rotateZ(radians(hand.p[0]));
  rotateZ(radians(hand.p[1]));
  cylinder(height / 80, 50);
  pop();
}