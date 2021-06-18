var hr, mn, sc;
var HRangle, MNangle, SCangle;

function setup() {
  createCanvas(500,400);
  
//used to add angles in degrees
  angleMode(DEGREES);
}

function draw() {
  background(255,255,255);
  //translation and rotation
  translate(200,200);
  rotate(-90);

  hr=hour();
  mn=minute();
  sc=second();
  //to create repeating rotation
  SCangle=map(sc,0, 60, 0, 360);
  MNangle=map(mn,0, 60, 0, 360);
  HRangle=map(hr,0, 60, 0, 360);
  //drawing second hand
  push();
  rotate(SCangle);
  stroke(255, 0, 0);
  strokeWeight(7);
  line(0, 0, 100, 0);
  pop();
  //drawing minute hand
  push();
  rotate(MNangle);
  stroke(0, 255, 0);
  strokeWeight(7);
  line(0, 0, 75, 0);
  pop();
    //drawing hour hand
    push();
    rotate(HRangle);
    stroke(0,0,255);
    strokeWeight(7);
    line(0,0,50,0);
    pop();

    stroke(255,0,255);
    point(0,0)
    //drawing the arc
    strokeWeight(10);
    noFill();
    //drawing the second arc
    stroke(255,0,0);
    arc(0,0,300,300,0,SCangle)
    //drawing the minute arc
    stroke(0,255,0);
    arc(0,0,280,280,0,MNangle)
    //drawing the hour arc
    stroke(0,0,255);
    arc(0,0,260,260,0,HRangle)
}