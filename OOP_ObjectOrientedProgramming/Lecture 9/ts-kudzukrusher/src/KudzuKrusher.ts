import Game from './Game.js';

import CanvasRenderer from './CanvasRenderer.js';
import Scene from './Scene.js';
import MouseListener from './MouseListener.js';
import SceneStart from './SceneStart.js';

export default class KudzuKrusher extends Game {
  private canvas: HTMLCanvasElement;

  private mouseListener: MouseListener;

  private currentScene: Scene;

  public constructor(canvas: HTMLCanvasElement) {
    super();
    this.canvas = canvas;
    this.canvas.height = window.innerHeight;
    this.canvas.width = window.innerWidth;
    this.mouseListener = new MouseListener(this.canvas);
    this.canvas.style.cursor = 'none';

    // TODO: Set the current scene
    this.currentScene = new SceneStart(this.canvas.width, this.canvas.height);
  }

  public getCanvas(): HTMLCanvasElement {
    return this.canvas;
  }

  /**
   * Process all input. Called from the GameLoop.
   */
  public processInput(): void {
    this.currentScene.processInput(this.mouseListener);
  }

  /**
   * Update game state. Called from the GameLoop
   *
   * @param elapsed time elapsed from the GameLoop
   * @returns true if the game should continue
   */
  public update(elapsed: number): boolean {
    // update current scene
    this.currentScene.update(elapsed);

    // check if the there is a new scene or to continue with current scene
    const newScene: Scene = this.currentScene.getNextScene();
    if (newScene !== null) {
      this.currentScene = newScene;
    }

    // Return true to continue the game
    return true;
  }

  /**
   * Render all the elements in the screen. Called from GameLoop
   */
  public render(): void {
    // Clear the canvas
    CanvasRenderer.clearCanvas(this.canvas);

    this.currentScene.render(this.canvas);
  }
}
