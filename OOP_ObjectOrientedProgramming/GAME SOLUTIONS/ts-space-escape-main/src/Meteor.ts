import CanvasRenderer from './CanvasRenderer.js';
import ScoreItem from './ScoreItem.js';

export default class Meteor extends ScoreItem {
  public constructor(maxX: number, maxY: number) {
    super();
    this.posX = maxX;
    this.posY = (Math.random() * maxY);

    let image: string;
    const randomColour: string = (['brown', 'grey'])[Math.floor(Math.random() * 2)];
    const randomSize: number = Math.random();

    if (randomSize > 0.9) {
      image = `./assets/meteor_${randomColour}_big.png`;
      this.speed = 0.04 + (Math.random() * 0.1);
      this.shieldModifier = -5;
    } else {
      image = `./assets/meteor_${randomColour}_small.png`;
      this.speed = 0.2 + (Math.random() * 0.1);
      this.shieldModifier = -1;
    }
    this.image = CanvasRenderer.loadNewImage(image);
  }

  /**
   * Update speed of meteor
   * Update position of meteor
   *
   * @param elapsed the elapsed time from the Game
   */
  public update(elapsed: number): void {
    this.speed *= 1.0002 ** elapsed;
    this.posX -= elapsed * this.speed;
  }
}
