import CanvasRenderer from './CanvasRenderer.js';
import GameItem from './GameItem.js';

export default class ScoreItem extends GameItem {
  public constructor(posX: number) {
    super();
    this.posX = posX;
    this.posY = 0;

    const randomNumber: number = Math.random();
    if (randomNumber > 0.8) {
      const randomNumber2: number = Math.random();
      if (randomNumber2 > 0.4) {
        this.image = CanvasRenderer.loadNewImage('./assets/skullBlue.png');
        this.score = -5;
      } else if (randomNumber2 > 0.2) {
        this.image = CanvasRenderer.loadNewImage('./assets/skullGreen.png');
        this.score = -50;
      } else {
        this.image = CanvasRenderer.loadNewImage('./assets/skullRed.png');
        this.score = -100;
      }
    } else {
      const randomNumber2: number = Math.random();
      if (randomNumber2 > 0.4) {
        this.image = CanvasRenderer.loadNewImage('./assets/gemBlue.png');
        this.score = 5;
      } else if (randomNumber2 > 0.2) {
        this.image = CanvasRenderer.loadNewImage('./assets/gemGreen.png');
        this.score = 50;
      } else {
        this.image = CanvasRenderer.loadNewImage('./assets/gemRed.png');
        this.score = 100;
      }
    }
    this.speed = 0.2;
  }
}
