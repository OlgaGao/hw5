function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  for(var i=20;i<=width-20;i=i+20){
    for(var k=20;k<=height-20;k=k+20){
      fill(random(220));
      circle(i,k,15);
    }
  }
      
}
