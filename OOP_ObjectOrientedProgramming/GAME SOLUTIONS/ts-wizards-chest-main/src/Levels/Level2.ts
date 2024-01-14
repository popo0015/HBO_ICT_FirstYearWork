import GameItem from '../GameItems/GameItem.js';
import Key from '../GameItems/Key.js';
import ScoreItem from '../GameItems/ScoreItem.js';
import Level from './Level.js';
import Level3 from './Level3.js';

export default class Level2 extends Level {
  protected readonly LEVELNO: number = 2;

  public constructor(maxX: number, maxY: number, startScore: number = 0) {
    super(maxX, maxY, startScore);

    this.lanes.push(160);
    this.lanes.push(285);
    this.lanes.push(410);

    this.timeToNextItem = 500;
    this.startLevel();
  }

  protected spawnNewItem(): GameItem {
    this.timeToNextItem = (Math.random() * 200) + 500;
    const newX: number = this.lanes[Math.floor(Math.random() * 3)];
    const random: number = Math.random();
    if (random > 0.9) {
      return new Key(newX);
    } else {
      return new ScoreItem(newX);
    }
  }

  /**
   * See if the player has reached the next level
   *
   * @returns The next level if the score is 1000 or higher, null otherwise
   */
  public override nextLevel(): Level | null {
    if (this.score >= 1000) {
      return new Level3(this.maxX, this.maxY, this.score);
    }
    return null;
  }
}
