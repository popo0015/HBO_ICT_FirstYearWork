import CanvasRenderer from './CanvasRenderer.js';
import Fruit from './Fruit.js';
import Spider from './Spider.js';

export default class Player {
  private image: HTMLImageElement;

  private speed: number;

  private posX: number;

  private posY: number;

  private maxX: number;

  private movingLeft: boolean; // flag - called like that cuz there is a flag in a microprocessor

  private movingRight: boolean; // flag

  public constructor(maxX: number, maxY: number) {
    this.maxX = maxX;
    this.image = CanvasRenderer.loadNewImage('./assets/basket.png');
    this.posX = (maxX / 2) - 30;
    this.posY = maxY - 80;
    this.speed = 0.5;
  }

  /**
   * moves the basket to the left
   */
  public moveLeft(): void {
    this.movingLeft = true;
  }

  /**
   * moves the basket to the right
   */
  public moveRight(): void {
    this.movingRight = true;
  }

  public getPosY(): number {
    return this.posY;
  }

  public getPosX(): number {
    return this.posX;
  }

  public getWidth(): number {
    return this.image.width;
  }

  public getHeight(): number {
    return this.image.height;
  }

  /**
   * updates the basket visual and defines the borders of the field
   * @param elapsed the time between each game rendering
   */
  public update(elapsed: number): void {
    if (this.movingLeft) {
      this.posX -= elapsed * this.speed;
      if (this.posX <= 0) {
        this.movingLeft = false;
        this.posX = 0;
      }
    }
    if (this.movingRight) {
      this.posX += elapsed * this.speed;
      if (this.posX >= this.maxX - this.image.width) {
        this.movingRight = false;
        this.posX = this.maxX - this.image.width;
      }
    }
    this.movingRight = false;
    this.movingLeft = false;
  }

  /**
   *
   * @param canvas from FruitDrop
   */
  public render(canvas: HTMLCanvasElement): void {
    CanvasRenderer.drawImage(canvas, this.image, this.posX, this.posY);
  }
}
