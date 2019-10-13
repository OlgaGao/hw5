function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);
  for (var i = 0; i <=width; i = i+7) {
    line(i,0,i,i+100);
  }
}
