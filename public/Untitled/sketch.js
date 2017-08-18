//0-90
 var i1,m1,r1
 function setup() {

 }

 function draw() {

 }

 function Handanim() {
   //left wrist
   fill('#4781DB');
   stroke(0);
   strokeWeight(1);
   pushMatrix();
   translate(width / 4, height / 3);
   box(width / 75, height / 5, -50);
   popMatrix();
   //left finger MCP
   pushMatrix();
   translate(width / 4, height / 3 - height / 11, -52);
   sphere(height / 80);
   rotateX(-PI / 2);
   rotateZ(radians(i1));
   drawCylinder(height / 80, height / 80, 100, 16);
   popMatrix();
   pushMatrix();
   translate(width / 4, height / 3 - height / 30, -52);
   sphere(height / 80);
   rotateX(-PI / 2);
   rotateZ(radians(m1));
   drawCylinder(height / 80, height / 80, 100, 16);
   popMatrix();
   pushMatrix();
   translate(width / 4, height / 3 + height / 30, -52);
   sphere(height / 80);
   rotateX(-PI / 2);
   rotateZ(radians(r1));
   drawCylinder(height / 80, height / 80, 100, 16);
   popMatrix();
   pushMatrix();
   translate(width / 4, height / 3 + height / 12, -52);
   sphere(height / 80);
   rotateX(-PI / 2);
   rotateZ(radians(p1));
   drawCylinder(height / 80, height / 80, 100, 16);
   popMatrix();
   //left finger PIP
   pushMatrix();
   translate(width / 4, height / 3 - height / 11, -52);
   translate(-100 * sin(radians(i1)), 0, -100 * cos(radians(i1)));
   sphere(height / 75);
   rotateX(-PI / 2);
   rotateZ(radians(i1));
   rotateZ(radians(i2));
   drawCylinder(height / 80, height / 80, 80, 16);
   popMatrix();
   pushMatrix();
   translate(width / 4, height / 3 - height / 30, -52);
   translate(-100 * sin(radians(m1)), 0, -100 * cos(radians(m1)));
   sphere(height / 75);
   rotateX(-PI / 2);
   rotateZ(radians(m1));
   rotateZ(radians(m2));
   drawCylinder(height / 80, height / 80, 80, 16);
   popMatrix();
   pushMatrix();
   translate(width / 4, height / 3 + height / 30, -52);
   translate(-100 * sin(radians(r1)), 0, -100 * cos(radians(r1)));
   sphere(height / 75);
   rotateX(-PI / 2);
   rotateZ(radians(r1));
   rotateZ(radians(r2));
   drawCylinder(height / 80, height / 80, 80, 16);
   popMatrix();
   pushMatrix();
   translate(width / 4, height / 3 + height / 12, -52);
   translate(-100 * sin(radians(p1)), 0, -100 * cos(radians(p1)));
   sphere(height / 75);
   rotateX(-PI / 2);
   rotateZ(radians(p1));
   rotateZ(radians(p2));
   drawCylinder(height / 80, height / 80, 80, 16);
   popMatrix();
   //left finger DIP
   pushMatrix();
   translate(width / 4, height / 3 - height / 11, -52);
   translate(-100 * sin(radians(i1)) - 80 * sin(radians(i1 + i2)), 0, -100 * cos(radians(i1)) - 80 * cos(radians(i2 + i1)));
   sphere(height / 75);
   rotateX(-PI / 2);
   rotateZ(radians(i1));
   rotateZ(radians(i2));
   drawCylinder(height / 80, height / 80, 50, 16);
   popMatrix();
   pushMatrix();
   translate(width / 4, height / 3 - height / 30, -52);
   translate(-100 * sin(radians(m1)) - 80 * sin(radians(m1 + m2)), 0, -100 * cos(radians(m1)) - 80 * cos(radians(m2 + m1)));
   sphere(height / 75);
   rotateX(-PI / 2);
   rotateZ(radians(m1));
   rotateZ(radians(m2));
   drawCylinder(height / 80, height / 80, 50, 16);
   popMatrix();
   pushMatrix();
   translate(width / 4, height / 3 + height / 30, -52);
   translate(-100 * sin(radians(r1)) - 80 * sin(radians(r1 + r2)), 0, -100 * cos(radians(r1)) - 80 * cos(radians(r2 + r1)));
   sphere(height / 75);
   rotateX(-PI / 2);
   rotateZ(radians(r1));
   rotateZ(radians(r2));
   drawCylinder(height / 80, height / 80, 50, 16);
   popMatrix();
   pushMatrix();
   translate(width / 4, height / 3 + height / 12, -52);
   translate(-100 * sin(radians(p1)) - 80 * sin(radians(p1 + p2)), 0, -100 * cos(radians(p1)) - 80 * cos(radians(p2 + p1)));
   sphere(height / 75);
   rotateX(-PI / 2);
   rotateZ(radians(p1));
   rotateZ(radians(p2));
   drawCylinder(height / 80, height / 80, 50, 16);
   popMatrix();
 }
/* 
function drawCylinder(float topRadius, float bottomRadius, float tall, int sides) {
  float angle = 0;
  float angleIncrement = TWO_PI / sides;
  beginShape(QUAD_STRIP);
  for (int i = 0; i < sides + 1; ++i) {
    vertex(topRadius*cos(angle), 0, topRadius*sin(angle));
    vertex(bottomRadius*cos(angle), tall, bottomRadius*sin(angle));
    angle += angleIncrement;
  }
  endShape();
  
  // If it is not a cone, draw the circular top cap
  if (topRadius != 0) {
    angle = 0;
    beginShape(TRIANGLE_FAN);
    
    // Center point
    vertex(0, 0, 0);
    for (int i = 0; i < sides + 1; i++) {
      vertex(topRadius * cos(angle), 0, topRadius * sin(angle));
      angle += angleIncrement;
    }
    endShape();
  }

  // If it is not a cone, draw the circular bottom cap
  if (bottomRadius != 0) {
    angle = 0;
    beginShape(TRIANGLE_FAN);

    // Center point
    vertex(0, tall, 0);
    for (int i = 0; i < sides + 1; i++) {
      vertex(bottomRadius * cos(angle), tall, bottomRadius * sin(angle));
      angle += angleIncrement;
    }
    endShape();
  }
}*/