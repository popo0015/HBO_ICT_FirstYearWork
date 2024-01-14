import CanvasItem from './CanvasItem.js';
import CanvasRenderer from './CanvasRenderer.js';
import LightItem from './LightItem.js';

export default class Player extends CanvasItem {
  private isMoving: number;

  public constructor(canvas: HTMLCanvasElement) {
    super();
    this.posX = 200;
    this.posY = 40;
    this.isMoving = 0;
    this.canvas = canvas;
    this.image = CanvasRenderer.loadNewImage('./assets/player.png');
  }

  /**
   *
   * @param elasped time in ms between the frames
   */
  public update(elasped: number): void {
    this.posX += this.isMoving * elasped;
    this.isMoving = 0;
    if (this.posX < 0) {
      this.posX = 0;
    }
    if (this.posX + this.image.width > this.canvas.width) {
      this.posX = this.canvas.width - this.image.width;
    }
  }

  /**
   * movement of the character
   */
  public moveLeft(): void {
    this.isMoving = -1;
  }

  /**
   * movement of the character
   */
  public moveRight(): void {
    this.isMoving = 1;
  }

  /**
   *
   * @param item the specific lightItem going trough the array
   * @returns true if there is collision || false if there is no collision
   */
  public isColliding(item: LightItem): boolean {
    if (item.getPosX() + item.getWidth() >= this.posX
      && item.getPosX() <= this.posX + this.image.width
      && item.getPosY() + item.getHeight() >= this.posY
      && item.getPosY() <= this.posY + this.image.height) {
      return true;
    }
    return false;
  }
}
