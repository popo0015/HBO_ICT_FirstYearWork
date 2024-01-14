export default class GuessLetter {
  private letter: string;

  private isCorrectLetter: boolean;

  private isCorrectPlace: boolean;

  public constructor(letter: string) {
    this.letter = letter;
  }

  public setCorrectLetter(): void {
    this.isCorrectLetter = true;
  }

  public setCorrectPlace(): void {
    this.isCorrectPlace = true;
  }

  /**
   *
   * @returns a div for every letter
   */
  public writeLetter(): HTMLDivElement {
    const lettersDiv = document.createElement('div');
    lettersDiv.className = 'letter';
    if (this.isCorrectLetter) {
      lettersDiv.style.color = 'blue';
    }
    if (this.isCorrectPlace) {
      lettersDiv.style.color = 'green';
    }

    lettersDiv.innerHTML = this.letter;
    return lettersDiv;
  }

  public getLetter(): string {
    return this.letter;
  }
}
