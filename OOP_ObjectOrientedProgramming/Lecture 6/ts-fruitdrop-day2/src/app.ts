import FruitDrop from './FruitDrop.js';
import { GameLoop } from './GameLoop.js';

const fruitDrop: FruitDrop = new FruitDrop(document.getElementById('game') as HTMLCanvasElement);

const gameLoop: GameLoop = new GameLoop(fruitDrop);
window.addEventListener('load', () => {
  gameLoop.start();
});
