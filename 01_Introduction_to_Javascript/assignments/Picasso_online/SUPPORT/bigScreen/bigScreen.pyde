# ***** ATTENTION: *****
# for this software to work you need to run the flask server that is found
# in the relevant directory FIRST. Otherwise it gets "None" and it can't handle it
# I didn't make it smarter because I wanted them not to be too confused.
# I wanted to keep the code to the minimum
import math

currentSketchNum = 0
previousSketchNum = 0;
scaling = 2
xCoords = []
yCoords = []

def setup():
    size(960*scaling, 540*scaling)
    stroke(255);
    strokeWeight(10)
    background(0)

def draw():
    if (frameCount%60==0): #only ask for new data every 60 frames
        xIncoming = loadStrings("http://localhost:5000/getx")
        xIncoming = ''.join(xIncoming)
        xIncoming = xIncoming.split(",")
    
        yIncoming = loadStrings("http://localhost:5000/gety")
        yIncoming = ''.join(yIncoming)
        yIncoming = yIncoming.split(",")
    
        #convert from unicode to int
        for i in range(len(xIncoming)):
            xIncoming[i] = int(xIncoming[i])
            yIncoming[i] = int(yIncoming[i])
        
        #only update the sketch if a new one is ready (uses first value as sketch ID
        currentSketchNum = xIncoming[0]
        if (currentSketchNum!=previousSketchNum):
            background(0)
            previousSketchNum=currentSketchNum
            colorScales = []
            while True:
                colorScales = [round(random(1)), round(random(1)),round(random(1))]
                if (colorScales[0] + colorScales[1] + colorScales[2] > 0): break
            stroke(255*colorScales[0], 255*colorScales[1], 255*colorScales[2])
            xCoords = xIncoming[1:]
            yCoords = yIncoming[1:]

    #finally paint
    global xCoords
    for i in range(len(xCoords)-1):
        line(xCoords[i]*scaling,yCoords[i]*scaling,xCoords[i+1]*scaling,yCoords[i+1]*scaling)
