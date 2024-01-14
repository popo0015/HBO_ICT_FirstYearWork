import Dynamite from './Dynamite.js';
import Key from './Key.js';
import Level from './Level.js';
import Level1 from './Level1.js';
import Level4 from './Level4.js';
import ScoreItem from './ScoreItem.js';

export default class Level3 extends Level {
  public constructor(maxX: number, maxY: number, startScore: number) {
    super(maxX, maxY, startScore);
    this.lanes = [85, 210, 335, 460];
    this.levelCount = 3;
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
    if(this.totalScore >= 1500) {
      return new Level4(this.maxX, this.maxY, this.totalScore);
    }
    if(this.totalScore < 0) {
      return new Level1(this.maxX, this.maxY);
    }
    return null;
  }
}
