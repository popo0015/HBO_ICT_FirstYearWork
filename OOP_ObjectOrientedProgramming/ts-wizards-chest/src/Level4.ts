import Dynamite from './Dynamite.js';
import Key from './Key.js';
import Level from './Level.js';
import Level1 from './Level1.js';
import Level5 from './Level5.js';
import ScoreItem from './ScoreItem.js';

export default class Level4 extends Level {
  public constructor(maxX: number, maxY: number, startScore: number) {
    super(maxX, maxY, startScore);
    this.lanes = [35, 160, 285, 410, 535];
    this.levelCount = 4;
  }

  protected override spawnNewItem(): void {
    const randomLane: number = this.lanes[Math.trunc(Math.random() * this.lanes.length)];
    const whichItem: number = Math.random();
    if (whichItem < 0.1) {
      this.gameItems.push(new Key(randomLane));
    } else if (whichItem < 0.3) {
      this.gameItems.push(new Dynamite(randomLane));
    } else {
      this.gameItems.push(new ScoreItem(randomLane));
    }
  }

  public nextLevel(canvas: HTMLCanvasElement): Level | null {
    if(this.totalScore >= 2500) {
      return new Level5(this.maxX, this.maxY, this.totalScore);
    }
    if(this.totalScore < 0) {
      return new Level1(this.maxX, this.maxY);
    }
    return null;
  }
}
