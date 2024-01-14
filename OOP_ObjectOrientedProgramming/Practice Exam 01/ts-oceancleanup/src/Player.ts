import CanvasItem from './CanvasItem.js';
import CanvasRenderer from './CanvasRenderer.js';
import ScoreItem from './ScoreItem.js';

export default class Player extends CanvasItem {
  public constructor(canvas: HTMLCanvasElement) {
    super();
    this.canvas = canvas;
    this.image = CanvasRenderer.loadNewImage('./assets/player.png');
    this.posX = canvas.width - 100;
    this.posY = canvas.height / 2 - (this.image.height / 2);
  }

  /**
   * moves the player upwards
   */
  public moveUp(): void {
    this.posY -= 9;
  }

  /**
   * moves the player downwards
   */
  public moveDown(): void {
    this.posY += 9;
  }

  /**
   *
   * @param item passed
   * @returns whether there is a collision or not
   */
  public isColliding(item: ScoreItem): boolean {
    if (item.getPosX() < this.posX + this.image.width
      && item.getPosX() + item.getWidth() > this.posX
      && item.getPosY() < this.posY + this.image.height
      && item.getPosY() + item.getHeight() > this.posY) {
      return true;
    } else {
      return false;
    }
  }

  /**
   * updates every game loop
   * @param elasped ms
   */
  public update(elasped: number): void {
    if (this.posY < 0) {
      this.posY = 0;
    }
    if (this.posY + this.image.height > this.canvas.height) {
      this.posY = this.canvas.height - this.image.height;
    }
  }

  /**
   * @param canvas the canvas that is passed and where everything is printed
   */
  public override render(canvas: HTMLCanvasElement): void {
    CanvasRenderer.drawImage(canvas, this.image, this.posX, this.posY);
  }
}
