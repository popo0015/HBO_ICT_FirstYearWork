import CanvasRenderer from './CanvasRenderer.js';
import ScoreItem from './ScoreItem.js';

export default class Shield extends ScoreItem {
  public constructor(maxX: number, maxY: number) {
    super();
    this.posX = maxX;
    this.posY = (Math.random() * maxY);

    let image: string;
    const random: number = Math.random();
    if (random > 0.6) image = './assets/shield_battery.png';
    else image = './assets/shield_bolt.png';

    this.image = CanvasRenderer.loadNewImage(image);
    this.shieldModifier = 3;
  }

  /**
   * Update position of shield
   *
   * @param elapsed the elapsed time from the Game
   */
  public update(elapsed: number): void {
    this.posX -= elapsed * 0.2;
  }
}
