import Shape from './Shape.js';

export default class Circle extends Shape {
  private radius: number;

  private pi: number = 3.14;

  public constructor(theColour: string, theRadius: number) {
    super(theColour);
    this.colour = theColour;
    this.radius = theRadius;
    console.log('circle');
    console.log(this.colour + ' radius: ' + this.radius);

    this.calculateArea();
    this.calculateParameter();
  }

  /**
   * calculates the area of the circle
   * @returns area of the circle
   */
  public override calculateArea(): number {
    const area: number = this.radius**2 * this.pi;
    console.log(area);
    return area;
  }

  /**
   * calculates the parameter of the circle
   * @returns parameter of the circle
   */
  public override calculateParameter(): number {
    let parameter: number = (this.radius * this.pi) * 2;
    parameter = Number(parameter.toFixed(0));
    console.log(parameter);
    return parameter;
  }
}
