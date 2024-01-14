import CanvasRenderer from './CanvasRenderer.js';
import ScoreItem from './ScoreItem.js';

export default class Waste extends ScoreItem {
  public constructor(canvas: HTMLCanvasElement) {
    super();
    this.canvas = canvas;

    const random: number = Math.random();
    if (random > 0.67) {
      this.image = CanvasRenderer.loadNewImage('./assets/waste1.png');
      this.score = 10;
    } else if (random > 0.34) {
      this.image = CanvasRenderer.loadNewImage('./assets/waste2.png');
      this.score = 20;
    } else{
      this.image = CanvasRenderer.loadNewImage('./assets/waste3.png');
      this.score = 30;
    }

    this.posX = 0 - this.image.width;
    this.posY = Math.random() * canvas.height;
    this.speed = 0.3;
    this.speedUpwords = 0;
  }
}
