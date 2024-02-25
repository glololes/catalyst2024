from flask import Flask, request, jsonify
import openai

app = Flask(__name__)

openai.api_key = 'apiKey'

@app.route('/ask', methods=['POST'])
def ask_question():
    data = request.json
    question = data['question']
    response = openai.Completion.create(api_key="apiKey", model="text-davinci-003", prompt="question" + userSummary + ": ", temperature=0, max_tokens=256, top_p=1, frequency_penalty=0, presence_penalty=0)
    userQuestions = response.choices[0].text
    return(jsonify(userQuestions))

if __name__ == '__main__':
    app.run(debug=True)