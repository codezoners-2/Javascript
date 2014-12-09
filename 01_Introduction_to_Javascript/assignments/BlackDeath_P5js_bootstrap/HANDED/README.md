# Black Death simulator

You have to incorporate the sketch.js file that contains javascript inside the html file which uses bootstrap. You'll have to modify two files for that, both the index.html and the sketch.js in order to make sure that they link correctly.

#### In <strong>index.html</strong> follow these steps.
I have already included the code that creates the first element that is controlled by p5.js and the code that links to the canvas of the program. You'll have to:


#### In <strong>sketch.js</strong> follow these steps:
I have already created as global variables all the DOM elements you'll need. You'll need to use those to link to the HTML page:
1. Initialize the diseaseNameInput using the createInput() command. Pass to it the diseaseName variable that contains the word disease. Set the parent of the input field to 'diseaseName' (single quote) so that it knows where on the page to place it.
2. Initialize the diseaseNameSpan using the createSpan() function, passing to it the diseaseName variable  as a starting value. Set the parent of diseaseNameSpan to 'diseaseNameSpan'
3. Do the corresponding things to create all the rest of the elements. You'll have to use the createButton() function for the button. Make sure you tie it up with a mousePressed() event which links to the initializePopulation() function, use the createElement() function to create all the headers that the HTML uses, as well as the createSlider() with values (0,10,5) for the recoveryRate and (0,30,1) for the deathlikelyhood rate.
4. Notice how in the "DOM STUFF" section of the initializePopulation() function I use the values of the various html elements created within p5.js to set my global variable values. This function is called when the user presses the button and at the beginning of the program.
5. Inside the "DOM STUFF" section of the draw() function you are going to be constantly reading the value of the recoveryRateSlider using the value() function and setting the content of the recoveryRateHeader element to that using the html() function. Do the same for the deathLikelyhoodHeader, peopleDeadHeader, peopleHealthyHeader, peopleSickHeader



**copyright Theodoros Papatheodorou (contact@artech.cc)**

