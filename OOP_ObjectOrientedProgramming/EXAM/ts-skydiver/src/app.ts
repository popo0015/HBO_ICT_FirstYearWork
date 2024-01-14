import TheFalling from './TheFalling.js';

const theFalling: TheFalling = new TheFalling(document.getElementById('game') as HTMLCanvasElement);

window.addEventListener('load', () => {
  theFalling.start();
});
