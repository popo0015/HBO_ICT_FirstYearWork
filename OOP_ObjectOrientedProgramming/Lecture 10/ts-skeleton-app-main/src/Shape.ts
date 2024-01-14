export default abstract class Shape {
  protected colour: string;

  public constructor(theColour: string) {
    this.colour = theColour;
  }

  public getColour(): string {
    return this.colour;
  }

  public abstract calculateArea(): number;

  public abstract calculateParameter(): number;
}
