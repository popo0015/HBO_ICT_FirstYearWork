import Catagotchi from './Catagotchi.js';

const myCatagotchi = new Catagotchi();

const catScreen: HTMLDivElement = document.querySelector('#screen') as HTMLDivElement;

function gameTick(): void {
  myCatagotchi.updateCat();
  catScreen.innerHTML = myCatagotchi.getScreen();

  // Set a timer that calls this function every 1.5 seconds.
  // A better way to do a gameTick will be introduced later in the course.
  setTimeout(() => gameTick(), 1500);
}

/**
 * General setup
 */
window.addEventListener('load', () => gameTick());

document.querySelector('#btn-feed').addEventListener('click', () => myCatagotchi.feed());
document.querySelector('#btn-play').addEventListener('click', () => myCatagotchi.play());
document.querySelector('#btn-pet').addEventListener('click', () => myCatagotchi.pet());
