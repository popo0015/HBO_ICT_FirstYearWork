import CanvasRenderer from './CanvasRenderer.js';
import GameItem from './GameItem.js';

export default class Dynamite extends GameItem {
  public constructor(posX: number) {
    super();
    this.posX = posX;
    this.posY = 0;
    this.speed = 0.1;
    this.image = CanvasRenderer.loadNewImage('./assets/dynamite.png');
  }

  public override update(elapsed: number): void {
    super.update(elapsed);
    this.speed *= 1.005;
  }
}
