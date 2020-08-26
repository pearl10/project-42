var hr=hour();
var mn=minute();
var sc=second();



function setup() {
  createCanvas(400,400);
  
}
function draw() {
  background(255,255,255);
 
  angleMode(DEGREES)
  scAngle=map(sc,0,60,0,360);
  {stroke(255,0,0)
  strokeWeight(7)
  line(30, 300, 200, 200);}
line(40, 30, 200, 200);
line(80, 300, 200, 200);

  drawSprites();
}