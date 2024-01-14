import CanvasRenderer from './CanvasRenderer.js';

export default class Fruit {
  private image: HTMLImageElement;

  private score: number = 0;

  private posX: number;

  private posY: number;

  public constructor(maxX: number) {
    const fruitIndex: number = Math.floor(Math.random() * 100);
    if (fruitIndex <= 10) {
      this.image = CanvasRenderer.loadNewImage('assets/fruit-cherries.png');
      this.score += 10;
    } else if (fruitIndex <= 30) {
      this.image = CanvasRenderer.loadNewImage('assets/fruit-strawberry.png');
      this.score += 7;
    } else if (fruitIndex <= 60) {
      this.image = CanvasRenderer.loadNewImage('assets/fruit-orange.png');
      this.score += 5;
    } else if (fruitIndex <= 80) {
      this.image = CanvasRenderer.loadNewImage('assets/fruit-grapes.png');
      this.score += 3;
    } else if (fruitIndex <= 100) {
      this.image = CanvasRenderer.loadNewImage('assets/fruit-banana.png');
      this.score += 1;
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
    this.posY += 0.15 * elapsed;
  }

  /**
   * Renders the fruit
   * @param canvas - the canvas HTML element
   */
  public render(canvas: HTMLCanvasElement): void {
    CanvasRenderer.drawImage(canvas, this.image, this.posX, this.posY);
  }
}
