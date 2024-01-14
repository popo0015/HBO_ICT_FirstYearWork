import CanvasItem from '../CanvasItem.js';

export default abstract class ScoreItem extends CanvasItem {
  protected score: number;

  protected count: number = 0;

  public abstract update(elapsed: number): void;

  public getScore(): number {
    return this.score;
  }

  public getCount(): number {
    return this.count;
  }
}
