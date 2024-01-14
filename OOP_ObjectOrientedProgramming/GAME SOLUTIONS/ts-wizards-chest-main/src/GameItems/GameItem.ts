import CanvasItem from '../CanvasItem.js';

export default abstract class GameItem extends CanvasItem {
  protected speed: number;

  protected score: number;

  public getScore(): number {
    return this.score;
  }

  /**
   * Updates the position of the item
   *
   * @param elapsed The ms elapsed since the last update
   */
  public update(elapsed: number): void {
    this.posY += this.speed * elapsed;
  }
}
