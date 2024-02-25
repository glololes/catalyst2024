let frontface = [
    "This is a test!",
    "This is the second card!",
    "Next, you should try importing a Quizlet set!",
    "Then, copy paste the text when you click export",
];

let backface = [
    "Answer!",
    "Great job!",
    "Just click the button below!",
    "What a great studying website for real!!"
];

let currentCardIndex = 0;

function flipCard(card) {
    card.classList.toggle('flipped');
}

function showCard(index) {
    const frontCard = document.querySelector('.card.front');
    const backCard = document.querySelector('.card.back');
    frontCard.textContent = frontface[index];
    backCard.textContent = backface[index];
    const flashcardCount = document.getElementById('flashcardCount');
    flashcardCount.textContent = `${index+1}/${frontface.length}`;
}

function nextCard() {
    currentCardIndex++;
    if (currentCardIndex >= frontface.length) {
        currentCardIndex = 0;
    }
    showCard(currentCardIndex);
    document.querySelector('.card-container').classList.remove('flipped');
}

function prevCard() {
    currentCardIndex--;
    if (currentCardIndex < 0) {
        currentCardIndex = frontface.length - 1;
    }
    showCard(currentCardIndex);
    document.querySelector('.card-container').classList.remove('flipped');
}

function openModal() {
    document.getElementById('popup').style.display = 'block';
}

function closeModal() {
    document.getElementById('popup').style.display = 'none';
}

function submitText() {
    var text = document.getElementById('textInput').value;
    const quizletinput = text.trim().split("\n");
    for (let i = 0; i < quizletinput.length; i++) {
        console.log(quizletinput[i]);
        const quizlet2 = (quizletinput[i]+"").split("\t");
        frontface[i] = quizlet2[0];
        backface[i] = quizlet2[1];
    }
    currentCardIndex = 0;
    showCard(0);
    createQuestions();
    closeModal();
}

showCard(currentCardIndex);
