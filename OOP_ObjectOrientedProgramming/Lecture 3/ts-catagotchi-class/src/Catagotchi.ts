import Cattribute from './Cattribute.js';

export default class Catagotchi {
  private catAlive: boolean;

  private catStatus: string;

  private catMood: Cattribute;

  private catEnergy: Cattribute;

  private catHunger: Cattribute;

  private catScreenImage = document.querySelector('img');

  /**
   * main method called by when class is called
   */
  public constructor() {
    this.catAlive = true;
    this.catStatus = 'Happy';
    this.catMood = new Cattribute(10);
    this.catEnergy = new Cattribute(10);
    this.catHunger = new Cattribute(0);
  }

  /**
   * what happends when the cat is fed
   */
  public feed(): void {
    this.catHunger.decrease(1);
  }

  /**
   * what happends when the cat is played with
   */
  public play(): void {
    this.catMood.increase(1);
    this.catEnergy.decrease(1);
  }

  /**
   * what happends when the cat is pet
   */
  public pet(): void {
    this.catEnergy.increase(1);
    this.catHunger.increase(1);
  }

  /**
   * what happends when the cat dies
   */
  private catDied(): void {
    if (this.catEnergy.getValue() <= 0) this.catAlive = false;
    if (this.catHunger.getValue() >= 10) this.catAlive = false;
  }

  /**
   * Update the state of Catagotchi according to rules
   */
  public updateCat(): void {
    this.catEnergy.decrease(1);
    this.catHunger.increase(1);
    this.catMood.decrease(1);

    if (this.catEnergy.getValue() <= 2 || this.catMood.getValue() <= 2
      || this.catHunger.getValue() >= 8) {
      this.catStatus = 'Unhappy';
      this.catScreenImage.src = './photos/unhappy-cat.png';
    } else if (this.catEnergy.getValue() <= 4 || this.catMood.getValue() <= 4
      || this.catHunger.getValue() >= 6) {
      this.catStatus = 'Okay';
      this.catScreenImage.src = './photos/ok-cat.png';
    } else {
      this.catStatus = 'Happy';
      this.catScreenImage.src = './photos/happy-cat.png';
    }

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
    Mood:   ${this.catMood.getValue()}<br>
    Energy: ${this.catEnergy.getValue()}<br>
    Hunger: ${this.catHunger.getValue()}`;
    }
    return 'Catagotchi Dead!';
  }
}
