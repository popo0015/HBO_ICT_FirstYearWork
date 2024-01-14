import CanvasRenderer from './CanvasRenderer.js';
import Kudzu from './ScoreItems/Kudzu.js';
import Player from './Player.js';
import Scene from './Scene.js';
import ScoreItem from './ScoreItems/ScoreItem.js';
import Flower from './ScoreItems/Flower.js';
import MouseListener from './MouseListener.js';
import SceneWin from './SceneWin.js';
import SceneLose from './SceneLose.js';

export default class Level extends Scene {
  private player: Player;

  private scoreItems: ScoreItem[] = [];

  private timeToNextItem: number;

  private chanceToKudzu: number;

  private score: number;

  private flowersLost: number;

  public constructor(maxX: number, maxY: number) {
    super(maxX, maxY);
    this.player = new Player(maxX, maxY);
    this.timeToNextItem = 500;
    this.score = 0;
    this.flowersLost = 0;

    this.chanceToKudzu = 0.85;

    for (let i: number = 0; i < 100; i++) {
      this.scoreItems.push(new Flower(maxX, maxY));
    }
  }

  /**
   * Process input from the mouse
   *
   * @param mouseListener mouse listener object
   */
  public processInput(mouseListener: MouseListener): void {
    this.player.move(mouseListener.getMousePosition().x, mouseListener.getMousePosition().y);

    if (mouseListener.buttonPressed(MouseListener.BUTTON_LEFT)) {
      this.scoreItems = this.scoreItems.filter((item: ScoreItem) => {
        if (this.player.isCollidingWithItem(item)) {
          if (item instanceof Flower) {
            this.flowersLost += 1;
          }
          this.score += item.getScore();
          return false;
        }
        return true;
      });
      this.score = Math.round(this.score);
    }
  }

  /**
   *
   * @param elapsed elapsed ms since last update
   */
  public update(elapsed: number): void {
    this.timeToNextItem -= elapsed;
    if (this.timeToNextItem < 0) {
      if (Math.random() > this.chanceToKudzu) {
        this.scoreItems.push(new Kudzu(this.maxX, this.maxY));
        this.chanceToKudzu -= 0.01;
      } else {
        this.scoreItems.push(new Flower(this.maxX, this.maxY));
      }
      this.timeToNextItem = 250;
    }

    this.scoreItems = this.scoreItems.sort(
      (a: ScoreItem, b: ScoreItem) => a.getPosY() - b.getPosY(),
    );

    this.scoreItems.forEach((item: ScoreItem) => {
      item.update(elapsed);

      if (item instanceof Kudzu) {
        this.scoreItems = this.scoreItems.filter((item2: ScoreItem) => {
          if (item2 instanceof Flower && item.isCollidingWithItem(item2)) {
            this.flowersLost += 1;
            return false;
          }
          return true;
        });
      }
    });
  }

  /**
   *
   * @returns new scene to switch to, or null to keep current scene
   */
  public override getNextScene(): Scene | null {
    if (this.score >= 100) {
      return new SceneWin(this.maxX, this.maxY);
    }
    if (this.flowersLost >= 100) {
      return new SceneLose(this.maxX, this.maxY);
    }
    return null;
  }

  /**
   * Render the scene to the canvas
   * @param canvas canvas to render to
   */
  public render(canvas: HTMLCanvasElement): void {
    this.scoreItems.forEach((item: ScoreItem) => item.render(canvas));
    CanvasRenderer.writeText(canvas, `Score ${this.score}`, 40, 50, 'left', 'sans-serif', 30, '#040');
    CanvasRenderer.writeText(canvas, `Flowers Lost ${this.flowersLost}`, 40, 80, 'left', 'sans-serif', 26, '#040');
    this.player.render(canvas);
  }
}
