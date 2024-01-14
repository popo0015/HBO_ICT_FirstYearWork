import CanvasRenderer from './CanvasRenderer.js';

// with polymorphism

export default abstract class ScoreItem {
  protected image: HTMLImageElement;

  protected shieldModifier: number;

  protected posX: number;

  protected posY: number;

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

  public getShieldModifier(): number {
    return this.shieldModifier;
  }

  public abstract update(elapsed: number): void;

  /**
   * renders the score item
   * @param canvas from the SpaceEscape.ts
   */
  public render(canvas: HTMLCanvasElement): void {
    CanvasRenderer.drawImage(canvas, this.image, this.posX, this.posY);
  }
}
