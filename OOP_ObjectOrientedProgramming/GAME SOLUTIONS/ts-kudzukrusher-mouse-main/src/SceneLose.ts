import CanvasRenderer from './CanvasRenderer.js';
import MouseListener from './MouseListener.js';
import Scene from './Scene.js';
import SceneStart from './SceneStart.js';
import Kudzu from './ScoreItems/Kudzu.js';

export default class SceneLose extends Scene {
  private continue: boolean;

  private kudzus: Kudzu[];

  private timeToNextKudzu: number;

  public constructor(maxX: number, maxY: number) {
    super(maxX, maxY);
    this.continue = false;
    this.kudzus = [];
    this.timeToNextKudzu = 0;
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
    this.kudzus.forEach((kudzu: Kudzu) => kudzu.update(elapsed));
    this.kudzus = this.kudzus.sort((a: Kudzu, b: Kudzu) => a.getPosY() - b.getPosY());

    this.timeToNextKudzu -= elapsed;
    if (this.timeToNextKudzu <= 0) {
      this.kudzus.push(new Kudzu(this.maxX, this.maxY));
      this.timeToNextKudzu = 500;
    }
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
    this.kudzus.forEach((kudzu: Kudzu) => kudzu.render(canvas));
    CanvasRenderer.writeText(canvas, 'You lost!', canvas.width / 2, canvas.height / 2, 'center', 'Arial', 50, 'red');
    CanvasRenderer.writeText(canvas, 'Click to continue', canvas.width / 2, canvas.height / 2 + 65, 'center', 'Arial', 30, 'red');
  }
}
