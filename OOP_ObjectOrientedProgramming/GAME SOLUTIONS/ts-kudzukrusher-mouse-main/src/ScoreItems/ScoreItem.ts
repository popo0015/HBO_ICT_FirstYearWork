import CanvasItem from '../CanvasItem.js';

export default abstract class ScoreItem extends CanvasItem {
  protected score: number;

  public abstract update(elapsed: number): void;

  public getScore(): number {
    return this.score;
  }
}
