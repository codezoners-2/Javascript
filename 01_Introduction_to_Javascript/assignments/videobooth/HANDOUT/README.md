`-*- mode: markdown; mode: visual-line; mode: adaptive-wrap-prefix -*-`

# videobooth

Here's a fun little exercise for Christmas. It draws on what you've done already in p5.js, and brings in a bit of interactive multimedia. In order to work with this code you'll need a laptop with a built-in camera (or an external USB camera).

If you open `index.html` in your browser, you should see a video window showing, live, what your camera is seeing. (You may need to click an option giving the page permission to use the camera.) If you were a cat, you might something like this:

... plain ...

- but hopefully your image will be moving.

All of the code for this page has been provided.

Exercises:

- Can you work out how to display the image in inverse video, like this?

  ... invert ...

  This uses image filters: there's more information (and most of the solution) [http://p5js.org/learn/examples/Dom_Video_Capture.php](here).

- Can you implement this Andy Warhol "pop art" effect?

  ... warhol ...
  
  You'll need to think about how to create the small images and position them in the p5 canvas. Hint: there's some `for`-loop action going on here.
  
- Here's another effect:

  ... escher ...
  
  Can you work out how this is done? It's not very different from the "Warhol" effect in terms of how the code works.
  
- Add some controls.

  ... controls ...
  
  I've added three buttons to the page: one to toggle the inverse video, and one to toggle each of the filter effects (which I've called "Warhol" and "Escher"). The buttons are green when the effect is active and white when not, and the button text switches between "Off" and "On". Can you implement these? The styling is done using Bootstrap (see the "Black Death" example to see some button styling).
  
  A slight complication: "Warhol" and "Escher" cannot be active at the same time. Whenever one is turned on, the other should turn off.
  
  For more fun, think about adding some sliders. Some image filters (such as `threshold`) have parameters - there are some examples [here](http://coursescript.com/notes/interactivecomputing/images/). How about a slider to set the threshold level for a monochrome image?
  
  You could also think about sliders for the image layout: "Escher" in particular could be parameterised to change the number of image "echoes", or their spacing.
   
**copyright Nick Rothwell (nick@cassiel.com)**
