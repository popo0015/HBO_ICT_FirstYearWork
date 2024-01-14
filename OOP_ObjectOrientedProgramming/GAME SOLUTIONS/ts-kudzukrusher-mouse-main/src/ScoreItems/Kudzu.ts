import CanvasRenderer from '../CanvasRenderer.js';
import ScoreItem from './ScoreItem.js';

export default class Kudzu extends ScoreItem {
  private maxX: number;

  private maxY: number;

  private speedX: number;

  private speedY: number;

  public constructor(maxX: number, maxY: number) {
    super();
    this.image = CanvasRenderer.loadNewImage('./assets/kudzu.png');
    this.posX = Math.random() * maxX;
    this.posY = Math.random() * maxY;

    this.maxX = maxX;
    this.maxY = maxY;
    this.speedX = (Math.random() * 2 - 1) / 10;
    this.speedY = (Math.random() * 2 - 1) / 10;
    this.score = 5;
  }

  /**
   * Update the kudzu
   * @param elapsed elapsed ms since last update
   */
  public update(elapsed: number): void {
    this.posX += this.speedX * elapsed;
    this.posY += this.speedY * elapsed;
    if (this.posX < 0 - this.image.width) {
      this.posX = this.maxX;
    }
    if (this.posX > this.maxX) {
      this.posX = 0;
    }
    if (this.posY < 0 - this.image.height) {
      this.posY = this.maxY;
    }
    if (this.posY > this.maxY) {
      this.posY = 0;
    }
  }
}
