var myCanvas;

function setup() {
  myCanvas = createCanvas(getElement('myContainer').width, 300);
  myCanvas.parent('myContainer');
  //myCanvas.position(0,0);
}

function draw() {
  background(150,0,0);
  ellipse(mouseX,mouseY,20,20);
}
