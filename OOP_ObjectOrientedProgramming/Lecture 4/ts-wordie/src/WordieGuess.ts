import GuessLetter from './GuessLetter.js';

export default class WordieGuess {
  private letters: GuessLetter[];

  public constructor(answer: string, guess: string) {
    this.letters = [];
    for (let i: number = 0; i < guess.length; i++) {
      this.letters.push(new GuessLetter(guess[i]));
    }

    this.checkLetters(answer);
  }

  /**
   *
   * @param answer the correct word
   */
  public checkLetters(answer: string): void {
    for (let i: number = 0; i < answer.length; i++) {
      if (answer.includes(this.letters[i].getLetter())) {
        this.letters[i].setCorrectLetter();
      }
    }

    for (let i: number = 0; i < answer.length; i++) {
      if (answer[i] === this.letters[i].getLetter()) {
        this.letters[i].setCorrectPlace();
      }
    }

    this.writeGuess();
  }

  /**
   *
   * @returns the div element for the words
   */
  public writeGuess(): HTMLDivElement {
    const wordsDiv = document.createElement('div');

    for (let i: number = 0; i < this.letters.length; i++) {
      wordsDiv.appendChild(this.letters[i].writeLetter());
    }

    wordsDiv.className = 'guess';
    return wordsDiv;
  }
}
