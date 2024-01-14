import CanvasRenderer from '../CanvasRenderer.js';
import ScoreItem from './ScoreItem.js';

export default class Flower extends ScoreItem {
  private timeToNextChange: number;

  public constructor(maxX: number, maxY: number) {
    super();
    this.image = CanvasRenderer.loadNewImage('./assets/flower_0.png');
    this.posX = Math.random() * maxX;
    this.posY = Math.random() * maxY;
    this.score = -1;
    this.timeToNextChange = 10000 + (Math.random() * 5000);
  }

  /**
   * Update the flower
   * @param elapsed elapsed ms since last update
   */
  public update(elapsed: number): void {
    this.timeToNextChange -= elapsed;
    if (this.timeToNextChange < 0) {
      this.timeToNextChange = 10000 + (Math.random() * 5000);
      if (this.score === -1) {
        this.score = -3;
        this.image = CanvasRenderer.loadNewImage('./assets/flower_1.png');
      } else if (this.score === -3) {
        this.score = -5;
        this.image = CanvasRenderer.loadNewImage('./assets/flower_2.png');
      } else if (this.score === -5) {
        this.score = -7;
        this.image = CanvasRenderer.loadNewImage('./assets/flower_3.png');
      }
    }
  }
}
