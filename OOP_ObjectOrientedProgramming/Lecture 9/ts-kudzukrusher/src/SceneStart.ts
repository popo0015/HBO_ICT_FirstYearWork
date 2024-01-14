import CanvasRenderer from './CanvasRenderer.js';
import MouseListener from './MouseListener.js';
import Scene from './Scene.js';
import Level from './Level.js';

export default class SceneStart extends Scene {
  private logo: HTMLImageElement;

  public constructor(maxX: number, maxY: number) {
    super(maxX, maxY); // calling the constructor of my super class
    this.logo = CanvasRenderer.loadNewImage('./assets/logo.png');
    this.starting = false;
  }

  public override processInput(mouseListener: MouseListener): void {
    if (mouseListener.buttonPressed(MouseListener.BUTTON_LEFT)) {
      this.starting = true;
    }
  }

  public override update(elapsed: number): void {

  }

  public override getNextScene(): Scene | null {
    if (this.starting) {
      return new Level(this.maxX, this.maxY);
    }
    return null;
  }

  public override render(canvas: HTMLCanvasElement): void {
    CanvasRenderer.drawImage(canvas, this.logo, 0, 0);
  }
}
