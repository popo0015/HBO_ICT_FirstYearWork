/**
 * This is the dataset of binary questions that you are required to use in this 
 * exam. It is currently assigned the easy to program (`questionsEasy`) option.
 * However you may choose whether to use the hard-to-program variant 
 * (`questionsHard`) for extra points, but remember that the hard part is to 
 * prepare the correct question for each given answer using the `asciiTable` 
 * object.
 * 
 * For more details, see the `variables.js` file
 */
const questions = questionsEasy;

const welcomeMessage = document.getElementById("welcome");
const errorMessage = document.getElementById("error");
const successMessage = document.getElementById("success");
const questionElement = document.getElementById("question");
const checkButton = document.getElementById("check");
const win = document.getElementById("winModal");

const numberOfAttemptsElement = document.getElementById("attempts");
let numberOfAttempts = 0;
numberOfAttemptsElement.innerHTML = numberOfAttempts;

const questionsToAnswerElement = document.getElementById("questions-left");

/**
 * Window load event handler. Initializes the app when the page is fully loaded.
 * 
 * NOTE: Add all initialization code in this function
 */
window.addEventListener('load', function () {
  welcomeMessage.classList.remove("hidden");
  errorMessage.classList.add("hidden");
  successMessage.classList.add("hidden");

  pickARandomQuestion();
  questionsToAnswerElement.innerHTML = questionsLeft;
});

const questionNumbersArray = [];
for (let i = 0; i < questions.length; i++) {
  questionNumbersArray.push(i);
}
let questionsLeft = questionNumbersArray.length;

let randomQuestionNumber = questionNumbersArray[Math.floor(Math.random() * questionNumbersArray.length)];
/**
 * Picks a random number that then calls the corresponding question
 */
function pickARandomQuestion() {
  const questionPicked = questions[randomQuestionNumber].question;
  questionElement.innerHTML = questionPicked;
  for (let i = 0; i < questionNumbersArray.length; i++) {
    if (randomQuestionNumber == questionNumbersArray[i]) {
      questionNumbersArray.filter(removeQuestionNumber);
    }
  }
}

/**
 * removes the chosen question number from an array with all the numbers
 * so that it cannot be chosen again
 */
function removeQuestionNumber(value, index, arr) {
  if (value == randomQuestionNumber) {
    arr.splice(index, 1);
    return true;
  }
  return false;
}

checkButton.addEventListener('click', answerCheck);

/**
 * Feature 2 - Answer check
 */
function answerCheck() {
  welcomeMessage.classList.add("hidden");
  const inputAnswer = document.getElementById("inputAnswer").value;
  numberOfAttempts += 1;
  numberOfAttemptsElement.innerHTML = numberOfAttempts;
  questionsLeft = questionNumbersArray.length;
  if (inputAnswer == questions[randomQuestionNumber]["answer"]) {
    successMessage.classList.remove("hidden");
    errorMessage.classList.add("hidden");
    const correctAnswerElement = document.getElementById("correct-answer");
    correctAnswerElement.innerHTML = inputAnswer;
    randomQuestionNumber = questionNumbersArray[Math.floor(Math.random() * questionNumbersArray.length)];
    questionsToAnswerElement.innerHTML = questionsLeft;
    if (questionsLeft == 0) {
      gameEnding();
    }
    else {
      pickARandomQuestion();
    }
  }
  else {
    successMessage.classList.add("hidden");
    errorMessage.classList.remove("hidden");
    const wrongAnswerElement = document.getElementById("wrong-answer");
    wrongAnswerElement.innerHTML = inputAnswer;
  }
  removeInput();
}

/**
 * remove the input of the user
 */
function removeInput() {
  document.getElementById("inputAnswer").value = "";
}

/**
 * executed when all questions are answered correctly
 */
function gameEnding() {
  win.classList.remove("hidden");

  const winnerDiv = document.createElement("div");
  winnerDiv.className = "modal-content";
  win.appendChild(winnerDiv);

  const winnerText = document.createElement("h3");
  winnerText.innerHTML = "!!! W I N N E R !!!";
  winnerDiv.appendChild(winnerText);

  const winnerParagraph = document.createElement("p");
  winnerParagraph.innerHTML = "You have reached the end of the quiz!";
  winnerDiv.appendChild(winnerParagraph);
}