var myCanvas;
var pMouseX, pMouseY;
var allowedToDraw = false;
var myDrawingX = [];
var myDrawingY = [];

function setup() {
  myCanvas = createCanvas(getElement('myCanvasContainer').width, 540);
  myCanvas.mousePressed(canvasPressed);
  myCanvas.parent('myCanvasContainer');
  stroke(0);
  rect(0,0,width-1,height-1);  
}

function draw()
{
  //background(255,0,255); 
  if (allowedToDraw)
  {
	  line(pMouseX, pMouseY, mouseX, mouseY);

	  if (pmouseX!=mouseX || pMouseY!=mouseY)
	  {
		  myDrawingX[myDrawingX.length] = Math.floor(mouseX);
		  myDrawingY[myDrawingY.length] = Math.floor(mouseY);
	  }
	  pMouseX = mouseX;
	  pMouseY = mouseY;
  }
}

function canvasPressed()
{
  allowedToDraw = !allowedToDraw;
  pMouseX = mouseX;
  pMouseY = mouseY;
  if (allowedToDraw == false) {
	  submitDrawing();
  }
}

function submitDrawing()
{
  var request = "http://10.1.2.136:5000/update?X=" + myDrawingX + "&Y=" + myDrawingY;
  var result = loadStrings(request);
  myDrawingX = [];
  myDrawingY = [];
  background(255);
  rect(0,0,width-1,height-1);  
}
