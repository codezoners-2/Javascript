# Online painting program

You have to incorporate the sketch.js file that contains javascript inside the html file which uses bootstrap. You'll have to modify two files for that, both the index.html and the sketch.js in order to make sure that they link correctly.

#### In <strong>index.html</strong> follow these steps:
1. Under the menu code add a bootstrap structure that takes the whole width of the page (size 12 that is)
2. At the heart of this structure create a div and give it the id "myCanvasContainer". This is what is used to identify where to place the canvas
3. 

#### In <strong>sketch.js</strong> follow these steps:
1. Create a global variable myCanvas. Remember that in javascript there are no types. All variables are of type "var"
2. Initialize the variable as in the examples shown in class where we dynamically get the size of the container containing the canvas.
3. Use the mousePressed function on the canvas element and pass it the name of the function canvasPressed defined in the bottom of the sketch.
4. Set the parent of the canvas to "myCanvasContainer".
5. Enter the address of the server as given in class. You'll have to edit the "submitDrawing" function.

If you did thigs right, you should see your drawing appear on the projector screen every time you press the key mouse to stop drawing.

**copyright Theodoros Papatheodorou (contact@artech.cc)**
