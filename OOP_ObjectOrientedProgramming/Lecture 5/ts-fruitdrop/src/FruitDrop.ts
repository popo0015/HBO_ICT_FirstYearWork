import { Game } from './GameLoop.js';

import CanvasRenderer from './CanvasRenderer.js';
import Fruit from './Fruit.js';
import Spider from './Spider.js';

export default class FruitDrop extends Game {
  private canvas: HTMLCanvasElement;

  private fruit: Fruit[];

  private spider: Spider[];

  private timeToNextItem: number;

  private timeElapsed: number = 0;

  private counterCalculation: number;

  public constructor(canvas: HTMLCanvasElement) {
    super();
    this.canvas = canvas;
    this.canvas.height = window.innerHeight;
    this.canvas.width = window.innerWidth;

    this.fruit = []; // initialize an array
    this.spider = [];

    this.timeToNextItem = 300;
  }

  /**
   * Make a new item that falls from the screen.
   */
  private makeItem(): void {
    if (this.timeToNextItem < 0) {
      const percentage: number = Math.floor(Math.random() * 100);
      if (percentage <= 10) {
        this.spider.push(new Spider(this.canvas.width));
      } else if (percentage <= 100) {
        this.fruit.push(new Fruit(this.canvas.width));
      }
      this.timeToNextItem = 300;
    }
  }

  /**
   * Process all input. Called from the GameLoop.
   */
  public processInput(): void {

  }

  /**
   * Update game state. Called from the GameLoop
   *
   * @param elapsed time in ms elapsed from the GameLoop
   * @returns true if the game should continue
   */
  public update(elapsed: number): boolean {
    this.counterCalculation = (60 - (this.timeElapsed / 1000));
    this.timeToNextItem -= elapsed;
    this.timeElapsed += elapsed;
    this.makeItem();

    for (let i: number = 0; i < this.fruit.length; i++) {
      this.fruit[i].update(elapsed);
    }

    for (let i: number = 0; i < this.spider.length; i++) {
      this.spider[i].update(elapsed);
    }

    if (this.counterCalculation <= 0) {
      this.counterCalculation = 0;
      return false;
    } else {
      return true;
    }
  }

  /**
   * Tests conditions whether game is over. If time left is less than 0
   *
   * @returns True if game is over
   */
  private isGameOver(): boolean {
    return true;
  }

  /**
   * Render all the elements in the screen.
   */
  public render(): void {
    // Clear the canvas
    const counter: string = this.counterCalculation.toFixed(0).toString();
    CanvasRenderer.clearCanvas(this.canvas);

    for (let i: number = 0; i < this.fruit.length; i++) {
      this.fruit[i].render(this.canvas);
    }

    for (let i: number = 0; i < this.spider.length; i++) {
      this.spider[i].render(this.canvas);
    }

    CanvasRenderer.writeText(this.canvas, 'Score: ', 40, 100, 'left', 'Arial', 40, 'white');
    CanvasRenderer.writeText(this.canvas, 'write score here', 175, 102, 'left', 'Arial', 40, 'white');
    CanvasRenderer.writeText(this.canvas, 'Time: ', 40, 150, 'left', 'Arial', 40, 'white');
    CanvasRenderer.writeText(this.canvas, counter, 175, 152, 'left', 'Arial', 40, 'white');
  }
}
