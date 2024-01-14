import Game from './Game.js';

import CanvasRenderer from './CanvasRenderer.js';
import KeyListener from './KeyListener.js';
import Level from './Level.js';
import Level1 from './Level1.js';

export default class WizardsChest extends Game {
  private canvas: HTMLCanvasElement;

  private keyListener: KeyListener;

  private currentLevel: Level;

  /**
   * Create a new instance of the game.
   *
   * @param canvas HTML canvas where the game should be rendered
   */
  public constructor(canvas: HTMLCanvasElement) {
    super();
    this.canvas = canvas;
    this.canvas.height = window.innerHeight;
    this.canvas.width = 600;
    this.keyListener = new KeyListener();

    this.currentLevel = new Level1(this.canvas.width, this.canvas.height);
    this.currentLevel.startLevel();
  }

  /**
   * Process all input. Called from the GameLoop.
   */
  public processInput(): void {
    this.currentLevel.processInput(this.keyListener);
    // TODO: process input
  }

  /**
   * Update game state. Called from the GameLoop
   *
   * @param elapsed time elapsed from the GameLoop
   * @returns true if the game should continue
   */
  public update(elapsed: number): boolean {
    this.currentLevel.update(elapsed);
    // TODO: update game state

    // TODO: check if there is a new level to load
    const newLevel: Level = this.currentLevel.nextLevel(this.canvas);
    if (newLevel !== null) {
      this.currentLevel = newLevel;
      this.currentLevel.startLevel();
    }
    return true;
  }

  /**
   * Render all the elements in the screen. Called from GameLoop
   */
  public render(): void {
    CanvasRenderer.clearCanvas(this.canvas);
    this.currentLevel.render(this.canvas);
    // TODO: render the current level
  }
}
