import CanvasRenderer from '../CanvasRenderer.js';
import GameItem from './GameItem.js';

export default class Dynamite extends GameItem {
  public constructor(posX: number) {
    super();
    this.posX = posX;
    this.posY = 0;
    this.image = CanvasRenderer.loadNewImage('./assets/dynamite.png');

    this.speed = 0.1;
  }

  /**
   * Overrides the update method to increase the speed of the dynamite
   *
   * @param elapsed The ms elapsed since the last update
   */
  public override update(elapsed: number): void {
    super.update(elapsed);
    this.speed *= 1.0005 ** elapsed;
  }
}
