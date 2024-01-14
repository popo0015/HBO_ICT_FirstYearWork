import CanvasRenderer from './CanvasRenderer.js';
import GameItem from './GameItem.js';

export default class Key extends GameItem {
  public constructor(posX: number) {
    super();
    this.posX = posX;
    this.posY = 0;
    this.speed = 0.3;
    this.image = CanvasRenderer.loadNewImage('./assets/key.png');
  }
}
