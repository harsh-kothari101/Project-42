var hr,mn,sc;
var hrAngle,mnAngle,scAngle

function setup() {
  createCanvas(1600,800);
  
  angleMode(DEGREES);
}

function draw() {
  background(0);  

  textFont("Seoge Script");
  textSize(55);
  noStroke();
  fill("Green");
  text("You will be ",200,50);
  fill("Red");
  text("released at 12 ",560,50);
  fill("Blue");
  text("O'Clock Player.",1000,50);


  textSize(25);
  noStroke();
  fill("Green");
  text("Green stands for hour hand.",700,700);
  
  textSize(25);
  noStroke();
  fill("Red");
  text("Red stands for minute hand.",700,740);
  
  textSize(25);
  noStroke();
  fill("Blue");
  text("And the Blue stands for second hand.",700,780);

  textSize(30);
  noStroke();
  fill("white");
  text("12", 880,160);

  noStroke();
  fill("white");
  text("1", 980,190);

  noStroke();
  fill("white");
  text("2", 1050,255);

  noStroke();
  fill("white");
  text("3", 1080,340);

  noStroke();
  fill("white");
  text("4", 1070,430);

  noStroke();
  fill("white");
  text("5", 1000,520);

  noStroke();
  fill("white");
  text("6", 880,560);

  noStroke();
  fill("white");
  text("7", 760,520);

  noStroke();
  fill("white");
  text("8", 690,440);

  noStroke();
  fill("white");
  text("9", 680,340);

  noStroke();
  fill("white");
  text("10", 715,255);

  noStroke();
  fill("white");
  text("11", 770,190);

  translate(890,350);
  rotate(-90);

  hr = hour();
  mn = minute();
  sc = second();

  strokeWeight(8);
  stroke("blue");
  noFill();
  scAngle = map(sc,0,60,0,360);
  strokeWeight(8);
  stroke("red");
  mnAngle = map(mn,0,60,0,360);
  strokeWeight(8);
  stroke("green");
  hrAngle = map(hr % 12,0,12,0,360);

  push();
  rotate(hrAngle)
  stroke("green");
  strokeWeight(8)
  line(0,0,80,0);
  pop();

  push();
  rotate(mnAngle)
  stroke("red");
  strokeWeight(7)
  line(0,0,180,0);
  pop();


  push();
  rotate(scAngle)
  stroke("blue");
  strokeWeight(6)
  line(0,0,150,0);
  pop();

  strokeWeight(2);
  point(0,0);

  strokeWeight(5);
  stroke("blue");
  arc(0,0,500,500,0,scAngle);
  
  strokeWeight(5);
  stroke("red");
  arc(0,0,480,480,0,mnAngle);
  
  strokeWeight(7);
  stroke("green");
  arc(0,0,460,460,0,hrAngle);

  drawSprites();
}