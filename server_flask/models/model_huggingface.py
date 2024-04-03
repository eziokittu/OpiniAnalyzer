import requests
from textblob import TextBlob
# from config import HUGGINGFACE_API, HUGGINGFACE_MODEL
# import os

# HUGGINGFACE_MODEL = os.getenv('HUGGINGFACE_MODEL', "cardiffnlp/twitter-roberta-base-sentiment-latest")
# HUGGINGFACE_API = os.getenv('HUGGINGFACE_API')
HUGGINGFACE_MODEL = "cardiffnlp/twitter-roberta-base-sentiment-latest"
HUGGINGFACE_API = "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"

headers = {
    'Authorization': f'Bearer {HUGGINGFACE_API}',
    'Content-Type': 'application/json',
}

def analyze_with_huggingface(text):
    response = requests.post(
        f'https://api-inference.huggingface.co/models/{HUGGINGFACE_MODEL}',
        headers=headers,
        json={'inputs': text}
    )
    if response.status_code == 200:
        data = response.json()
        if data and len(data) > 0:
            return {
                'label': data[0][0]['label'],
                'score': data[0][0]['score'],
            }
    return 'Failed to analyze sentiment'