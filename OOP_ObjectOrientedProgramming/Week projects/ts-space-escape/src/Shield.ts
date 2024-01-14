import CanvasRenderer from './CanvasRenderer.js';
import ScoreItem from './ScoreItem.js';

export default class Shield extends ScoreItem {
  private accelerate: number = 0.5;

  public constructor(maxY: number) {
    super();
    const random: number = Math.random();
    if (random > 0.5) {
      this.image = CanvasRenderer.loadNewImage('./assets/shield_battery.png');
      this.shieldModifier = 3;
    } else {
      this.image = CanvasRenderer.loadNewImage('./assets/shield_bolt.png');
      this.shieldModifier = 3;
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
  }
}
