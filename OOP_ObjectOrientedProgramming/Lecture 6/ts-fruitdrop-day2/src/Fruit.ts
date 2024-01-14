import CanvasRenderer from './CanvasRenderer.js';
import Player from './Player.js';

export default class Fruit {
  private posX: number;

  private posY: number;

  private image: HTMLImageElement;

  private score: number;

  private speed = 0.15;

  private player: Player;

  public constructor(maxX: number) {
    const random: number = Math.random();
    if (random > 0.9) {
      this.image = CanvasRenderer.loadNewImage('./assets/fruit-cherries.png');
      this.score = 10;
    } else if (random > 0.7) {
      this.image = CanvasRenderer.loadNewImage('./assets/fruit-strawberry.png');
      this.score = 7;
    } else if (random > 0.4) {
      this.image = CanvasRenderer.loadNewImage('./assets/fruit-orange.png');
      this.score = 5;
    } else if (random > 0.2) {
      this.image = CanvasRenderer.loadNewImage('./assets/fruit-grapes.png');
      this.score = 3;
    } else {
      this.image = CanvasRenderer.loadNewImage('./assets/fruit-banana.png');
      this.score = 1;
    }
    this.posX = (Math.random() * maxX);
    this.posY = -32;
  }

  /**
   * Update the position of the fruit. The fruit will start accelerating.
   *
   * @param elapsed elapsed time from the game
   */
  public update(elapsed: number): void {
    this.speed *= 1.0003 ** elapsed;
    this.posY += elapsed * this.speed;
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

  public getScore(): number {
    return this.score;
  }

  /**
   * checks if a fruit collides with the basket
   * @returns true if it collides and false if it doesn't
   * @param player the player duh
   */
  public checkIfCollides(player: Player): boolean {
    // use box-box collision method
    if (
      this.posY + this.getHeight() > player.getPosY()
      && this.posY < player.getPosY() + player.getHeight()
      && this.posX + this.getWidth() > player.getPosX()
      && this.posX < player.getPosX() + player.getWidth()
    ) {
      return true;
    }
    return false;
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
