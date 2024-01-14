import Game from './Game.js';

import CanvasRenderer from './CanvasRenderer.js';
import KeyListener from './KeyListener.js';
import Player from './Player.js';
import CanvasItem from './CanvasItem.js';
import Waste from './Waste.js';
import Fish from './Fish.js';
import ScoreItem from './ScoreItem.js';
import Capsule from './Capsule.js';

export default class OceanCleanup extends Game {
  private canvas: HTMLCanvasElement;

  private keyListener: KeyListener;

  private player: Player;

  private timeToNext: number;

  private fishCaught: number;

  private score: number;

  private scoreItem: ScoreItem[];

  private gameOver: boolean;

  public constructor(canvas: HTMLCanvasElement) {
    super();
    this.canvas = canvas;
    this.canvas.height = window.innerHeight;
    this.canvas.width = window.innerWidth;

    this.keyListener = new KeyListener();
    this.player = new Player(canvas);
    this.scoreItem = [];

    this.timeToNext = Math.random() * 3 + 300;
    this.score = 0;
    this.fishCaught = 0;
    this.gameOver = false;
  }

  /**
   * creates a new ScoreItem
   */
  public makeItem(): void {
    if (Math.random() > 0.7) {
      this.scoreItem.push(new Waste(this.canvas));
    } else {
      this.scoreItem.push(new Fish(this.canvas));
    }
    if (Math.random() < 0.05) {
      this.scoreItem.push(new Capsule(this.canvas));
    }
  }

  /**
   * Process user input
   */
  public processInput(): void {
    if (this.keyListener.isKeyDown(KeyListener.KEY_UP)) {
      this.player.moveUp();
    }
    if (this.keyListener.isKeyDown(KeyListener.KEY_DOWN)) {
      this.player.moveDown();
    }
  }

  /**
   * Update called from the game loop
   * @param elapsed ms since last update
   * @returns whether the game should continue
   */
  public update(elapsed: number): boolean {
    this.timeToNext -= elapsed;

    this.player.update(elapsed);
    this.scoreItem.forEach((item: ScoreItem) => item.update(elapsed));

    if (this.timeToNext < 0) {
      this.makeItem();
      this.timeToNext = Math.random() * 3 + 300;
    }

    for (let i: number = 0; i < this.scoreItem.length; i++) {
      if (this.player.isColliding(this.scoreItem[i])) {
        this.score += this.scoreItem[i].getScore();
        if (this.scoreItem[i] instanceof Capsule) {
          for (let j: number = 0; j < this.scoreItem.length; j++) {
            if (this.scoreItem[j] instanceof Waste) {
              this.scoreItem.splice(j, 1);
            }
          }
        }
        if (this.scoreItem[i] instanceof Fish) {
          this.fishCaught += 1;
        }
        this.scoreItem.splice(i, 1);
      }
      if (this.scoreItem[i].getPosX() > this.canvas.width) {
        this.scoreItem.splice(i, 1);
      }

      if (this.scoreItem[i] instanceof Waste
        && this.scoreItem[i].getPosX() > 400
        && this.scoreItem[i].getPosX() < 450) {
        if (Math.random() < 0.1) {
          this.scoreItem[i].changeToSludge();
        }
      }
    }

    if (this.score < 0 || this.fishCaught >= 10) {
      this.gameOver = true;
      return false;
    }

    return true;
  }

  /**
   * Render called from the game loop
   */
  public render(): void {
    CanvasRenderer.clearCanvas(this.canvas);

    if (this.gameOver) {
      CanvasRenderer.writeText(this.canvas, 'Game Over', this.canvas.width / 2, this.canvas.height / 2, 'center', 'Arial', 80, 'cyan');
    }

    this.player.render(this.canvas);
    this.scoreItem.forEach((item: CanvasItem) => item.render(this.canvas));

    CanvasRenderer.writeText(this.canvas, `Score ${this.score}`, 15, 40, 'left', 'Arial', 30, 'cyan');
    CanvasRenderer.writeText(this.canvas, `Fish caught ${this.fishCaught}`, 15, 80, 'left', 'Arial', 30, 'cyan');
  }
}
