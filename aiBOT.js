const express = require('express');
const bodyParser = require('body-parser');
const { ChatGPT } = require('openai');

const app = express();
const port = 3000;

// Initialize ChatGPT with your API key
const chatGPT = new ChatGPT({
    apiKey: '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'
});

// Middleware to parse JSON body
app.use(bodyParser.json());

// Endpoint to handle user questions
app.post('/ask', async (req, res) => {
    const { question } = req.body;
    
    try {
        // Call the ChatGPT API to generate a response
        const response = await chatGPT.complete({
            model: 'text-davinci-002',
            prompt: question,
            maxTokens: 150
        });

        res.json({ answer: response.choices[0].text.trim() });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'An error occurred while processing your request.' });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});