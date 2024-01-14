import { Game } from './GameLoop.js';

import CanvasRenderer from './CanvasRenderer.js';
import KeyListener from './KeyListener.js';
import Meteor from './Meteor.js';
import Shield from './Shield.js';
import Player from './Player.js';
import ScoreItem from './ScoreItem.js';

export default class SpaceEscape extends Game {
  private canvas: HTMLCanvasElement;

  private player: Player;

  private items: ScoreItem[];

  private keyListener: KeyListener;

  private shieldsLeft: number;

  private timeElapsed: number;

  private timeToNextItem: number;

  private count: number;

  public constructor(canvas: HTMLCanvasElement) {
    super();
    this.canvas = canvas;
    this.canvas.height = window.innerHeight;
    this.canvas.width = window.innerWidth;

    this.keyListener = new KeyListener();

    this.timeElapsed = 0;
    this.count = 0;
    this.timeToNextItem = Math.random() * 500;
    this.shieldsLeft = 20;

    this.items = [];

    for (let i: number = 0; i < 10; i++) {
      this.makeItem();
    }
    this.player = new Player(this.canvas.width, this.canvas.height);
  }

  /**
   * Create a new item to fly through space.
   *
   * It can either be a new power up or a new meteor, depending on random chance.
   */
  private makeItem(): void {
    if (Math.random() > 0.2) {
      this.items.push(new Meteor(this.canvas.width));
    } else {
      this.items.push(new Shield(this.canvas.width));
    }
  }

  /**
   * Process all input. Called from the GameLoop.
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
   * Update game state. Called from the GameLoop
   *
   * @param elapsed time elapsed from the GameLoop
   * @returns true if the game should continue
   */
  public update(elapsed: number): boolean {
    this.timeElapsed += elapsed;
    this.count += elapsed;
    if (Number((this.count % 1500).toFixed(0)) > 1483) { // 1483 = 1500 - elapsed
      this.shieldsLeft -= 1;
    }

    this.items.forEach((item) => item.update(elapsed));
    this.player.update();

    if (this.player.getPosY() < 0) {
      this.player.setPosY(this.player.getMaxY() - (this.player.getHeight()));
    }
    if (this.player.getPosY() + (this.player.getHeight()) > this.player.getMaxY()) {
      this.player.setPosY(0);
    }

    this.items = this.items.filter((item: ScoreItem) => {
      if (this.player.isCollidingItem(item)) {
        this.shieldsLeft += item.getShieldModifier();
        return false;
      }
      return (item.getPosY() < this.canvas.width);
    });

    this.timeToNextItem -= elapsed;
    if (this.timeToNextItem < 0) {
      this.makeItem();
      this.timeToNextItem = Math.random() * 500;
    }

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

    this.items.forEach((item) => item.render(this.canvas));
    this.player.render(this.canvas);

    CanvasRenderer.writeText(this.canvas, `Score: ${this.shieldsLeft.toFixed(0)}`, 10, 45, 'left', 'Arial', 32, 'white');
    CanvasRenderer.writeText(this.canvas, `Time: ${Math.round(this.timeElapsed / 1000).toString()}`, 10, 85, 'left', 'Arial', 32, 'white');

    if (this.isGameOver()) {
      CanvasRenderer.writeText(this.canvas, 'Game Over', this.canvas.width / 2, this.canvas.height / 2, 'center', 'Arial', 60, 'cyan');
    }
  }
}
