import CanvasRenderer from '../CanvasRenderer.js';
import ScoreItem from './ScoreItem.js';

export default class Kudzu extends ScoreItem {
  private maxX: number;

  private maxY: number;

  private speedX: number;

  private speedY: number;

  public constructor(maxX: number, maxY: number) {
    super();
    this.maxX = maxX;
    this.maxY = maxY;
    this.image = CanvasRenderer.loadNewImage('./assets/kudzu.png');

    this.posX = Math.random() * window.innerWidth;
    this.posY = Math.random() * window.innerHeight;

    // change speed formula !
    this.speedX = (Math.random() - 0.5) / 5;
    this.speedY = (Math.random() - 0.5) / 5;
  }

  public override update(elapsed: number): void {
    this.posX += elapsed * this.speedX;
    this.posY += elapsed * this.speedY;

    if (this.posX <= 0) {
      this.posX = this.maxX - this.image.width;
    }
    if (this.posY <= 0) {
      this.posY = this.maxY - this.image.width;
    }
  }
}
