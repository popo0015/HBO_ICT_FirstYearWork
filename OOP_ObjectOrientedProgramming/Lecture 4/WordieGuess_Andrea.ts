import GuessLetter from './GuessLetter.js';

export default class WordieGuess {
  private letters: GuessLetter[];

  public constructor(answer: string, guess: string) {
    this.letters = [];
    for (let i: number = 0; i < guess.length; i++) {
      this.letters.push(new GuessLetter(guess[i]));
    }
    // it's wrong to check the answer in the constructor, so I call a new function
    this.checkAnswer(answer);
  }

  /**
   * to check the answer
   * @param answer the answer that needs to be checked
   */
  public checkAnswer(answer: string): void {
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
   * to put together the letters
   * @returns the div element to be duplayed
   */
  public writeGuess(): HTMLDivElement {
    const toReturn: HTMLDivElement = document.createElement('div');
    for (let i: number = 0; i < this.letters.length; i++) {
      toReturn.appendChild(this.letters[i].writeLetter());
    }

    toReturn.className = 'guess';
    return toReturn;
  }
}
