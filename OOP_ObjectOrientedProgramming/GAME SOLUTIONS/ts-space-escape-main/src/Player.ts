import CanvasRenderer from './CanvasRenderer.js';
import ScoreItem from './ScoreItem.js';

export default class Player {
  private image: HTMLImageElement;

  private posX: number;

  private posY: number;

  private maxY: number;

  private doAccelerate: number;

  private acceleration: number = 0;

  public constructor(canvasWidth: number, canvasHeight: number) {
    this.posX = 50;
    this.posY = canvasHeight / 2;
    this.image = CanvasRenderer.loadNewImage('assets/ship.png');
    this.maxY = canvasHeight;

    this.doAccelerate = 0;
  }

  /**
   * Test whether a power-up collides with the player
   *
   * @param item The power-up to test for
   * @returns true if the power-up has indeed collided
   */
  public itemCollided(item: ScoreItem): boolean {
    return (item.getPosX() < this.posX + this.image.width
    && item.getPosX() + item.getWidth() > this.posX
    && item.getPosY() + item.getHeight() > this.posY
    && item.getPosY() < this.posY + this.image.height);
  }

  /**
   * Set the acceleration flag to go up
   */
  public moveUp(): void {
    this.doAccelerate = -1;
  }

  /**
   * Set the acceleration flag to go down
   */
  public moveDown(): void {
    this.doAccelerate = 1;
  }

  /**
   * Change acceleration depending on the acceleration flag. Reset the flag.
   * Update the position of the space ship by looking at its current acceleration.
   *
   * @param elapsed ms elapsed from previous frame
   */
  public update(elapsed: number): void {
    // doAccelerate is set to -1 for up, 1 for down, 0 for nothing
    if (this.doAccelerate !== 0) {
      this.acceleration += this.doAccelerate * (elapsed * 0.005);
      this.doAccelerate = 0;
    }

    // Change the position of the player depending on its acceleration
    this.posY += (this.acceleration * (elapsed / 10));

    // If the player is out of the screen, put it back on the other side
    if (this.posY < 0 - (this.image.height / 2)) this.posY = this.maxY - (this.image.height / 2);
    if (this.posY + (this.image.height / 2) > this.maxY) {
      this.posY = 0 - (this.image.height / 2);
    }
  }

  /**
   * Render the spaceship to the canvas
   *
   * @param canvas canvas to render to
   */
  public render(canvas: HTMLCanvasElement): void {
    CanvasRenderer.drawImage(canvas, this.image, this.posX, this.posY);
  }
}
