from flask import Flask, request, jsonify
import openai

app = Flask(__name__)

# Set your OpenAI API key here
openai.api_key = 'YOUR_OPENAI_API_KEY'

@app.route('/ask', methods=['POST'])
def ask_question():
    data = request.json
    question = data['question']

    # Use OpenAI's completion endpoint to generate a response
    response = openai.Completion.create(
        engine="davinci",
        prompt=question,
        max_tokens=100
    )

    return jsonify({'answer': response.choices[0].text.strip()})

if __name__ == '__main__':
    app.run(debug=True)