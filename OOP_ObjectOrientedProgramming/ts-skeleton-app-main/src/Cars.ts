export default class Car {
  private brand: string;

  public setBrand(brand: string): void {
    this.brand = brand;
  }

  public getBrand(): string {
    return this.brand;
  }

  private model: string;

  private fuel: number;

  public setFuel(fuel: number): void {
    this.fuel = fuel;
  }

  public getFuel(): number {
    return this.fuel;
  }

  private speed: number;

  private mileage: number;

  public constructor() {
    this.mileage = 0;
  }
}
