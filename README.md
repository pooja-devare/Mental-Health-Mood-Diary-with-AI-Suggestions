# Mental Health Mood Diary with AI Suggestions

This is a simple full-stack project where users can log their mood and notes daily, and get AI-powered mental health suggestions.

## Features
- Log daily mood and notes
- AI suggestion based on mood (via OpenAI API)
- View mood history

## Technologies
- Backend: Python Flask
- Frontend: HTML, CSS, JavaScript
- AI: OpenAI API (text-davinci-003)

## Setup Instructions

### Backend
1. Set OpenAI API key environment variable:
```
export OPENAI_API_KEY="your_openai_api_key"
```
2. Install dependencies:
```
pip install -r backend/requirements.txt
```
3. Run the backend server:
```
python backend/app.py
```

### Frontend
- Open `frontend/index.html` in a browser.
- The frontend interacts with backend running at `http://127.0.0.1:5000`

## Notes
- You need an OpenAI API key for AI suggestions.
- For testing without API key, suggestions fallback to a default message.