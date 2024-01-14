import Shape from './Shape.js';

export default class Rectangle extends Shape {
  private width: number;

  private height: number;

  public constructor(theColour: string, theWidth: number, theHeight: number) {
    super(theColour);

    this.height = theHeight;
    this.width = theWidth;
    this.colour = theColour;

    console.log('rectangle');
    console.log(this.colour + ' width: ' + this.width + ' height: ' + this.height);

    this.calculateArea();
    this.calculateParameter();
  }

  /**
   * calculates the area of the rectangle
   * @returns area of the rectangle
   */
  public override calculateArea(): number {
    const area: number = this.width * this.height;
    console.log(area);
    return area;
  }

  /**
   * calculates the parameter of the rectangle
   * @returns parameter of the rectangle
   */
  public override calculateParameter(): number {
    const parameter: number = (this.width + this.height) * 2;
    console.log(parameter);
    return parameter;
  }
}
