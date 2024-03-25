from app import app
from mangum import Mangum
from dotenv import load_dotenv
import os

# Load environment variables
load_dotenv()

# Get environment variables
PORT = os.getenv('PORT')

# Run the Flask application on the specified port
if __name__ == '__main__':
    app.run(debug=True, port=PORT)
    
    # Wrap the Flask app with Mangum
    handler = Mangum(app)