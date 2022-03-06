# Using flask to make an api
# import necessary libraries and functions
from flask import Flask, jsonify, request

# creating a Flask app
app = Flask(__name__)

# on the terminal type: curl http://127.0.0.1:5000/
# returns hello world when we use GET.
# returns the data that we send when we use POST.
@app.route('/', methods = ['GET', 'POST'])
def home():
	if(request.method == 'GET'):
		data = "hello world"
		return jsonify({'data': data})

@app.route('/home/<int:num>', methods = ['GET'])
def disp(num):
	return jsonify({'data': num**2})

@app.route('/average/', methods=['GET'])
def average():
	paramaters = request.args.to_dict()
	average = (int(paramaters["a"]) + int(paramaters["b"]))/2
	return jsonify({"parameters" : paramaters},{"Average" : average})


# driver function
if __name__ == '__main__':
	app.run(debug = True)
