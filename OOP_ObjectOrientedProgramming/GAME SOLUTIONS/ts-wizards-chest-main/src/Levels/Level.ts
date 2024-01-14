import CanvasRenderer from '../CanvasRenderer.js';
import KeyListener from '../KeyListener.js';
import Player from '../Player.js';
import GameItem from '../GameItems/GameItem.js';
import Dynamite from '../GameItems/Dynamite.js';
import Key from '../GameItems/Key.js';

export default abstract class Level {
  protected player: Player;

  protected gameItems: GameItem[];

  protected currentLane: number = 0;

  protected lanes: number[];

  protected timeToNextItem: number;

  protected score: number;

  protected maxX: number;

  protected maxY: number;

  protected abstract readonly LEVELNO: number;

  /**
   * Create a new instance of the level.
   *
   * @param maxX maximum X coordinate
   * @param maxY maximum Y coordinate
   * @param startScore starting score
   */
  public constructor(maxX: number, maxY: number, startScore: number = 0) {
    this.maxX = maxX;
    this.maxY = maxY;
    this.score = startScore;
    this.gameItems = [];
    this.lanes = [];
  }

  protected startLevel(): void {
    this.currentLane = 1;
    this.player = new Player(this.lanes[1], this.maxY);
  }

  /**
   * Process all input. Called from the GameLoop.
   *
   * @param keyListener keyListener to process input
   */
  public processInput(keyListener: KeyListener): void {
    if (keyListener.keyPressed(KeyListener.KEY_LEFT)) {
      if (this.currentLane > 0) {
        this.currentLane -= 1;
        this.player.move(this.lanes[this.currentLane]);
      }
    }
    if (keyListener.keyPressed(KeyListener.KEY_RIGHT)) {
      if (this.currentLane < this.lanes.length - 1) {
        this.currentLane += 1;
        this.player.move(this.lanes[this.currentLane]);
      }
    }
  }

  /**
   * Spawn a new item. Implemented by the specific level.
   *
   * @returns the new item
   */
  protected abstract spawnNewItem(): GameItem;

  /**
   * Get the next level. Implemented by the specific level.
   *
   * @returns the next level, or null if there is no next level
   */
  public abstract nextLevel(): Level | null;

  /**
   * Update game state. Called from the GameLoop
   *
   * @param elapsed time elapsed from the GameLoop
   */
  public update(elapsed: number): void {
    // Spawn a new item if it is time
    this.timeToNextItem -= elapsed;
    if (this.timeToNextItem < 0) {
      this.gameItems.push(this.spawnNewItem());
    }

    // Update the state of all the items
    this.gameItems.forEach((item: GameItem) => item.update(elapsed));

    // Look for collisions
    // Remove items that are out of bounds
    this.gameItems = this.gameItems.filter((item: GameItem) => {
      if (this.player.isCollidingWithItem(item)) {
        // If the player is colliding with a Key, toggle the chest's open state
        // and remove the key
        if (item instanceof Key) {
          this.player.toggleOpen();
          return false;
        }

        // If the player is colliding with a Dynamite, reset the score to 0
        // and remove the dynamite
        if (item instanceof Dynamite) {
          this.score = 0;
          return false;
        }

        // If the player is colliding with a ScoreItem, add the score to the total
        // if the chest is open
        // and remove the ScoreItem
        if (this.player.getChestOpen()) {
          this.score += item.getScore();
          return false;
        }
      }

      // Remove items that are out of bounds
      return !(item.getPosX() > this.maxY);
    });
  }

  /**
   * Render all the elements in the screen. Called from GameLoop
   *
   * @param canvas HTML canvas where the game should be rendered
   */
  public render(canvas: HTMLCanvasElement): void {
    CanvasRenderer.clearCanvas(canvas);
    this.player.render(canvas);
    this.gameItems.forEach((item: GameItem) => item.render(canvas));

    CanvasRenderer.writeText(canvas, `Score: ${this.score}`, 20, 40, 'left', 'monospace', 30, 'cyan');
    CanvasRenderer.writeText(canvas, `Level: ${this.LEVELNO}`, 560, 40, 'right', 'monospace', 30, 'cyan');
  }
}
