import CanvasRenderer from './CanvasRenderer.js';

import Meteor from './Meteor.js';
import ScoreItem from './ScoreItem.js';
import Shield from './Shield.js';

export default class Player {
  private posX: number;

  private posY: number;

  private image: HTMLImageElement;

  private maxY: number;

  private accelerate: number = 0.25;

  private accelerateUp: boolean = false;

  private accelerateDown: boolean = false;

  public constructor(maxX: number, maxY: number) {
    this.image = CanvasRenderer.loadNewImage('assets/ship.png');
    this.posX = 40;
    this.posY = maxY / 2;
    this.maxY = maxY;
  }

  /**
   * Test whether the fruit collides with the player
   *
   * @param item The item to test for
   * @returns true if the fruit has indeed collided.
   */
  public isCollidingItem(item: ScoreItem): boolean {
    return (item.getPosX() + item.getWidth() > this.posX
      && item.getPosX() < this.posX + this.image.width
      && item.getPosY() + item.getHeight() > this.posY
      && item.getPosY() < this.posY + this.image.height);
  }

  /**
   * Sets a flag that the player is going to move left
   */
  public moveUp(): void {
    this.accelerateUp = true;
    this.accelerateDown = false;
    if (this.accelerate <= 12) {
      this.accelerate += 0.25;
    }
  }

  /**
   * Sets a flag that the player is going to move right
   */
  public moveDown(): void {
    this.accelerateUp = false;
    this.accelerateDown = true;
    if (this.accelerate >= -12) {
      this.accelerate -= 0.25;
    }
  }

  /**
   * updates the player
   */
  public update(): void {
    this.posY -= this.accelerate;
  }

  public getPosY(): number {
    return this.posY;
  }

  public setPosY(number: number): number {
    this.posY = number;
    return this.posY;
  }

  public getPosX(): number {
    return this.posX;
  }

  public getWidth(): number {
    return this.image.width;
  }

  public getHeight(): number {
    return this.image.height;
  }

  public getMaxY(): number {
    return this.maxY;
  }

  /**
   * Render the GameItem to the canvas
   *
   * @param canvas canvas to render the GameItem to
   */
  public render(canvas: HTMLCanvasElement): void {
    CanvasRenderer.drawImage(canvas, this.image, this.posX, this.posY);
  }
}
