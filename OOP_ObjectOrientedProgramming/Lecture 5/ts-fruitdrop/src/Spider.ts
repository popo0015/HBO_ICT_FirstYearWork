import CanvasRenderer from './CanvasRenderer.js';

export default class Spider {
  private image: HTMLImageElement;

  private score: number = 0;

  private posX: number;

  private posY: number;

  public constructor(maxX: number) {
    const spiderIndex: number = Math.floor(Math.random() * 100);
    if (spiderIndex <= 10) {
      this.image = CanvasRenderer.loadNewImage('assets/spider01.png');
      this.score -= 5;
    } else if (spiderIndex <= 30) {
      this.image = CanvasRenderer.loadNewImage('assets/spider02.png');
      this.score -= 3;
    } else if (spiderIndex <= 60) {
      this.image = CanvasRenderer.loadNewImage('assets/spider03.png');
      this.score -= 2;
    } else if (spiderIndex <= 100) {
      this.image = CanvasRenderer.loadNewImage('assets/spider04.png');
      this.score -= 1;
    }

    // make a few fruit drop - random fruit (picks a number and then its coressponding fruit)
    this.posX = Math.random() * maxX;
    this.posY = 0;
  }

  public getPostX(): number {
    return this.posX;
  }

  public getPostY(): number {
    return this.posY;
  }

  public getWidth(): number {
    return this.image.width;
  }

  public getHeight(): number {
    return this.image.height;
  }

  public getScore(): number {
    return this.score;
  }

  /**
   *
   * @param elapsed - gets the time span
   */
  public update(elapsed: number): void {
    this.posY += 0.1 * elapsed;
  }

  /**
   * Renders the fruit
   * @param canvas - the canvas HTML element
   */
  public render(canvas: HTMLCanvasElement): void {
    CanvasRenderer.drawImage(canvas, this.image, this.posX, this.posY);
  }
}
