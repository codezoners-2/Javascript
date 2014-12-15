var capture;
var w;
var h;

function setup() {
    w = getElement('myContainer').width;
    h = w * 3 / 4;              // 4:3 camera aspect?
    myCanvas = createCanvas(w, h);
    myCanvas.parent('myContainer');
    stroke(0);

    capture = createCapture(VIDEO);
    capture.size(w, h);
    capture.hide();             // Stop the raw capture appearing too.
}

function draw() {
    background(0);
    image(capture, 0, 0, w, h);
}
