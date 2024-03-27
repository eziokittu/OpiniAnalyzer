from flask import Flask, request, jsonify
from flask_cors import CORS
from dotenv import load_dotenv
import requests
import os
from textblob import TextBlob

# Load environment variables
load_dotenv()

# Initialize Flask app
app = Flask(__name__)
CORS(app)  # Enable CORS

# Get environment variables
# PORT = os.getenv('PORT')
# HUGGINGFACE_MODEL = os.getenv('APP_HUGGINGFACE_MODEL')
# HUGGINGFACE_API = os.getenv('APP_HUGGINGFACE_API')
# DEV_URL = os.getenv('DEV_URL')
PORT = 5000
HUGGINGFACE_MODEL = "cardiffnlp/twitter-roberta-base-sentiment-latest"
HUGGINGFACE_API = "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"
DEV_URL = "http://localhost:5000"

headers = {
    'Authorization': f'Bearer {HUGGINGFACE_API}',
    'Content-Type': 'application/json',
}

def analyze_with_huggingface(text):
    # Make the POST request to Hugging Face API
    response = requests.post(
        f'https://api-inference.huggingface.co/models/{HUGGINGFACE_MODEL}',
        headers=headers,
        json={'inputs': text}
    )
    # Parse the response
    if response.status_code == 200:
        data = response.json()
        if data and len(data) > 0:
            return {
                'label': data[0][0]['label'],
                'score': data[0][0]['score'],
            }
        else:
            return 'Failed to analyze sentiment'
    else:
        return 'Failed to analyze sentiment'

# Function to perform sentiment analysis
def analyze_sentiment(text):
    analysis = TextBlob(text)
    if analysis.sentiment.polarity > 0:
        return 'positive'
    elif analysis.sentiment.polarity == 0:
        return 'neutral'
    else:
        return 'negative'
    
# @app.route('/api/analyze1', methods=['POST'])
# def analyze_text1():
#     text_data = request.json['text']
#     result = analyze_with_huggingface(text_data)
#     if result != 'Failed to analyze sentiment':
#         return jsonify({'ok': 1, 'result': result, 'url': DEV_URL}), 200
#     else:
#         return jsonify({'ok': -1, 'message': result, 'url': DEV_URL}), 500
    
@app.route('/api/analyze1', methods=['POST'])
def analyze_text1():
    try:
        # Get text from the POST request
        text_data = request.json['text']

        # Analyze text using Hugging Face
        result = analyze_with_huggingface(text_data)

        # Return the result along with DEV_URL
        return jsonify({'ok': 1, 'result': result, 'url': DEV_URL}), 200
    except Exception as e:
        # If an error occurs, return an error response
        return jsonify({'ok': -1, 'message': str(e), 'url': DEV_URL}), 500


# @app.route('/api/analyze2', methods=['POST'])
# def analyze_text2():
#     text_data = request.json['text']
#     result = analyze_with_huggingface(text_data)
#     if result != 'Failed to analyze sentiment':
#         return jsonify({'ok': 1, 'result': result, 'url': DEV_URL}), 200
#     else:
#         return jsonify({'ok': -1, 'message': result, 'url': DEV_URL}), 500


# Define the route for sentiment analysis
@app.route('/api/analyze2', methods=['POST'])
def analyze_text2():
    try:
        # Get text from the POST request
        data = request.get_json()
        text = data['text']

        # Perform sentiment analysis
        result = analyze_sentiment(text)

        # Return the sentiment as JSON
        return jsonify({'ok': 1, 'result': result}), 200
    except Exception as e:
        return jsonify({'ok': -1, 'message': 'error in processing the data!'}), 500
    
@app.route('/api/analyze3', methods=['POST'])
def analyze():
    data = request.json
    # Change 'reviews' to 'texts' as per your new request body
    reviews = data['texts']  
    results = {'positive': 0, 'neutral': 0, 'negative': 0}

    for review in reviews:
        analysis = TextBlob(review)
        if analysis.sentiment.polarity > 0:
            results['positive'] += 1
        elif analysis.sentiment.polarity == 0:
            results['neutral'] += 1
        else:
            results['negative'] += 1
    
    total = len(reviews)
    # Calculate the percentage for each sentiment
    percentages = {k: round(v / total * 100, 2) for k, v in results.items()}  # Added rounding for better readability
    # Return the percentages in the response
    return jsonify({'ok': 1, 'result': percentages})

@app.route("/")
def home():
    # return f"Running Flask with sentiment analysis! URL: {DEV_URL}"
    return f"Running Flask with sentiment analysis! PORT: {PORT}"

# Run the Flask application on the specified port
if __name__ == '__main__':
    app.run(debug=False, host="0.0.0.0", port=PORT)