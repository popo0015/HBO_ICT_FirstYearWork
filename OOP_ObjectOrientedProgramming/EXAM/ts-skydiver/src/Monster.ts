import CanvasRenderer from './CanvasRenderer.js';
import LightItem from './LightItem.js';

export default class Monster extends LightItem {
  public constructor(maxX: number, maxY: number) {
    super();
    this.speed = Math.random() * 0.2 + 0.2;
    this.cloakDiagonal = 0;

    const randomNumber: number = Math.random();
    if (randomNumber > 0.5) {
      this.image = CanvasRenderer.loadNewImage('./assets/monster1.png');
      this.lightForce = -10;
    } else if (randomNumber > 0.2) {
      this.image = CanvasRenderer.loadNewImage('./assets/monster2.png');
      this.lightForce = -20;
    } else {
      this.image = CanvasRenderer.loadNewImage('./assets/monster3.png');
      this.lightForce = -30;
    }

    this.posX = (Math.random() * maxX - this.image.width) + this.image.width;
    this.posY = maxY;
  }

  /**
   * generates new position of the monster
   * @param maxX the canvas width
   * @param maxY the canvas height
   */
  public teleport(maxX: number, maxY: number): void {
    this.posX = Math.random() * maxX;
    this.posY = Math.random() * maxY;
  }
}
