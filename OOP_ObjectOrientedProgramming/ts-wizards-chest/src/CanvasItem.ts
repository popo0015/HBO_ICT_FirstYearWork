import CanvasRenderer from './CanvasRenderer.js';

export default abstract class CanvasItem {
  protected image: HTMLImageElement;

  protected posX: number;

  protected posY: number;

  public getPosX(): number {
    return this.posX;
  }

  public getPosY(): number {
    return this.posY;
  }

  public getWidth(): number {
    return this.image.width;
  }

  public getHeight(): number {
    return this.image.height;
  }

  /**
   * renders
   * @param canvas canvas to draw on
   */
  public render(canvas: HTMLCanvasElement): void {
    CanvasRenderer.drawImage(canvas, this.image, this.posX, this.posY);
  }
}
