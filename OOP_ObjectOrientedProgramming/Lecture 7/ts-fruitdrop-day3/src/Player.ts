import CanvasRenderer from './CanvasRenderer.js';
import Fruit from './Fruit.js';
import Spider from './Spider.js';

export default class Player {
  private posX: number;

  private posY: number;

  private image: HTMLImageElement;

  private maxX: number;

  private speed: number = 0.4;

  private movingLeft: boolean = false;

  private movingRight: boolean = false;

  public constructor(canvasWidth: number, canvasHeight: number) {
    this.image = CanvasRenderer.loadNewImage('assets/basket.png');
    this.posX = canvasWidth / 2;
    this.posY = canvasHeight - 100;
    this.maxX = canvasWidth;
  }

  /**
   * Test whether the fruit collides with the player
   *
   * @param fruit The fruit to test for
   * @returns true if the fruit has indeed collided.
   */
  public fruitCollided(fruit: Fruit): boolean {
    return (fruit.getPosX() + fruit.getWidth() > this.posX
      && fruit.getPosX() < this.posX + this.image.width
      && fruit.getPosY() + fruit.getHeight() > this.posY
      && fruit.getPosY() < this.posY + this.image.height);
  }

  /**
   * Test whether a spider collides with the player
   *
   * @param spider The spider to test for
   * @returns true if the spider has indeed collided
   */
  public spiderCollided(spider: Spider): boolean {
    return (spider.getPosX() + spider.getWidth() > this.posX
      && spider.getPosX() < this.posX + this.image.width
      && spider.getPosY() + spider.getHeight() > this.posY
      && spider.getPosY() < this.posY + this.image.height);
  }

  /**
   * Sets a flag that the player is going to move left
   */
  public moveLeft(): void {
    this.movingLeft = true;
  }

  /**
   * Sets a flag that the player is going to move right
   */
  public moveRight(): void {
    this.movingRight = true;
  }

  /**
   * Update the position of the player. If the the movingLEft or movingRight
   * flag has been set, the player will move accordingly.
   * @param elapsed the number of ms that has passed since the last update
   */
  public update(elapsed: number): void {
    if (this.movingLeft) {
      this.posX -= this.speed * elapsed;
      if (this.posX < 0) {
        this.posX = 0;
      }
      this.movingLeft = false;
    }
    if (this.movingRight) {
      this.posX += this.speed * elapsed;
      if (this.posX + (this.image.width) > this.maxX) {
        this.posX = this.maxX - (this.image.width);
      }
      this.movingRight = false;
    }
  }

  /**
   * Render the GameItem to the canvas
   *
   * @param canvas canvas to render the GameItem to
   */
  public render(canvas: HTMLCanvasElement): void {
    CanvasRenderer.drawImage(canvas, this.image, this.posX, this.posY);
  }
}
