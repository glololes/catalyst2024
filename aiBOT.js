function askQuestion() {
    var question = document.getElementById('input').value;
    if (question.trim() === '') return;

    // Display user question in the chatbox
    appendMessage('You', question);

    // Send question to backend server
    fetch('/ask', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ question: question })
    })
    .then(response => response.json())
    .then(data => {
        // Display answer from backend in the chatbox
        appendMessage('Bot', data.answer);
    })
    .catch(error => {
        console.error('Error:', error);
    });
}