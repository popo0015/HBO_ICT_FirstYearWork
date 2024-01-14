export default abstract class CanvasItem {
  protected image: HTMLImageElement;

  protected posX: number;

  protected posY: number;

  protected canvas: HTMLCanvasElement;

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
   * @param canvas the canvas that is passed and where everything is printed
   */
  public abstract render(canvas: HTMLCanvasElement): void;
}
