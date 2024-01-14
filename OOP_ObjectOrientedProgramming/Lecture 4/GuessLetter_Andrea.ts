export default class GuessLetter {
  private letter: string;

  private isCorrectPlace: boolean;

  private isCorrectLetter: boolean;

  public constructor(letter: string) {
    this.letter = letter;
  }

  // how do I check letter without getting them
  public getLetter(): string {
    return this.letter;
  }

  public setCorrectPlace(): void {
    this.isCorrectPlace = true;
  }

  public setCorrectLetter(): void {
    this.isCorrectLetter = true;
  }

  /**
   * to style the letters
   * @returns the letter styled letter
   */
  public writeLetter(): HTMLDivElement {
    const toReturn: HTMLDivElement = document.createElement('div');
    toReturn.className = 'letter';
    if (this.isCorrectLetter) {
      toReturn.style.color = 'blue';
    }
    if (this.isCorrectPlace) {
      toReturn.style.color = 'green';
    }
    toReturn.innerHTML = this.letter;

    return toReturn;
  }
}
