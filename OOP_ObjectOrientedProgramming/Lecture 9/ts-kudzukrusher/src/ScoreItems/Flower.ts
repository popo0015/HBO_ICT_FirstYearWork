import CanvasRenderer from '../CanvasRenderer.js';
import ScoreItem from './ScoreItem.js';

export default class Flower extends ScoreItem {
  private timeToNextChange: number;

  public constructor(maxX: number, maxY: number) {
    super();
    this.timeToNextChange = ((Math.random() * 5) + 10) * 1000;
    this.posX = maxX;
    this.posY = maxY;
    this.image = CanvasRenderer.loadNewImage('./assets/flower_0.png');
  }

  /**
   * calculates the time before another flower changes
   * @param elapsed the time between flower change
   */
  public override update(elapsed: number): void {
    this.timeToNextChange -= elapsed;
    if (this.timeToNextChange <= 0) {
      this.timeToNextChange = ((Math.random() * 5) + 10) * 1000;
      this.count += 1;

      if (this.count < 4) {
        this.image = CanvasRenderer.loadNewImage(`./assets/flower_${this.count}.png`);
      }
    }
  }
}
