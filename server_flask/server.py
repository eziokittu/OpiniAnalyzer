from flask import Flask, request, jsonify
from flask_cors import CORS
# from config import DEV_URL, PORT
from models import model_anish, model_huggingface, model_nltk
# import os

# PORT = os.getenv('PORT', 5000)  # Default to 5000 if not set
# DEV_URL = os.getenv('DEV_URL', "http://localhost:5000")

app = Flask(__name__)
CORS(app)

PORT = 5000
DEV_URL = "http://localhost:5000"

@app.route('/api/analyze1', methods=['POST'])
def analyze_text1():
    try:
        text_data = request.json['text']
        result = model_huggingface.analyze_with_huggingface(text_data)
        return jsonify({'ok': 1, 'result': result, 'url': DEV_URL}), 200
    except Exception as e:
        return jsonify({'ok': -1, 'message': str(e), 'url': DEV_URL}), 500

@app.route('/api/analyze2', methods=['POST'])
def analyze_text2():
    try:
        data = request.get_json()
        text = data['text']
        result = model_nltk.analyze_sentiment(text)
        return jsonify({'ok': 1, 'result': result}), 200
    except Exception as e:
        return jsonify({'ok': -1, 'message': 'error in processing the data!'}), 500

# dummy route to check if server is active
@app.route('/api/working', methods=['GET'])
def workingStatus():
    try:
        return jsonify({'ok': 1, 'message': 'server is active'}), 200
    except Exception as e:
        return jsonify({'ok': -1, 'message': 'server still not active!'}), 500

# default route
@app.route("/")
def home():
    return f"Running Flask with sentiment analysis! PORT: {PORT}!"

if __name__ == '__main__':
    app.run(debug=False, host="0.0.0.0", port=PORT)
    # app.run(debug=True, port=PORT)