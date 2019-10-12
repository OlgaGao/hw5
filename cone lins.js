function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);
  for (var i = 0; i <=width; i = i + 10) {
    line(width/2, 10, i, 400);
  }
}
