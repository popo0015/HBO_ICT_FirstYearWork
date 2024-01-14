import FruitDrop from './FruitDrop.js';
import { GameLoop } from './GameLoop.js'; // { GameLoop } - because it exports 2 classes - game and game loop

const fruitDrop: FruitDrop = new FruitDrop(document.getElementById('game') as HTMLCanvasElement);

const gameLoop: GameLoop = new GameLoop(fruitDrop);
window.addEventListener('load', () => {
  gameLoop.start();
});
