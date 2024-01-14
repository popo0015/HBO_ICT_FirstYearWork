import MouseListener from './MouseListener.js';
import KudzuKrusher from './KudzuKrusher.js';

export default abstract class Scene {
  private kudzuKrusher: KudzuKrusher;

  protected canvas: HTMLCanvasElement;

  protected maxX: number;

  protected maxY: number;

  protected starting: boolean;

  public constructor(maxX: number, maxY: number) {
    this.maxX = maxX;
    this.maxY = maxY;
    this.canvas = this.kudzuKrusher.getCanvas();
  }

  public setStarting(value: boolean): void {
    this.starting = value;
  }

  public abstract processInput(mouseListener: MouseListener): void;
  public abstract update(elapsed: number): void;
  public abstract getNextScene(): Scene | null;
  public abstract render(canvas: HTMLCanvasElement): void;
}
