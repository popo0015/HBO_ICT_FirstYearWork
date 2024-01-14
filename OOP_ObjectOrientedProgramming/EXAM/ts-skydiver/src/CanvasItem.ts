import CanvasRenderer from './CanvasRenderer.js';

export default abstract class CanvasItem {
  protected image: HTMLImageElement;

  protected posX: number;

  protected posY: number;

  protected canvas: HTMLCanvasElement;

  /**
   * getter
   * @returns the posX
   */
  public getPosX(): number {
    return this.posX;
  }

  /**
   * getter
   * @returns the posY
   */
  public getPosY(): number {
    return this.posY;
  }

  /**
   * getter
   * @returns the width of the specific image
   */
  public getWidth(): number {
    return this.image.width;
  }

  /**
   * getter
   * @returns the height of the specific image
   */
  public getHeight(): number {
    return this.image.height;
  }

  /**
   * renders the CanvasItems
   * @param canvas passed canvas element
   */
  public render(canvas: HTMLCanvasElement): void {
    CanvasRenderer.drawImage(canvas, this.image, this.posX, this.posY);
  }
}
