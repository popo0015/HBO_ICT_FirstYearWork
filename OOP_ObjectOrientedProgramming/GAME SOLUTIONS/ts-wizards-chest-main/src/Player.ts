import CanvasRenderer from './CanvasRenderer.js';
import CanvasItem from './CanvasItem.js';
import GameItem from './GameItems/GameItem.js';

export default class Player extends CanvasItem {
  private imageClosed: HTMLImageElement;

  private imageOpen: HTMLImageElement;

  private chestOpen: boolean;

  public constructor(startX: number, maxY: number) {
    super();
    this.imageOpen = CanvasRenderer.loadNewImage('./assets/chestOpen.png');
    this.imageClosed = CanvasRenderer.loadNewImage('./assets/chestClosed.png');

    this.image = this.imageOpen;

    this.chestOpen = true;

    this.posX = startX;
    this.posY = maxY - 100;
  }

  /**
   * Toggles the chest open or closed
   */
  public toggleOpen(): void {
    this.chestOpen = !this.chestOpen;
    if (this.chestOpen) {
      this.image = this.imageOpen;
    } else {
      this.image = this.imageClosed;
    }
  }

  public getChestOpen(): boolean {
    return this.chestOpen;
  }

  /**
   * Moves the player to the new X position
   *
   * @param newX The new X position of the player
   */
  public move(newX: number): void {
    this.posX = newX;
  }

  /**
   * Checks if the player collides with the given item
   *
   * @param item The item to check collision with
   * @returns True if the player collides with the item
   */
  public isCollidingWithItem(item: GameItem): boolean {
    return (this.posX === item.getPosX()
      && item.getPosY() + item.getHeight() >= this.posY + 20
      && item.getPosY() <= this.posY + this.image.height);
  }
}
