window.addEventListener('load', init);

//global variables
const binaryQuestions = [{
        number: 1,
        question: '01101000 01100101 01101100 01101100 01101111',
        answer: 'hello'
    },
    {
        number: 2,
        question: '01010111 01100101 01101100 01101011 01101111 01101101',
        answer: 'welkom'
    },
    {
        number: 3,
        question: '01010100 01101111 01110100 00100000 01111010 01101001 01100101 01101110 01110011',
        answer: 'tot ziens'
    },
    {
        number: 4,
        question: '01000111 01110010 01101111 01100101 01110100 01101010 01100101 01110011',
        answer: 'groetjes'
    }
];
let questionId = randomizeQuestionId(); //current question id
let winner = false; //is there a winner
let answer = null; //is there an answer

/**
 * Function to initialize the application
 * @param {*} event 
 */
function init(event) {
    const sbmButton = document.getElementById('submit');
    sbmButton.addEventListener('click', clickHandler);
    writeQuestion();
}

/**
 * Function to handle the click event
 * @param {*} event 
 */
function clickHandler(event) {
    event.preventDefault();
    console.log('clicked');
    answer = document.getElementById('inputAnswer').value; //de waarde uit het invoerveld.
    checkAnswer();
}


/**
 * Function to check the answer
 */
function checkAnswer() {
    binaryQuestions.forEach(function (element, index, array) {
        if (element.number == questionId) {
            if (element.answer == answer) {
                winner = true;
            }
        }
        writeMessage();
    });
}

/**
 * Function to choose a random question
 * @returns random question
 */
function randomizeQuestionId() {
    return binaryQuestions[Math.floor(binaryQuestions.length * Math.random())].number;
}

/**
 * Function to write a message to the DOM.
 */
function writeMessage() {
    const p = document.getElementById('answerText');
    if (winner) {
        p.innerHTML = `Your answer <span class="bg-green">${answer}</span> is fully correct`
    } else {
        p.innerHTML = `Unfortunately <span class="bg-red">${answer}</span> is not correct, try again`
    }
}
/**
 * Function to write te question to the DOM
 */
function writeQuestion(){
    const questionText = document.getElementById('questionText');
    console.log(questionId);
    binaryQuestions.forEach(function (element, index, array) {
        if (element.number == questionId) {
            questionText.innerHTML = element.question;
        }
    });
}