import GameItem from '../GameItems/GameItem.js';
import ScoreItem from '../GameItems/ScoreItem.js';
import Level from './Level.js';
import Level2 from './Level2.js';

export default class Level1 extends Level {
  protected readonly LEVELNO: number = 1;

  public constructor(maxX: number, maxY: number) {
    super(maxX, maxY, 0);

    this.lanes.push(160);
    this.lanes.push(285);
    this.lanes.push(410);

    this.timeToNextItem = 500;

    this.startLevel();
  }

  protected spawnNewItem(): GameItem {
    this.timeToNextItem = (Math.random() * 200) + 500;
    const newX: number = this.lanes[Math.floor(Math.random() * 3)];
    return new ScoreItem(newX);
  }

  /**
   * See if the player has reached the next level
   *
   * @returns The next level if the score is 500 or higher, null otherwise
   */
  public override nextLevel(): Level | null {
    if (this.score >= 500) {
      return new Level2(this.maxX, this.maxY, this.score);
    }
    return null;
  }
}
