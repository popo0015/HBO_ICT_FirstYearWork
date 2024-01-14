import CanvasRenderer from './CanvasRenderer.js';
import LightItem from './LightItem.js';

export default class Orb extends LightItem {
  public constructor(maxX: number, maxY: number) {
    super();
    this.speed = 0.2;
    this.cloakDiagonal = 0;

    const randomNumber: number = Math.random();
    if (randomNumber > 0.67) {
      this.image = CanvasRenderer.loadNewImage('./assets/orb1.png');
      this.lightForce = 1;
    } else if (randomNumber > 0.34) {
      this.image = CanvasRenderer.loadNewImage('./assets/orb2.png');
      this.lightForce = 3;
    } else {
      this.image = CanvasRenderer.loadNewImage('./assets/orb3.png');
      this.lightForce = 5;
    }

    this.posX = (Math.random() * maxX - this.image.width) + this.image.width;
    this.posY = maxY;
  }
}
