import Player from './Player.js';
import GameItem from './GameItem.js';
import KeyListener from './KeyListener.js';
import CanvasRenderer from './CanvasRenderer.js';
import ScoreItem from './ScoreItem.js';
import Key from './Key.js';
import Dynamite from './Dynamite.js';
import Bomb from './Bomb.js';
import Level1 from './Level1.js';

export default abstract class Level {
  protected player: Player;

  protected gameItems: GameItem[];

  protected currentLane: number;

  protected lanes: number[];

  protected timeToNextItem: number;

  protected maxX: number;

  protected maxY: number;

  protected totalScore: number;

  protected levelCount: number;

  private canvas: HTMLCanvasElement;

  public constructor(maxX: number, maxY: number, startScore: number) {
    this.maxX = maxX;
    this.maxY = maxY;
    this.totalScore = startScore;

    this.lanes = [];
    this.gameItems = [];
    this.timeToNextItem = 500;

    // TODO: initialize the player in the first or in the second line
    // Do that for each level
    // maybe we can do that in the StartLevel funtion
  }

  public startLevel(): void {
    this.currentLane = 1;
    this.player = new Player(this.lanes[1], this.maxY);
  }

  public update(elapsed: number): void | Level {
    this.gameItems.forEach((item: GameItem) => item.update(elapsed));

    const newGameItems: GameItem[] = [];
    for (let i: number = 0; i < this.gameItems.length; i++) {
      const currentItem: GameItem = this.gameItems[i];
      if (currentItem.getPosY() > this.maxY) {
        continue;
      }
      if (this.player.isCollidingWithItem(this.gameItems[i])) {
        if (currentItem instanceof ScoreItem && this.player.getChestOpen()) {
          this.totalScore += this.gameItems[i].getScore();
          continue;
        }
        if (currentItem instanceof Key) {
          this.player.toggleOpen();
          continue;
        }
        if (currentItem instanceof Dynamite && this.player.getChestOpen()) {
          this.totalScore = 0;
          continue;
        }
        if (currentItem instanceof Bomb && this.player.getChestOpen()) {
          this.totalScore = -1000;
          continue;
          // return new Level1(this.maxX, this.maxY);
        }
      }
      newGameItems.push(currentItem);
    }
    this.gameItems = newGameItems;

    this.timeToNextItem -= elapsed;
    if (this.timeToNextItem <= 0) {
      this.spawnNewItem();
      this.timeToNextItem = 500;
    }
  }

  protected abstract spawnNewItem(): void;

  public abstract nextLevel(canvas: HTMLCanvasElement): Level | null;

  public processInput(keyListener: KeyListener): void {
    if (keyListener.keyPressed(KeyListener.KEY_LEFT)) {
      if (this.currentLane > 0) {
        this.currentLane -= 1;
        const newPosX: number = this.lanes[this.currentLane];
        this.player.move(newPosX);
      }
    }
    if (keyListener.keyPressed(KeyListener.KEY_RIGHT)) {
      if (this.currentLane < this.lanes.length - 1) {
        this.currentLane += 1;
        const newPosX: number = this.lanes[this.currentLane];
        this.player.move(newPosX);
      }
    }
  }

  public render(canvas: HTMLCanvasElement): void {
    this.canvas = canvas;
    this.player.render(canvas);
    this.gameItems.forEach((item: GameItem) => item.render(canvas));

    CanvasRenderer.writeText(canvas, `Score: ${this.totalScore}`, 80, 50, 'left', 'Monospace', 30, 'cyan');
    CanvasRenderer.writeText(canvas, `Level: ${this.levelCount}`, 440, 50, 'left', 'Monospace', 30, 'cyan');
  }
}
