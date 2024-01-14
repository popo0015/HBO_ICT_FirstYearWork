import CanvasItem from './CanvasItem.js';

export default abstract class LightItem extends CanvasItem {
  protected lightForce: number;

  protected speed: number;

  protected cloakDiagonal: number;

  /**
   * getter
   * @returns the light force specific for every light item
   */
  public getLightForce(): number {
    return this.lightForce;
  }

  /**
   *
   * @param elasped time in ms between the frames
   */
  public update(elasped: number): void {
    this.posY -= this.speed * elasped;
    this.posX += this.cloakDiagonal * elasped;
  }
}
