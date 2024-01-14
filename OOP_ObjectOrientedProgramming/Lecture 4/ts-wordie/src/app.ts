import Wordie from './Wordie.js';

const guessInput: HTMLInputElement = document.getElementById('inputGuess') as HTMLInputElement;

const guessButton: HTMLButtonElement = document.getElementById('makeguess') as HTMLButtonElement;

const resetButton: HTMLButtonElement = document.getElementById('restart') as HTMLButtonElement;

const guessDiv: HTMLDivElement = document.getElementById('guesses') as HTMLDivElement;

const guessesLeftSpan: HTMLSpanElement = document.getElementById('guessesLeftNumber') as HTMLSpanElement;

const correctAnswerDiv: HTMLSpanElement = document.getElementById('answer') as HTMLSpanElement;

let wordie: Wordie;

let check: number = 0;

// Updates the display of the game
// Gets the guesses from the Wordie instance
// Also updates the number of guesses left and the correct word once there are no more guesses left
function updateDisplay(): void {
  if (check) {
    guessDiv.appendChild(wordie.getGuesses());
  } else {
    check += 1;
  }
  guessesLeftSpan.innerHTML = wordie.getGuessesLeft().toString();
  if (wordie.getGuessesLeft() === 0) {
    correctAnswerDiv.innerHTML = `Correct word: <strong>${wordie.getAnswer()}</strong>`;
    check = 0;
  }
}

// Provides a new guess to the Wordie instance.
function makeGuess(): void {
  wordie.makeGuess(guessInput.value);
  guessInput.value = '';
  updateDisplay();
}

// Creates a new instance of the Wordie class and updates the display
function startNewGame(): void {
  wordie = new Wordie();
  check = 0;
  while (guessDiv.firstChild != null) {
    guessDiv.removeChild(guessDiv.firstChild);
  }
  updateDisplay();
}

// Click handler for the 'Reset' button to reset the game
// Makes a new Wordie game
resetButton.addEventListener('click', () => {
  startNewGame();
});

// Click handler to make a guess
guessButton.addEventListener('click', () => {
  makeGuess();
});

// Allow the user to use the Enter key to make a guess
window.addEventListener('keypress', (ev: KeyboardEvent) => {
  if (ev.key === 'Enter') {
    makeGuess();
  }
});

// Once the page is loaded, start a new Wordie game
window.addEventListener('load', () => {
  startNewGame();
});
