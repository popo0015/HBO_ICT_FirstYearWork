import NumberDisplay from './NumberDisplay.js';

export default class ClockDisplay {
  private display: HTMLDivElement;

  private hours: NumberDisplay;

  private minutes: NumberDisplay;

  private seconds: NumberDisplay;

  public constructor(display: HTMLDivElement) {
    this.display = display;
    this.hours = new NumberDisplay(24);
    this.minutes = new NumberDisplay(60);
    this.seconds = new NumberDisplay(60);
  }

  /**
   * time tick
   */
  public timeTick(): void {
    this.seconds.increment();
    if (this.seconds.getValue() === 0) {
      this.minutes.increment();
      if (this.minutes.getValue() === 0) {
        this.hours.increment();
      }
    }
    this.updateDisplay();
  }

  /**
   * time tick
   */
  private updateDisplay(): void {
    this.display.innerHTML = `${this.hours.getValue()}: ${this.minutes.getValue()}: ${this.seconds.getValue()}`;
  }
}
