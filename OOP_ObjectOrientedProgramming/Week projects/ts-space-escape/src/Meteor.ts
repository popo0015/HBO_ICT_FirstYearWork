import CanvasRenderer from './CanvasRenderer.js';
import ScoreItem from './ScoreItem.js';

export default class Meteor extends ScoreItem {
  private accelerate: number = 0.15;

  public constructor(maxY: number) {
    super();
    const random: number = Math.random();
    if (random > 0.9) {
      this.image = CanvasRenderer.loadNewImage('./assets/meteor_brown_big.png');
      this.shieldModifier = -5;
    } else if (random > 0.8) {
      this.image = CanvasRenderer.loadNewImage('./assets/meteor_grey_big.png');
      this.shieldModifier = -5;
    } else if (random > 0.4) {
      this.image = CanvasRenderer.loadNewImage('./assets/meteor_brown_small.png');
      this.shieldModifier = -1;
    } else {
      this.image = CanvasRenderer.loadNewImage('./assets/meteor_grey_small.png');
      this.shieldModifier = -1;
    }
    this.posY = (Math.random() * maxY);
    this.posX = window.innerWidth;
  }

  /**
   * updates the position of the meteor
   * @param elapsed from the Game Loop
   */
  public override update(elapsed: number): void {
    this.posX -= elapsed * this.accelerate;
    this.accelerate *= 1.0003 ** elapsed;
  }
}
