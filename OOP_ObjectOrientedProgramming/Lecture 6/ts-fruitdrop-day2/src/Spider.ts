import CanvasRenderer from './CanvasRenderer.js';
import Player from './Player.js';

export default class Spider {
  private posX: number;

  private posY: number;

  private image: HTMLImageElement;

  private score: number;

  public constructor(maxX: number) {
    // Choose a random image for the spiders
    const random: number = Math.random();
    if (random > 0.9) {
      this.image = CanvasRenderer.loadNewImage('./assets/spider01.png');
      this.score = -5;
    } else if (random > 0.8) {
      this.image = CanvasRenderer.loadNewImage('./assets/spider02.png');
      this.score = -3;
    } else if (random > 0.5) {
      this.image = CanvasRenderer.loadNewImage('./assets/spider03.png');
      this.score = -2;
    } else {
      this.image = CanvasRenderer.loadNewImage('./assets/spider04.png');
      this.score = -1;
    }
    this.posX = (Math.random() * maxX);
    this.posY = -32;
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

  /**
   * Update position of spider.
   *
   * @param elapsed the elapsed time from the Game
   */
  public update(elapsed: number): void {
    this.posY += elapsed * 0.15;
  }
}
