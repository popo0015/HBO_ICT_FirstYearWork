import { Game } from './GameLoop.js';

import CanvasRenderer from './CanvasRenderer.js';
import KeyListener from './KeyListener.js';
import Shield from './Shield.js';
import Player from './Player.js';
import Meteor from './Meteor.js';
import ScoreItem from './ScoreItem.js';

export default class SpaceEscape extends Game {
  private canvas: HTMLCanvasElement;

  private scoreItems: ScoreItem[];

  private player: Player;

  private keyListener: KeyListener;

  private shieldsLeft: number;

  private timeElapsed: number;

  private timeToNext: number;

  private timeToNextCounter: number;

  private nextShieldDrop: number;

  private gamePaused: boolean;

  public constructor(canvas: HTMLCanvasElement) {
    super();
    this.canvas = canvas;
    this.canvas.height = window.innerHeight;
    this.canvas.width = window.innerWidth;
    this.keyListener = new KeyListener();

    this.shieldsLeft = 20;
    this.timeElapsed = 0;

    this.timeToNext = Math.random() * 500;
    this.timeToNextCounter = 1000;

    this.nextShieldDrop = 1000;

    this.scoreItems = [];
    this.player = new Player(this.canvas.width, this.canvas.height);

    this.gamePaused = false;
  }

  /**
   * Create a new item to fly through space.
   *
   * It can either be a new power up or a new meteor, depending on random chance.
   */
  private makeItem(): void {
    if (Math.random() > 0.8) {
      this.scoreItems.push(new Shield(this.canvas.width, this.canvas.height));
    } else this.scoreItems.push(new Meteor(this.canvas.width, this.canvas.height));
  }

  /**
   * Process all input. Called from the GameLoop.
   */
  public processInput(): void {
    if (this.keyListener.keyPressed(KeyListener.KEY_P)) {
      this.gamePaused = !this.gamePaused;
    }
    if (!this.gamePaused) {
      if (this.keyListener.isKeyDown(KeyListener.KEY_UP)) this.player.moveUp();
      if (this.keyListener.isKeyDown(KeyListener.KEY_DOWN)) this.player.moveDown();
    }
  }

  /**
   * Update game state. Called from the GameLoop
   *
   * @param elapsed time elapsed from the GameLoop
   * @returns true if the game should continue
   */
  public update(elapsed: number): boolean {
    // If the game is paused, don't update anything
    if (this.gamePaused) return true;

    // Update the time elapsed
    this.timeElapsed += elapsed;

    // Update the player and all the items
    this.player.update(elapsed);
    this.scoreItems.forEach((item: ScoreItem) => item.update(elapsed));

    // Loop through all the items and check if they collide with the player
    // Remove all items that are out of the screen
    this.scoreItems = this.scoreItems.filter((item: ScoreItem) => {
      if (this.player.itemCollided(item)) {
        this.shieldsLeft += item.getShieldValue();
        return false;
      }
      return (item.getPosX() > 0);
    });

    // Create a new item if it is time to do so
    this.timeToNext -= elapsed;
    if (this.timeToNext < 0) {
      this.makeItem();
      this.timeToNext = (Math.random() * 300) + this.timeToNextCounter;
      this.timeToNextCounter *= 0.975;
    }

    // Drop a shield if it is time to do so
    this.nextShieldDrop -= elapsed;
    if (this.nextShieldDrop < 0) {
      this.shieldsLeft -= 1;
      this.nextShieldDrop = (1000 + Math.random() * 500);
    }

    // Return true if the game should continue
    return !this.isGameOver();
  }

  /**
   * Tests conditions whether game is over. If time left is less than 0
   *
   * @returns True if game is over
   */
  private isGameOver(): boolean {
    return (this.shieldsLeft <= 0);
  }

  /**
   * Render all the elements in the screen. Called from GameLoop
   */
  public render(): void {
    CanvasRenderer.clearCanvas(this.canvas);

    // Render the player and all the items
    this.player.render(this.canvas);
    this.scoreItems.forEach((item) => item.render(this.canvas));

    // Render the score and time left
    if (this.isGameOver()) {
      CanvasRenderer.writeText(this.canvas, 'Game Over', this.canvas.width / 2, this.canvas.height / 2, 'center', 'Arial', 60, 'white');
    }

    // Render the pause text if the game is paused
    if (this.gamePaused) {
      CanvasRenderer.writeText(this.canvas, 'GAME PAUSED', this.canvas.width / 2, this.canvas.height / 2, 'center', 'Arial', 60, 'white');
    }
    CanvasRenderer.writeText(this.canvas, `Shields: ${this.shieldsLeft}`, 10, 45, 'left', 'Arial', 32, 'white');
    CanvasRenderer.writeText(this.canvas, `Time: ${Math.ceil(this.timeElapsed / 1000)}`, 10, 85, 'left', 'Arial', 32, 'white');
  }
}
