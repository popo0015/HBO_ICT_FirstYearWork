import CanvasRenderer from './CanvasRenderer.js';
import ScoreItem from './ScoreItem.js';

export default class Fish extends ScoreItem {
  public constructor(canvas: HTMLCanvasElement) {
    super();
    this.canvas = canvas;

    const random: number = Math.random();
    if (random > 0.5) {
      this.image = CanvasRenderer.loadNewImage('./assets/fish1.png');
      this.score = -5;
    } else if (random > 0.2) {
      this.image = CanvasRenderer.loadNewImage('./assets/fish2.png');
      this.score = -10;
    } else{
      this.image = CanvasRenderer.loadNewImage('./assets/fish3.png');
      this.score = -15;
    }

    this.posX = 0 - this.image.width;
    this.posY = Math.random() * canvas.height;
    this.speed = 0.2;
    this.speedUpwords = 0;
  }
}
