//step 1: declare myCanvas
var pMouseX, pMouseY;
var allowedToDraw = false;
var myDrawingX = [];
var myDrawingY = [];

function setup() {
  // step2: initialize the "myCanvas" variable

  // step3: create an event handler for the myCanvas specifically
  
  // step4: set the parent of the myCanvas element

  stroke(0);
  rect(0,0,width-1,height-1);  
}

function draw()
{
  if (allowedToDraw)
  {
	  line(pMouseX, pMouseY, mouseX, mouseY);

	  if (pmouseX!=mouseX || pMouseY!=mouseY)
	  {
		  myDrawingX[myDrawingX.length] = mouseX;
		  myDrawingY[myDrawingY.length] = mouseY;
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
  //Step 5: server address
  var request = "http://ENTER_IP_OF_SERVER_HERE:5000/update?X=" + myDrawingX + "&Y=" + myDrawingY;
  var result = loadStrings(request);
  myDrawingX = [];
  myDrawingY = [];
  background(255);
  rect(0,0,width-1,height-1);  
}
