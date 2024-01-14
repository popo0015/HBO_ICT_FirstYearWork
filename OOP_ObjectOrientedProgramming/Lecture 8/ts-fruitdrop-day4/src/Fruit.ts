import CanvasRenderer from './CanvasRenderer.js';
import ScoreItem from './ScoreItem.js';

export default class Fruit extends ScoreItem {
  private speed: number = 0.15;

  public constructor(maxX: number) {
    super(maxX);
    const random: number = Math.random();
    if (random > 0.9) {
      this.image = CanvasRenderer.loadNewImage('./assets/fruit-cherries.png');
      this.score = 10;
    } else if (random > 0.7) {
      this.image = CanvasRenderer.loadNewImage('./assets/fruit-strawberry.png');
      this.score = 7;
    } else if (random > 0.4) {
      this.image = CanvasRenderer.loadNewImage('./assets/fruit-orange.png');
      this.score = 5;
    } else if (random > 0.2) {
      this.image = CanvasRenderer.loadNewImage('./assets/fruit-grapes.png');
      this.score = 3;
    } else {
      this.image = CanvasRenderer.loadNewImage('./assets/fruit-banana.png');
      this.score = 1;
    }
  }

  /**
   * Update the position of the fruit. The fruit will start accelerating.
   *
   * @param elapsed elapsed time from the game
   */
  public override update(elapsed: number): void {
    this.speed *= 1.0003 ** elapsed;
    this.posY += elapsed * this.speed;
  }
}
