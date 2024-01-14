import CanvasRenderer from './CanvasRenderer.js';

export default abstract class ScoreItem {
  protected posX: number;

  protected posY: number;

  protected image: HTMLImageElement;

  protected shieldModifier: number;

  protected speed = 0;

  public constructor() {
    this.shieldModifier = 0;
  }

  public abstract update(elapsed: number): void;

  /**
   * Render the current game item to the screen
   *
   * @param canvas canvas to render to
   */
  public render(canvas: HTMLCanvasElement): void {
    CanvasRenderer.drawImage(canvas, this.image, this.posX, this.posY);
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

  public getShieldValue(): number {
    return this.shieldModifier;
  }
}
