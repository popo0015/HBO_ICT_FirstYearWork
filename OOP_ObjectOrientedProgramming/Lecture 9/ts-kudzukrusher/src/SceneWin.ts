import CanvasRenderer from './CanvasRenderer.js';
import MouseListener from './MouseListener.js';
import Scene from './Scene.js';
import SceneStart from './SceneStart.js';

export default class SceneWin extends Scene {
  private continue: boolean;

  public constructor(maxX: number, maxY: number) {
    super(maxX, maxY);
  }

  public override processInput(mouseListener: MouseListener): void {
    this.render(this.canvas);
    if (mouseListener.buttonPressed(MouseListener.BUTTON_LEFT)) {
      this.setStarting(true);
      this.getNextScene();
    }
  }

  public override update(elapsed: number): void {

  }

  public override getNextScene(): Scene | null {
    if (this.starting) {
      return new SceneStart(this.maxX, this.maxY);
    }
    return null;
  }

  public override render(canvas: HTMLCanvasElement): void {
    CanvasRenderer.fillCanvas(canvas, 'pink');
    CanvasRenderer.writeText(canvas, 'You win!', window.innerWidth / 2, window.innerHeight / 2, 'center', 'Arial', 50, 'black');
  }
}
