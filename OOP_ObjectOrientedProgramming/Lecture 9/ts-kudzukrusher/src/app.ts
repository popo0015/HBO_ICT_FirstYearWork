import KudzuKrusher from './KudzuKrusher.js';

const game: KudzuKrusher = new KudzuKrusher(document.getElementById('game') as HTMLCanvasElement);

window.addEventListener('load', () => {
  game.start();
});
