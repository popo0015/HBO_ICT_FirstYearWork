import Dynamite from './Dynamite.js';
import Key from './Key.js';
import Bomb from './Bomb.js';
import Level from './Level.js';
import ScoreItem from './ScoreItem.js';
import Level1 from './Level1.js';

export default class Level5 extends Level {
  public constructor(maxX: number, maxY: number, startScore: number) {
    super(maxX, maxY, startScore);
    this.lanes = [35, 160, 285, 410, 535];
    this.levelCount = 5;
  }

  protected override spawnNewItem(): void {
    const randomLane: number = this.lanes[Math.trunc(Math.random() * this.lanes.length)];
    const whichItem: number = Math.random();
    if (whichItem < 0.1) {
      this.gameItems.push(new Key(randomLane));
    } else if (whichItem < 0.3) {
      this.gameItems.push(new Dynamite(randomLane));
    } else if (whichItem < 0.45) {
      this.gameItems.push(new Bomb(randomLane));
    } else {
      this.gameItems.push(new ScoreItem(randomLane));
    }
  }

  public nextLevel(canvas: HTMLCanvasElement): Level | null {
    if(this.totalScore < 0) {
      return new Level1(this.maxX, this.maxY);
    }
    return null;
  }
}
