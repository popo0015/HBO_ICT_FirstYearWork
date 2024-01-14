import CanvasRenderer from './CanvasRenderer.js';
import ScoreItem from './ScoreItem.js';

export default class Capsule extends ScoreItem {
  public constructor(canvas: HTMLCanvasElement) {
    super();
    this.canvas = canvas;

    this.image = CanvasRenderer.loadNewImage('./assets/capsule.png');

    this.posX = 0 - this.image.width;
    this.posY = Math.random() * canvas.height;
    this.speed = 0.3;
    this.speedUpwords = 0.03;
    this.score = 100;
  }
}
