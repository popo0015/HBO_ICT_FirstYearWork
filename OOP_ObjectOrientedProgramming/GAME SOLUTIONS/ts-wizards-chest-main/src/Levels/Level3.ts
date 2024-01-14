import Dynamite from '../GameItems/Dynamite.js';
import GameItem from '../GameItems/GameItem.js';
import Key from '../GameItems/Key.js';
import ScoreItem from '../GameItems/ScoreItem.js';
import Level from './Level.js';
import Level4 from './Level4.js';

export default class Level3 extends Level {
  protected readonly LEVELNO: number = 3;

  public constructor(maxX: number, maxY: number, startScore: number = 0) {
    super(maxX, maxY, startScore);

    this.lanes.push(85);
    this.lanes.push(210);
    this.lanes.push(335);
    this.lanes.push(460);

    this.timeToNextItem = 500;
    this.gameItems.push(new Key(this.lanes[1]));

    this.startLevel();
  }

  protected spawnNewItem(): GameItem {
    this.timeToNextItem = (Math.random() * 200) + 500;
    const newX: number = this.lanes[Math.floor(Math.random() * 4)];
    const random: number = Math.random();
    if (random > 0.9) {
      return new Key(newX);
    } else if (random > 0.7) {
      return new Dynamite(newX);
    } else {
      return new ScoreItem(newX);
    }
  }

  /**
   * See if the player has reached the next level
   *
   * @returns The next level if the score is 1500 or higher, null otherwise
   */
  public override nextLevel(): Level | null {
    if (this.score >= 1500) {
      return new Level4(this.maxX, this.maxY, this.score);
    }
    return null;
  }
}
