import CanvasRenderer from './CanvasRenderer.js';

export default class CanvasItem {
  protected image: HTMLImageElement;

  protected posX: number;

  protected posY: number;

  public getPosX(): number {
    return this.posX;
  }

  public getPosY(): number {
    return this.posY;
  }

  public getHeight(): number {
    return this.image.height;
  }

  public getWidth(): number {
    return this.image.width;
  }

  /**
   * Renders the item on the given canvas
   *
   * @param canvas The canvas to render the item on
   */
  public render(canvas: HTMLCanvasElement): void {
    CanvasRenderer.drawImage(canvas, this.image, this.posX - (this.image.width/2), this.posY);
  }
}
