import OceanCleanup from './OceanCleanup.js';

const oceanCleanup: OceanCleanup = new OceanCleanup(document.getElementById('game') as HTMLCanvasElement);

window.addEventListener('load', () => {
  oceanCleanup.start();
});
