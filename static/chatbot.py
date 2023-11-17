from flask import Flask, render_template, request, jsonify, send_from_directory
from flask_cors import CORS
import openai
import os

app = Flask(__name__)
CORS(app)
app.config['SEND_FILE_MAX_AGE_DEFAULT'] = 0 

# OpenAI API key
api_key = ''
openai.api_key = api_key

# Serve static files from the 'static' directory
@app.route('/static/<path:filename>')
def serve_static(filename):
    root_dir = os.path.dirname(os.getcwd())
    return send_from_directory(os.path.join(root_dir, 'static'), filename)

# Render the home page
@app.route('/')
def home():
    return render_template('index.html')

# Handle the POST request for sending messages
@app.route('/send-message', methods=['POST'])
def send_message():
    data = request.get_json()
    user_message = data['message']

    # Call OpenAI GPT-3 to generate a response
    response = openai.Completion.create(
        engine="text-davinci-002",
        prompt=user_message,
        max_tokens=50
    )

    bot_response = response.choices[0].text.strip()

    return jsonify({'message': bot_response})

if __name__ == '__main__':
    app.run(debug=True)
