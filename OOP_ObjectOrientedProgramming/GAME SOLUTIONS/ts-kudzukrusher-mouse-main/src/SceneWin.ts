import CanvasRenderer from './CanvasRenderer.js';
import MouseListener from './MouseListener.js';
import Scene from './Scene.js';
import SceneStart from './SceneStart.js';
import Flower from './ScoreItems/Flower.js';

export default class SceneWin extends Scene {
  private continue: boolean;

  private flowers: Flower[];

  private timeToNextFlower: number;

  public constructor(maxX: number, maxY: number) {
    super(maxX, maxY);
    this.continue = false;
    this.timeToNextFlower = 0;
    this.flowers = [];
  }

  /**
   * Process input from the mouse
   *
   * @param mouseListener mouse listener object
   */
  public processInput(mouseListener: MouseListener): void {
    if (mouseListener.buttonPressed(MouseListener.BUTTON_LEFT)) {
      this.continue = true;
    }
  }

  /**
   *
   * @param elapsed elapsed ms since last update
   */
  public update(elapsed: number): void {
    this.timeToNextFlower -= elapsed;
    if (this.timeToNextFlower < 0) {
      this.flowers.push(new Flower(this.maxX, this.maxY));
      this.timeToNextFlower = Math.random() * 500;
    }
    this.flowers.forEach((flower: Flower) => flower.update(elapsed));
    this.flowers = this.flowers.sort((a: Flower, b: Flower) => a.getPosY() - b.getPosY());
  }

  /**
   *
   * @returns the next scene to be rendered. null if no change
   */
  public override getNextScene(): Scene | null {
    if (this.continue) {
      return new SceneStart(this.maxX, this.maxY);
    }
    return null;
  }

  /**
   * Render the scene to the canvas
   * @param canvas canvas to render to
   */
  public render(canvas: HTMLCanvasElement): void {
    CanvasRenderer.fillCanvas(canvas, '#e7cea2');
    this.flowers.forEach((flower: Flower) => flower.render(canvas));
    CanvasRenderer.writeText(canvas, 'You won!', canvas.width / 2, canvas.height / 2, 'center', 'Arial', 50, 'green');
    CanvasRenderer.writeText(canvas, 'Click to continue', canvas.width / 2, canvas.height / 2 + 65, 'center', 'Arial', 30, 'green');
  }
}
