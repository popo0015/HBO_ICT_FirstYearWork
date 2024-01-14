import Game from './Game.js';

import CanvasRenderer from './CanvasRenderer.js';
import Scene from './Scene.js';
import SceneStart from './SceneStart.js';
import MouseListener from './MouseListener.js';
import Level from './Level.js';

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

    this.currentScene = new SceneStart(this.canvas.width, this.canvas.height);
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
    this.currentScene.update(elapsed);
    const nextScene: Scene = this.currentScene.getNextScene();
    if (nextScene !== null) {
      if (nextScene instanceof Level) {
        this.canvas.style.cursor = 'none';
      } else {
        this.canvas.style.cursor = 'default';
      }
      this.currentScene = nextScene;
    }
    return true;
  }

  /**
   * Render all the elements in the screen. Called from GameLoop
   */
  public render(): void {
    CanvasRenderer.clearCanvas(this.canvas);
    this.currentScene.render(this.canvas);
  }
}
