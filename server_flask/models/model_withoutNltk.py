import string

# Remove punctuation from the text
def remove_punctuation(text):
    return text.translate(str.maketrans('', '', string.punctuation))

# Tokenize the text by splitting on whitespace
def tokenize(text):
    return text.split()

# Simple stemming by removing common suffixes
def stem(word):
    if word.endswith('s'):
        return word[:-1]
    return word

# Preprocess the text by removing punctuation and tokenizing
def preprocess_text(text):
    text = remove_punctuation(text.lower())
    tokens = tokenize(text)
    # Stem each token
    stemmed_tokens = [stem(token) for token in tokens]
    return stemmed_tokens

# Analyze sentiment based on token list
def analyze_sentiment(tokens):
    positive_words = ["good", "happy", "joyful", "great"]
    negative_words = ["bad", "sad", "unhappy", "terrible"]
    sentiment_score = 0

    for token in tokens:
        if token in positive_words:
            sentiment_score += 1
        elif token in negative_words:
            sentiment_score -= 1

    if sentiment_score > 0:
        return "positive"
    elif sentiment_score < 0:
        return "negative"
    else:
        return "neutral"

# Main function
def analyze_withoutNltk(input_text):
    ans = []
    # Input text
    ans.append("Input Text: " + input_text)

    # Preprocess text
    preprocessed_text = preprocess_text(input_text)
    ans.append("Preprocessed Text: " + str(preprocessed_text))

    # Analyze sentiment
    sentiment = analyze_sentiment(preprocessed_text)
    ans.append("Sentiment: " + sentiment)

    return ans