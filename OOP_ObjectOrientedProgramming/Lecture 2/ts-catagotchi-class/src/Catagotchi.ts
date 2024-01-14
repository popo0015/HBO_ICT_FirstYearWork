export default class Catagotchi {
  private catAlive: boolean;

  private catStatus: string;

  private catMood: number;

  private catEnergy: number;

  private catHunger: number;

  private catScreenImage = document.querySelector('img');

  /**
   * main method called by when class is called
   */
  public constructor() {
    this.catAlive = true;
    this.catStatus = 'Happy';
    this.catMood = 10;
    this.catEnergy = 10;
    this.catHunger = 0;
  }

  /**
   * what happends when the cat is fed
   */
  public feed(): void {
    this.catHunger -= 1;
    if (this.catHunger < 0) this.catHunger = 0;
    if (this.catHunger > 10) this.catHunger = 10;
  }

  /**
   * what happends when the cat is played with
   */
  public play(): void {
    this.catMood += 1;
    if (this.catMood < 0) this.catMood = 0;
    if (this.catMood > 10) this.catMood = 10;
    this.catEnergy -= 1;
    if (this.catEnergy < 0) this.catEnergy = 0;
    if (this.catEnergy > 10) this.catEnergy = 10;
  }

  /**
   * what happends when the cat is pet
   */
  public pet(): void {
    this.catEnergy += 1;
    if (this.catEnergy < 0) this.catEnergy = 0;
    if (this.catEnergy > 10) this.catEnergy = 10;
    this.catHunger += 1;
    if (this.catHunger < 0) this.catHunger = 0;
    if (this.catHunger > 10) this.catHunger = 10;
  }

  /**
   * what happends when the cat dies
   */
  private catDied(): void {
    if (this.catEnergy <= 2 && this.catMood <= 2 && this.catHunger >= 8) {
      this.catStatus = 'Unhappy';
      this.catScreenImage.src = './photos/unhappy-cat.png';
    } else if (this.catEnergy <= 4 && this.catMood <= 4 && this.catHunger >= 6) {
      this.catStatus = 'Okay';
      this.catScreenImage.src = './photos/ok-cat.png';
    } else {
      this.catStatus = 'Happy';
      this.catScreenImage.src = './photos/happy-cat.png';
    }
  }

  /**
   * Update the state of Catagotchi according to rules
   */
  public updateCat(): void {
    this.catEnergy -= 1;
    if (this.catEnergy === 0) this.catAlive = false;
    this.catHunger += 1;
    if (this.catHunger === 10) this.catAlive = false;
    this.catMood -= 1;

    this.catDied();
  }

  /**
   * Update the screen of the Catagotchi
   *
   * @returns String with the output for the screen
   */
  public getScreen(): string {
    if (this.catAlive) {
      return `Catagotchi!<br>
      Status: ${this.catStatus}<br>
    Mood:   ${this.catMood}<br>
    Energy: ${this.catEnergy}<br>
    Hunger: ${this.catHunger}`;
    }
    return 'Catagotchi Dead!';
  }
}
