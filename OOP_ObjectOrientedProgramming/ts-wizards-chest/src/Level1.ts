import Level from './Level.js';
import Level2 from './Level2.js';
import ScoreItem from './ScoreItem.js';

export default class Level1 extends Level {
  public constructor(maxX: number, maxY: number) {
    super(maxX, maxY, 0);
    this.lanes = [160, 285, 410];
    this.levelCount = 1;
  }

  protected override spawnNewItem(): void {
    const randomLane: number = this.lanes[Math.trunc(Math.random() * this.lanes.length)];
    this.gameItems.push(new ScoreItem(randomLane));
  }

  public nextLevel(canvas: HTMLCanvasElement): Level | null {
    if(this.totalScore >= 500) {
      return new Level2(this.maxX, this.maxY, this.totalScore);
    }
    if(this.totalScore < 0) {
      return new Level1(this.maxX, this.maxY);
    }
    return null;
  }
}
