import CanvasItem from './CanvasItem.js';
import CanvasRenderer from './CanvasRenderer.js';

export default abstract class ScoreItem extends CanvasItem{
  protected score: number;

  protected speed: number;

  protected speedUpwords: number;

  public getScore(): number {
    return this.score;
  }

  /**
   * @returns an image of the sludge
   */
  public changeToSludge(): HTMLImageElement{
    this.score = 100;
    this.speed = 0.35;
    return this.image = CanvasRenderer.loadNewImage('./assets/toxic.png');
  }

  /**
   * @param elapsed in milliseconds - gameloop
   */
  public update(elapsed: number): void {
    this.posX += elapsed * this.speed;
    this.posY -= elapsed * this.speedUpwords;
  }

  /**
   * @param canvas the canvas that is passed and where everything is printed
   */
  public override render(canvas: HTMLCanvasElement): void {
    CanvasRenderer.drawImage(canvas, this.image, this.posX, this.posY);
  }
}
