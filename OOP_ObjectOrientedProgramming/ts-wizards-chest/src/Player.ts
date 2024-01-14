import CanvasItem from './CanvasItem.js';
import CanvasRenderer from './CanvasRenderer.js';
import GameItem from './GameItem.js';

export default class Player extends CanvasItem {
  private imageClosed: HTMLImageElement;

  private imageOpen: HTMLImageElement;

  private chestOpen: boolean;

  public constructor(startX: number, maxY: number) {
    super();

    this.imageClosed = CanvasRenderer.loadNewImage('./assets/chestClosed.png');
    this.imageOpen = CanvasRenderer.loadNewImage('./assets/chestOpen.png');
    this.image = this.imageOpen;

    this.posX = startX;
    this.posY = window.innerHeight - 100;
    this.chestOpen = true;
  }

  public toggleOpen(): void {
    if (this.chestOpen) {
      this.chestOpen = false;
      this.image = this.imageClosed;
    } else {
      this.chestOpen = true;
      this.image = this.imageOpen;
    }
  }

  public getChestOpen(): boolean {
    return this.chestOpen;
  }

  /**
   *
   * @param newX newX position of the chest
   */
  public move(newX: number): void {
    this.posX = newX - (this.image.width / 2);
  }

  /**
   *
   * @param item to check if colliding
   * @returns whether item collides
   */
  public isCollidingWithItem(item: GameItem): boolean {
    return (
      this.posX < item.getPosX() + item.getWidth() &&
      this.posX + this.image.width > item.getPosX() &&
      this.posY - this.image.height + 30 < item.getPosY() + item.getHeight() &&
      this.posY > item.getPosY()
    );
  }
}
