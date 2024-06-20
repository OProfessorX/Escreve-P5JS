function setup() {
  createCanvas(400, 400);
  background("black")
}

function draw() {
  stroke("red");
  fill("red");
  
  
  if (mouseIsPressed) {
    rect(mouseX, mouseY, 20, 20);
  }
}

