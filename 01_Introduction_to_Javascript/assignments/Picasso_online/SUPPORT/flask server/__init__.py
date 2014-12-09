#flask related libs
from flask import Flask, request, redirect
from flask.ext.script import Manager

app = Flask(__name__)
manager = Manager(app)

xValues = "100,300,300,100,100";
yValues = "100,100,300,300,100";
sketchID = 1;

@app.route('/')
def index():
	return '<h1>Server is online!</h1>'

@app.route('/update', methods=['GET'])
def update():
	global xValues
	global yValues
	global sketchID
	xValues = request.args['X']
	yValues = request.args['Y']
	sketchID = sketchID + 1
	return '0'

@app.route('/getx', methods=['GET'])
def getx():
	global sketchID
	return str(sketchID) + "," + xValues;

@app.route('/gety', methods=['GET'])	
def gety():
	global sketchID
	return str(sketchID) + "," + yValues;
	
if __name__ == '__main__':
	manager.run()

#to run try one of the following commands (different ports)
#python __init__.py runserver --host 0.0.0.0 --port 5000 --debug
#sudo python __init__.py runserver --host 0.0.0.0 --port 80 --debug
