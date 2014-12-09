var colorNameElement;
var myCanvas;

function setup() {
  myCanvas = createCanvas(800, 300);
  myCanvas.parent("myCanvasContainer");
  myCanvas.mousePressed(canvasPressed);

  colorNameElement = createSpan("nothing");
  colorNameElement.parent("colorName");
  
  noStroke();
}

function draw()
{
  fill(255,0,0);
  rect(0,0,width/2, height);
  fill(0,255,0);
  rect(width/2, 0, width, height);
}

function canvasPressed()
{
  if (mouseX<width/2) {
	colorNameElement.html("red");
  }
  else {
	colorNameElement.html("green");  
  }
}
