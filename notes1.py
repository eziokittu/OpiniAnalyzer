# Import necessary libraries
from transformers import pipeline
import matplotlib.pyplot as plt
import pandas as pd

# Load sentiment analysis pipeline from Hugging Face's "cardiffnlp/twitter-roberta-base-sentiment-latest" model
sentiment_pipeline = pipeline("sentiment-analysis", model="cardiffnlp/twitter-roberta-base-sentiment-latest")

# Define a dataset of 5 review sentences
reviews = [
    "This app is fantastic! Helped me a lot in organizing my tasks.",
    "Not what I expected, it's quite confusing and buggy.",
    "The app is okay, but there are some features that are missing.",
    "I absolutely love this app, it's user friendly and effective.",
    "Terrible experience, the app crashes frequently and lost my data."
]

# Load the dataset
# df = pd.read_csv('dataset_reviews_2.csv')
# Extract the reviews from the 4th column (assuming the first column is index 0)
# reviews = df.iloc[:, 3].tolist()

# Analyze the sentiments of the reviews
results = sentiment_pipeline(reviews)

# Initialize counters for each sentiment
sentiment_counts = {"positive": 0, "neutral": 0, "negative": 0}

# Count the number of each sentiment
for result in results:
    sentiment_counts[result['label'].lower()] += 1

# Print out the sentiment counts
print(sentiment_counts)

# Plot the percentages of positive, negative, neutral using a pie chart
labels = sentiment_counts.keys()
sizes = sentiment_counts.values()
colors = ['lightgreen', 'lightblue', 'lightcoral']
explode = (0.1, 0, 0)  # explode 1st slice (positive)

# Plot
plt.pie(sizes, explode=explode, labels=labels, colors=colors, autopct='%1.1f%%', shadow=True, startangle=140)
plt.axis('equal')  # Equal aspect ratio ensures that pie is drawn as a circle.
plt.title('Sentiment Analysis of Google Play Store Reviews')
plt.show()