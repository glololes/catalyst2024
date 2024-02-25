function askQuestion() {
    var question = document.getElementById('input').value;
    if (question.trim() === '') return;

    appendMessage('You', question);

    fetch('/ask', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ question: question })
    })
    .then(response => response.json())
    .then(data => {
        appendMessage('Bot', data.answer);
    })
    .catch(error => {
        console.error('Error:', error);
    });
}