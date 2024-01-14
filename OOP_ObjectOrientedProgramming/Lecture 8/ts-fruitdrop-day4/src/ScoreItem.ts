import CanvasRenderer from './CanvasRenderer.js';

export default abstract class ScoreItem {
  protected posX: number;

  protected posY: number;

  protected image: HTMLImageElement;

  protected score: number;

  public constructor(maxX: number) {
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

  public abstract update(elapsed: number): void;

  /**
   * Render the GameItem to the canvas
   *
   * @param canvas canvas to render the GameItem to
   */
  public render(canvas: HTMLCanvasElement): void {
    CanvasRenderer.drawImage(canvas, this.image, this.posX, this.posY);
  }
}
