export default class Cattribute {
  private value: number;

  public constructor(initialValue: number) {
    this.value = initialValue;
  }

  /**
   * decreases the value of the certain variable by a certain given number
   * @param by added from the Catagotchi.ts
   */
  public increase(by: number): void {
    if (this.value < 10) this.value += by;
  }

  /**
   * decreases the value of the certain variable by a certain given number
   * @param by added from the Catagotchi.ts
   */
  public decrease(by: number): void {
    if (this.value > 0) this.value -= by;
  }

  public getValue(): number {
    return this.value;
  }
}
