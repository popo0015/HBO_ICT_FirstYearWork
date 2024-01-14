import Key from './Key.js';
import Level from './Level.js';
import Level1 from './Level1.js';
import Level3 from './Level3.js';
import ScoreItem from './ScoreItem.js';

export default class Level2 extends Level {
  public constructor(maxX: number, maxY: number, startScore: number) {
    super(maxX, maxY, startScore);
    this.lanes = [160, 285, 410];
    this.levelCount = 2;
  }

  protected override spawnNewItem(): void {
    const randomLane: number = this.lanes[Math.trunc(Math.random() * this.lanes.length)];
    const whichItem: number = Math.random();
    if (whichItem > 0.9) {
      this.gameItems.push(new Key(randomLane));
    } else {
      this.gameItems.push(new ScoreItem(randomLane));
    }
  }

  public nextLevel(canvas: HTMLCanvasElement): Level | null {
    if(this.totalScore >= 1000) {
      return new Level3(this.maxX, this.maxY, this.totalScore);
    }
    if(this.totalScore < 0) {
      return new Level1(this.maxX, this.maxY);
    }
    return null;
  }
}
