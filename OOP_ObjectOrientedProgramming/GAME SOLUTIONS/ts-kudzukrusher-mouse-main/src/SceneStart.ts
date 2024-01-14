import CanvasRenderer from './CanvasRenderer.js';
import Level from './Level.js';
import MouseListener from './MouseListener.js';
import Scene from './Scene.js';

export default class SceneStart extends Scene {
  private starting: boolean;

  private logo: HTMLImageElement;

  public constructor(maxX: number, maxY: number) {
    super(maxX, maxY);
    this.logo = CanvasRenderer.loadNewImage('./assets/logo.png');
    this.starting = false;
  }

  /**
   * Process input from the mouse
   *
   * @param mouseListener mouse listener object
   */
  public processInput(mouseListener: MouseListener): void {
    if (mouseListener.buttonPressed(0)) {
      this.starting = true;
    }
  }

  /**
   *
   * @param elapsed elapsed ms since last update
   */
  public update(elapsed: number): void {

  }

  /**
   *
   * @returns the next scene to be rendered. null if no change
   */
  public override getNextScene(): Scene | null {
    if (this.starting) {
      return new Level(this.maxX, this.maxY);
    }
    return null;
  }

  /**
   * Render the scene to the canvas
   * @param canvas canvas to render to
   */
  public render(canvas: HTMLCanvasElement): void {
    CanvasRenderer.fillCanvas(canvas, '#e7cea2');
    CanvasRenderer.drawImage(
      canvas,
      this.logo,
      (canvas.width / 2) - (this.logo.width / 2),
      (canvas.height / 2) - (this.logo.height / 2),
    );
    CanvasRenderer.writeText(canvas, 'Click to start!', canvas.width / 2, canvas.height / 2 + 350, 'center', 'Arial', 50, 'black');
  }
}
