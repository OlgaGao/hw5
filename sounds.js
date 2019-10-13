var mySound;

function preload() {
  soundFormats("mp3");
  mySound = loadSound("chill.mp3");
}
function setup() {
  createCanvas(400, 400);
  strokeCap(SQUARE)

}

function draw() {
  background(240); //color filled background
  if (mouseIsPressed) {
    mySound.play();
  }
  noStroke();

  //red square
  fill(random(255), 0, 0);
  rect(80, 0, 320, 320);
  //blue square
  fill(0, 0, random(255));
  rect(0, 320, 80, 80);
  //yellow square
  fill(255, 255, 0);
  rect(370, 360, 30, 40);

  stroke(0, 0, 0)
  strokeWeight(13);

  //left line
  line(80, 0, 80, 400);
  //middle line
  line(0,320,400,320);
  //right line

  line(370,320,370,400);
  //bottom line
  stroke(0,0,0)
  strokeWeight(14)
  line(370,360,400,360)
  //TOPLINE
  strokeWeight(21)
  line(0,150,80,150)
}
