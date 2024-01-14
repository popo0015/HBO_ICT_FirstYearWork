import Scene from './Scene.js';

export default class SceneLose extends Scene {
  private continue: boolean;

  public constructor(maxX: number, maxY: number) {
    super(maxX, maxY);
  }

  public override processInput(mouseListener: MouseListener): void {

  }

  public override update(elapsed: number): void {

  }

  public override getNextScene(): Scene | null {

  }

  public override render(canvas: HTMLCanvasElement): void {

  }
}
