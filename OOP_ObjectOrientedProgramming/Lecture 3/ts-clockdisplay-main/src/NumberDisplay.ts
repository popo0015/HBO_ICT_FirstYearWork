export default class NumberDisplay {
  private value: number;

  private limit: number;

  public constructor(limit: number) {
    this.limit = limit;
    this.value = 0;
  }

  /**
   * increment function
   */
  public increment(): void {
    this.value += 1;
    if (this.value === this.limit) this.value = 0;
  }

  /**
   * getter
   * @returns the value of value
   */
  public getValue(): number {
    return this.value;
  }
}
