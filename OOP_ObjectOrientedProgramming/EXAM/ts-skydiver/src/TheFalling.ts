import Game from './Game.js';

import CanvasRenderer from './CanvasRenderer.js';
import KeyListener from './KeyListener.js';
import Player from './Player.js';
import LightItem from './LightItem.js';
import Orb from './Orb.js';
import Monster from './Monster.js';
import Cloak from './Cloak.js';

export default class TheFalling extends Game {
  private canvas: HTMLCanvasElement;

  private keyListener: KeyListener;

  private timeToNextItem: number;

  private player: Player;

  private lightForce: number;

  private monstersCaught: number;

  private lightForceTime: number;

  private lightItem: LightItem[];

  private gameOver: boolean;

  private hasTeleported: boolean;

  private cloakActive: boolean;

  private cloakCounter: number;

  private cloakCounterCircles: number;

  public constructor(canvas: HTMLCanvasElement) {
    super();
    this.canvas = canvas;
    this.canvas.height = window.innerHeight;
    this.canvas.width = window.innerWidth;
    this.keyListener = new KeyListener();

    this.monstersCaught = 0;
    this.lightForce = 10;
    this.lightForceTime = 1000;
    this.timeToNextItem = Math.random() * 300 + 300;

    this.player = new Player(canvas);
    this.lightItem = [];
    this.hasTeleported = false;
    this.cloakActive = false;
    this.cloakCounter = 1000;
    this.cloakCounterCircles = 15;

    this.gameOver = false;
  }

  /**
   * Process the input from the user
   */
  public processInput(): void {
    if (this.keyListener.isKeyDown(KeyListener.KEY_LEFT)) {
      this.player.moveLeft();
    }
    if (this.keyListener.isKeyDown(KeyListener.KEY_RIGHT)) {
      this.player.moveRight();
    }
  }

  /**
   * trial for checking to see if there is a cloak already spawned on the screen
   * doesn't work
   * no cloaks spawn at all
   * @returns true is there is no cloak || false if there is a cloak
   */
  // public noCloakOnScreen(): boolean {
  //   for (let i: number = 0; i < this.lightItem.length; i++) {
  //     if (this.lightItem[i] instanceof Cloak) {
  //       return true;
  //     }
  //   }
  //   return false;
  // }

  /**
   * Update state of the game
   *
   * @param elapsed milliseconds since last update
   * @returns whether the game is still running
   */
  public update(elapsed: number): boolean {
    this.timeToNextItem -= elapsed;
    this.lightForceTime -= elapsed;

    this.player.update(elapsed);
    this.lightItem.forEach((item: LightItem) => {
      item.update(elapsed);
      if (item.getPosY() < 300 && Math.random() > 0.8 && this.hasTeleported === false) {
        if (item instanceof Monster) {
          item.teleport(this.canvas.width, this.canvas.height);
          this.hasTeleported = true;
        }
      }
    });

    if (this.timeToNextItem < 0) {
      this.timeToNextItem = Math.random() * 300 + 300;
      const randomNumber: number = Math.random() * 1.05;
      if (randomNumber > 0.35) {
        this.lightItem.push(new Orb(this.canvas.width, this.canvas.height));
      } else if (randomNumber > 0.05) {
        this.lightItem.push(new Monster(this.canvas.width, this.canvas.height));
      } else {
        this.lightItem.push(new Cloak(this.canvas.width, this.canvas.height));
        // if (this.noCloakOnScreen()) {
        //   this.lightItem.push(new Cloak(this.canvas.width, this.canvas.height));
        // }
      }
    }

    if (this.lightForceTime < 0) {
      this.lightForce -= 1;
      this.lightForceTime = 1000;
    }

    this.lightItem = this.lightItem.filter((item: LightItem) => {
      if (this.cloakActive === true) {
        this.cloakCounter -= elapsed;
        if (item instanceof Orb && this.player.isColliding(item)) {
          this.lightForce += item.getLightForce();
          return false;
        }
        if (this.player.isColliding(item) && item instanceof Cloak) {
          this.cloakCounterCircles += 15;
          return false;
        }
        if (this.cloakCounter <= 0) {
          this.cloakCounterCircles -= 1;
          this.cloakCounter = 7300;
          if (this.cloakCounterCircles === 0) {
            this.cloakActive = false;
            this.cloakCounterCircles = 15;
          }
        }
      } else {
        if (this.player.isColliding(item)) {
          if (item instanceof Cloak) {
            this.cloakActive = true;
          } else {
            this.lightForce += item.getLightForce();
          }
          return false;
        }
      }
      if (item.getPosY() + item.getHeight() < 0) {
        return false;
      }
      return true;
    });

    if (this.lightForce <= 0 || this.monstersCaught >= 10) {
      this.gameOver = true;
      return false;
    } else {
      return true;
    }
  }

  /**
   * renders the game
   */
  public render(): void {
    CanvasRenderer.clearCanvas(this.canvas);
    this.player.render(this.canvas);
    this.lightItem.forEach((item: LightItem) => item.render(this.canvas));

    CanvasRenderer.writeText(this.canvas, `LightForce: ${this.lightForce}`, 20, 40, 'left', 'Arial', 30, 'white');
    CanvasRenderer.writeText(this.canvas, `Monsters: ${this.monstersCaught}`, 20, 80, 'left', 'Arial', 30, 'white');

    if (this.cloakActive) {
      CanvasRenderer.writeText(this.canvas, `Cloak counter: ${this.cloakCounterCircles}`, 20, 120, 'left', 'Arial', 30, 'white');
    }

    if (this.gameOver) {
      CanvasRenderer.writeText(this.canvas, 'Game Over', this.canvas.width / 2, this.canvas.height / 2, 'center', 'Arial', 50, 'white');
    }
  }
}
