import CanvasRenderer from './CanvasRenderer.js';
import Player from './Player.js';
import Scene from './Scene.js';
import MouseListener from './MouseListener.js';
import ScoreItem from './ScoreItems/ScoreItem.js';
import Flower from './ScoreItems/Flower.js';
import Kudzu from './ScoreItems/Kudzu.js';
import SceneWin from './SceneWin.js';
import SceneLose from './SceneLose.js';

export default class Level extends Scene {
  private player: Player;

  private mouseListener: MouseListener;

  private scoreItems: ScoreItem[];

  private timeToNextItem: number;

  private currentScore: number;

  private flowersLost: number;

  private sceneWin: SceneWin;

  private sceneLose: SceneLose;

  public constructor(maxX: number, maxY: number) {
    super(maxX, maxY);
    this.player = new Player(maxX, maxY);
    this.sceneWin = new SceneWin(maxX, maxY);
    this.sceneLose = new SceneLose(maxX, maxY);
    this.scoreItems = [];

    this.timeToNextItem = Math.random() * 500;
    this.currentScore = 0;
    this.flowersLost = 0;

    for (let i: number = 0; i < 100; i++) {
      const randomX: number = Math.random() * window.innerWidth;
      const randomY: number = Math.random() * window.innerHeight;
      const flower: ScoreItem = new Flower(randomX, randomY);
      this.scoreItems.push(flower);
    }
  }

  public override processInput(mouseListener: MouseListener): void {
    const mouseX: number = mouseListener.getMousePosition().x;
    const mouseY: number = mouseListener.getMousePosition().y;
    this.player.move(mouseX, mouseY);

    if (mouseListener.buttonPressed(MouseListener.BUTTON_LEFT)) {
      this.handleMouseClick();
    }
  }

  private handleMouseClick(): void {
    const playerX: number = this.player.getPosX();
    const playerY: number = this.player.getPosY();
    const playerWidth: number = this.player.getWidth();
    const playerHeight: number = this.player.getHeight();

    for (let i: number = 0; i < this.scoreItems.length; i++) {
      const item: ScoreItem = this.scoreItems[i];
      if (
        item.getPosX() < playerX + playerWidth
        && item.getPosX() + item.getWidth() > playerX
        && item.getPosY() + item.getHeight() > playerY
        && item.getPosY() < playerY + playerHeight
      ) {
        if (this.scoreItems[i] instanceof Kudzu) {
          this.currentScore += 5;
        } else if (this.scoreItems[i] instanceof Flower) {
          if (this.scoreItems[i].getCount() === 0) {
            this.flowersLost += 1;
          } else if (this.scoreItems[i].getCount() === 1) {
            this.flowersLost += 3;
          } else if (this.scoreItems[i].getCount() === 2) {
            this.flowersLost += 3;
          } else if (this.scoreItems[i].getCount() === 3) {
            this.flowersLost += 3;
          }
        }
        this.scoreItems.splice(i, 1);
      }
    }
  }

  public override update(elapsed: number): void {
    this.timeToNextItem -= elapsed;
    this.scoreItems.forEach((item: Flower) => item.update(elapsed));
    this.scoreItems.forEach((item: Kudzu) => item.update(elapsed));

    if (this.timeToNextItem < 0) {
      const randomX: number = Math.random() * window.innerWidth;
      const randomY: number = Math.random() * window.innerHeight;
      if (Math.random() < 0.8) {
        const flower: Flower = new Flower(randomX, randomY);
        flower.update(elapsed);
        this.scoreItems.push(flower);
      } else {
        const kudzu: Kudzu = new Kudzu(randomX, randomY);
        kudzu.update(elapsed);
        this.scoreItems.push(kudzu);
      }
      this.timeToNextItem = Math.random() * 500;
    }

    for (let i: number = 0; i < this.scoreItems.length; i++) {
      for (let j: number = 0; j < this.scoreItems.length; j++) {
        if (j !== i) {
          if (this.scoreItems[i] instanceof Kudzu && this.scoreItems[j] instanceof Flower) {
            if (this.scoreItems[i].isCollidingWithItem(this.scoreItems[j])) {
              this.scoreItems.splice(j, 1);
              if (this.scoreItems[j].getCount() === 0) {
                this.flowersLost += 1;
              } else if (this.scoreItems[j].getCount() === 1) {
                this.flowersLost += 3;
              } else if (this.scoreItems[j].getCount() === 2) {
                this.flowersLost += 3;
              } else if (this.scoreItems[j].getCount() === 3) {
                this.flowersLost += 3;
              }
            }
          }
        }
      }
    }
  }

  public override getNextScene(): Scene | null {
    if (this.flowersLost >= 100) {
      this.sceneLose.processInput(this.mouseListener);
    }
    if (this.currentScore >= 10) {
      CanvasRenderer.fillCanvas(this.canvas, 'pink');
      CanvasRenderer.writeText(this.canvas, 'You win!', window.innerWidth / 2, window.innerHeight / 2, 'center', 'Arial', 50, 'black');
      return new SceneWin(this.maxX, this.maxY);
    }
    return null;
  }

  public override render(canvas: HTMLCanvasElement): void {
    for (let i: number = 0; i < this.scoreItems.length; i++) {
      this.scoreItems[i].render(canvas);
    }
    CanvasRenderer.writeText(canvas, `Flowers lost: ${this.currentScore}`, 20, 50, 'left', 'Arial', 27, 'black');
    CanvasRenderer.writeText(canvas, `Flowers lost: ${this.flowersLost}`, 20, 90, 'left', 'Arial', 27, 'black');
    this.player.render(canvas);
  }
}
