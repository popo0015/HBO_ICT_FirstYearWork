import CanvasItem from './CanvasItem.js';
import CanvasRenderer from './CanvasRenderer.js';

export default class Player extends CanvasItem {
  public constructor(maxX: number, maxY: number) {
    super();
    this.image = CanvasRenderer.loadNewImage('./assets/hoe_wood.png');
    this.posX = maxX;
    this.posY = maxY;
  }

  public move(maxX: number, maxY: number): void {
    this.posX = maxX;
    this.posY = maxY;
  }
}
