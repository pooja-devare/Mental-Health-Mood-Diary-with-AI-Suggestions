const moodForm = document.getElementById('moodForm');
const suggestionEl = document.getElementById('suggestion');
const logsEl = document.getElementById('logs');

const API_BASE = 'http://127.0.0.1:5000';

moodForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const mood = document.getElementById('mood').value;
  const notes = document.getElementById('notes').value;

  if (!mood) {
    alert('Please select your mood');
    return;
  }

  const res = await fetch(`${API_BASE}/log_mood`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ mood, notes }),
  });
  const data = await res.json();

  suggestionEl.textContent = data.suggestion || 'No suggestion available';

  updateLogs(data.all_logs);
  moodForm.reset();
});

async function loadLogs() {
  const res = await fetch(`${API_BASE}/get_logs`);
  const data = await res.json();
  updateLogs(data);
}

function updateLogs(logs) {
  logsEl.innerHTML = '';
  logs.forEach((log, idx) => {
    const li = document.createElement('li');
    li.textContent = `[${idx + 1}] Mood: ${log.mood}, Notes: ${log.notes}, Suggestion: ${log.suggestion}`;
    logsEl.appendChild(li);
  });
}

window.onload = () => {
  loadLogs();
};