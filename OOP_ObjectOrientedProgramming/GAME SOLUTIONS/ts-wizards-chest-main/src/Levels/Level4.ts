import Dynamite from '../GameItems/Dynamite.js';
import GameItem from '../GameItems/GameItem.js';
import Key from '../GameItems/Key.js';
import ScoreItem from '../GameItems/ScoreItem.js';
import Level from './Level.js';

export default class Level4 extends Level {
  protected readonly LEVELNO: number = 4;

  public constructor(maxX: number, maxY: number, startScore: number = 0) {
    super(maxX, maxY, startScore);

    this.lanes.push(35);
    this.lanes.push(160);
    this.lanes.push(285);
    this.lanes.push(410);
    this.lanes.push(535);

    this.timeToNextItem = 500;
    this.gameItems.push(new Key(this.lanes[1]));

    this.startLevel();
  }

  protected spawnNewItem(): GameItem {
    this.timeToNextItem = (Math.random() * 200) + 500;
    const newX: number = this.lanes[Math.floor(Math.random() * 5)];
    const random: number = Math.random();
    if (random > 0.9) {
      return new Dynamite(newX);
    } else if (random > 0.7) {
      return new Key(newX);
    } else {
      return new ScoreItem(newX);
    }
  }

  /**
   * There is no next level. This is the last level.
   *
   * @returns null
   */
  public override nextLevel(): Level | null {
    // TODO: Implement a win screen that can restart the game
    return null;
  }
}
