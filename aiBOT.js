const express = require('express');
const bodyParser = require('body-parser');
const { ChatGPT } = require('openai');

const app = express();
const port = 3000;

const chatGPT = new ChatGPT({
    apiKey: 'your-api-key-here' // Replace 'your-api-key-here'
});

app.use(bodyParser.json());

app.post('/ask', async (req, res) => {
    const { question } = req.body;
    
    try {
    
        const response = await chatGPT.complete({
            model: 'text-davinci-003', 
            prompt: question,
            maxTokens: 150
        });

        res.json({ answer: response.choices[0].text.trim() });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'An error occurred while processing your request.' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});