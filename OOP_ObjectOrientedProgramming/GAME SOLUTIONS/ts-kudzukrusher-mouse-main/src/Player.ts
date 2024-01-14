import CanvasRenderer from './CanvasRenderer.js';
import CanvasItem from './CanvasItem.js';

export default class Player extends CanvasItem {
  public constructor(maxX: number, maxY: number) {
    super();
    this.image = CanvasRenderer.loadNewImage('./assets/hoe_wood.png');
    this.posX = maxX / 2;
    this.posY = maxY / 2;
  }

  /**
   * Get the new position of the player from the mouse position
   *
   * @param posX x-coordinate of the player
   * @param posY y-coordinate of the player
   */
  public move(posX: number, posY: number): void {
    this.posX = posX;
    this.posY = posY;
  }

  /**
   * Render the player to the canvas
   * @param canvas canvas to render to
   */
  public override render(canvas: HTMLCanvasElement): void {
    CanvasRenderer.drawImage(canvas, this.image, this.posX, this.posY);
  }
}
