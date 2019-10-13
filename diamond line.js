function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);
 for (var i = 0; i <=height/2; i = i+10) {
    line(200-i,i,200+i,i);
  }
  
  for(var y=400;y>=height/2;y=y-10){
    line(y-200,y,600-y,y);
  }
}
