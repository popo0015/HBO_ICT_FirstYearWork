import CanvasRenderer from '../CanvasRenderer.js';
import GameItem from './GameItem.js';

export default class ScoreItem extends GameItem {
  public constructor(posX: number, speed: number = 0.2) {
    super();
    this.posX = posX;
    this.posY = 0;
    const random: number = Math.random();
    if (random > 0.2) {
      const randomItem: number = Math.random();
      if (randomItem > 0.8) {
        this.image = CanvasRenderer.loadNewImage('./assets/gemRed.png');
        this.score = 100;
      } else if (randomItem > 0.6) {
        this.image = CanvasRenderer.loadNewImage('./assets/gemGreen.png');
        this.score = 50;
      } else {
        this.image = CanvasRenderer.loadNewImage('./assets/gemBlue.png');
        this.score = 5;
      }
    } else {
      const randomItem: number = Math.random();
      if (randomItem > 0.8) {
        this.image = CanvasRenderer.loadNewImage('./assets/skullRed.png');
        this.score = -100;
      } else if (randomItem > 0.6) {
        this.image = CanvasRenderer.loadNewImage('./assets/skullGreen.png');
        this.score = -50;
      } else {
        this.image = CanvasRenderer.loadNewImage('./assets/skullBlue.png');
        this.score = -5;
      }
    }

    this.speed = speed;
  }
}
