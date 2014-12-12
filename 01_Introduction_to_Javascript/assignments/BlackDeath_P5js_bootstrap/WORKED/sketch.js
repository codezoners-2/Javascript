var numOfBalls = 100;
var recoveryRate = 3;
var deathLikelyhood = 1;
var posX = [];
var posY = [];
var directionX = [];
var directionY = [];
var radius = [];
var diamArray = [];
var ballState = [];
var ballAlive = [];

var ballsDeadCounter=0;
var ballsSickCounter=0;
var ballsHealthyCounter=numOfBalls;
var ballsAliveCounter=numOfBalls;

// DOM elements ////////////////
var recoveryRateSlider;
var recoveryRateHeader;
var deathLikelyhoodSlider;
var deathLikelyhoodHeader;
var populationSizeInput;
var populationSizeHeader;
var diseaseNameInput;
var diseaseName = "disease";
var diseaseNameSpan;
var submitButton;
////////////////////////////////

function setup() {
  myCanvas = createCanvas(getElement('myContainer').width, 400);
  myCanvas.parent('myContainer');

  
  // DOM stuff ////////////////////////////////////
  diseaseNameInput = createInput(diseaseName);
  diseaseNameInput.parent('diseaseName');
  
  diseaseNameSpan = createSpan(diseaseName);
  diseaseNameSpan.parent('diseaseNameSpan');

  populationSizeInput = createInput(numOfBalls);
  populationSizeInput.parent('populationSize');

  button = createButton('reset');
  button.parent('submitParams');
  button.mousePressed(initializePopulation);
  button.class("btn btn-default");

  recoveryRateHeader = createElement("h4", "Recovery rate (shades per frame): " + recoveryRate);
  recoveryRateHeader.parent('recoveryRate');
  recoveryRateSlider = createSlider(0,10,5);
  recoveryRateSlider.parent('recoveryRate');
  
  deathLikelyhoodHeader = createElement("h4", "Death likelyhood (per frame): " + deathLikelyhood/10 + "%");
  deathLikelyhoodHeader.parent('deathLikelyhood');
  deathLikelyhoodSlider = createSlider(0,30,1);
  deathLikelyhoodSlider.parent('deathLikelyhood');


  peopleAliveHeader = createElement("h4", "People alive: " + numOfBalls);
  peopleAliveHeader.parent('peopleAlive');

  peopleDeadHeader = createElement("h4", "People dead: " + ballsDeadCounter);
  peopleDeadHeader.parent('peopleDead');
  
  peopleHealthyHeader = createElement("h4", "People healthy: " + numOfBalls);
  peopleHealthyHeader.parent('peopleHealthy');
  
  peopleSickHeader = createElement("h4", "People sick: " + ballsSickCounter);
  peopleSickHeader.parent('peopleSick');
  //////////////////////////////////////////////////

  stroke(0);
  initializePopulation();
}

function initializePopulation()
{
  for (var i=0; i<numOfBalls; i++)
  {
    directionX[i] = random(-5, 5);
    directionY[i] = random(-5, 5);
    diamArray[i] = random(10, 60);
    posX[i] = random(0+diamArray[i]/2, width-diamArray[i]/2);
    posY[i] = random(0+diamArray[i]/2, height-diamArray[i]/2);
    ballState[i] = 255;
    ballAlive[i] = true;
  }
  
  //DOM STUFF //////////////////////////
  diseaseName = diseaseNameInput.value();
  numOfBalls = populationSizeInput.value();
  diseaseNameSpan.html(diseaseName);
  //////////////////////////////////////
}

function draw()
{
  background(255,0,255);
  
  drawBalls();
  moveBalls();
  bounceBall();
  ballBallInteraction();
  ballUserInteraction(mouseX, mouseY);
  recoverBalls();
  calculateStatistics();

  // DOM STUFF /////////////////////
  recoveryRate = recoveryRateSlider.value();
  recoveryRateHeader.html("Recovery rate (shades per frame): " + recoveryRate);

  deathLikelyhood = deathLikelyhoodSlider.value();
  deathLikelyhoodHeader.html("Death likelyhood (per frame): " + deathLikelyhood/10 + "%");

  peopleAliveHeader.html("People alive: " + ballsAliveCounter);
  peopleDeadHeader.html("People dead: " + ballsDeadCounter);
  peopleHealthyHeader.html("People healthy: " + ballsHealthyCounter);
  peopleSickHeader.html("People sick: " + ballsSickCounter);  
  //////////////////////////////////  
}

function drawBalls()
{
  for (var i=0; i<numOfBalls; i++)
  {
    if (ballAlive[i])
    {
      fill(ballState[i]); 
      ellipse(posX[i], posY[i], diamArray[i], diamArray[i]);
    }
  }
}

function moveBalls()
{
  for (var i=0; i<numOfBalls; i++)
  {
    if (ballAlive[i])
    {
		posX[i] = posX[i] + directionX[i];
		posY[i] = posY[i] + directionY[i];
	}
  }
}

function bounceBall()
{
  for (var i=0; i<numOfBalls; i++)
  {
    if (ballAlive[i])
    {
      if (( posX[i] > width-diamArray[i]/2) || (posX[i] < 0+diamArray[i]/2))
      {
        directionX[i] = directionX[i] * -1;
      }
      if ((posY[i] > height-diamArray[i]/2) || (posY[i] < 0+diamArray[i]/2))
      {
        directionY[i] = directionY[i] * -1;
      }
    }
  }
}

function ballUserInteraction(x, y)
{
  for (var i=0; i<numOfBalls; i++)
  {
    if (ballAlive[i])
    {
		if (dist(x, y, posX[i], posY[i]) < diamArray[i]/2.0 && mouseIsPressed)
		{
		  ballState[i] = 0;
		}
    }
  }
}

function ballBallInteraction()
{
  for (var i=0; i<numOfBalls; i++)
  {
    for (var j=0; j<numOfBalls; j++)
    {
      if (dist(posX[i], posY[i], posX[j], posY[j])<(diamArray[i]/2+diamArray[j]/2))
      {
        if ((ballState[i] < 255 || ballState[j] < 255) && i!=j && ballAlive[i] && ballAlive[j])
        {
          ballState[i] = 0;
          ballState[j] = 0;
        }
      }
    }
  }
}

function recoverBalls()
{
  for (var i=0; i<numOfBalls; i++)
  {
    if (ballAlive[i])
    {
		ballState[i] = ballState[i] + recoveryRate;
		ballState[i] = constrain(ballState[i], 0, 255);
		if (ballState[i]<255 && random(1000)<deathLikelyhood) ballAlive[i]=false;
    }
  }
}

/////////////////////////////////////////////////////////////
// Javascript only: resizes the canvas
// when browser window is resized
function windowResized() {
  resizeCanvas(getElement('myContainer').width, 400);
}

// added this in order to calculate number
// of dead and alive people for the sake of the exercise
function calculateStatistics() {
  
  ballsSickCounter = 0;
  ballsDeadCounter = 0;
  
  for (var i=0; i<numOfBalls; i++)
  {
    if (ballAlive[i]==false)
    {
		ballsDeadCounter++;
    }
    else if (ballState[i]<255)
    {
		ballsSickCounter++;
	}
  }
  ballsHealthyCounter = ballsAliveCounter - ballsSickCounter;
  ballsAliveCounter = numOfBalls - ballsDeadCounter;
}
