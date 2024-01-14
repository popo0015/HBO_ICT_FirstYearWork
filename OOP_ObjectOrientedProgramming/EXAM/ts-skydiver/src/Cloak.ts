import CanvasRenderer from './CanvasRenderer.js';
import LightItem from './LightItem.js';

export default class Cloak extends LightItem {
  public constructor(maxX: number, maxY: number) {
    super();
    this.speed = Math.random() * 0.2 + 0.1;
    if (Math.random() > 0.5) {
      this.cloakDiagonal = 0.02;
    } else {
      this.cloakDiagonal = -0.02;
    }

    this.image = CanvasRenderer.loadNewImage('./assets/cloak.png');

    this.posX = (Math.random() * maxX - this.image.width) + this.image.width;
    this.posY = maxY;
  }
}
