import MouseListener from './MouseListener.js';

export default abstract class Scene {
  protected maxX: number;

  protected maxY: number;

  public constructor(maxX: number, maxY: number) {
    this.maxX = maxX;
    this.maxY = maxY;
  }

  public abstract processInput(mouseListener: MouseListener): void;
  public abstract update(elapsed: number): void;
  public abstract getNextScene(): Scene | null;
  public abstract render(canvas: HTMLCanvasElement): void;
}
