from flask import Flask, request, jsonify
from flask_cors import CORS
import openai
import os

app = Flask(__name__)
CORS(app)

openai.api_key = os.getenv("OPENAI_API_KEY")  # Set your OpenAI API key in environment variable

mood_logs = []

@app.route('/log_mood', methods=['POST'])
def log_mood():
    data = request.json
    mood = data.get('mood')
    notes = data.get('notes')

    # Simple AI suggestion based on mood using OpenAI
    suggestion = "Keep positive and stay strong!"
    try:
        if openai.api_key:
            response = openai.Completion.create(
                engine="text-davinci-003",
                prompt=f"Suggest a helpful mental health tip for someone feeling {mood}.",
                max_tokens=50
            )
            suggestion = response.choices[0].text.strip()
    except Exception as e:
        print("OpenAI API error:", e)

    entry = {
        "mood": mood,
        "notes": notes,
        "suggestion": suggestion
    }
    mood_logs.append(entry)

    return jsonify({"message": "Mood logged", "suggestion": suggestion, "all_logs": mood_logs})

@app.route('/get_logs', methods=['GET'])
def get_logs():
    return jsonify(mood_logs)

if __name__ == '__main__':
    app.run(debug=True)