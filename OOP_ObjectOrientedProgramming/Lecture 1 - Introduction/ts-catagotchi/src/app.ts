const catScreen: HTMLDivElement = document.querySelector('#screen') as HTMLDivElement;
let catAlive: boolean = true;
let catEnergy: number = 10;
let catMood: number = 10;
let catHunger: number = 0;
let catStatus: string = 'Happy';

const catScreenImage = document.querySelector('img');

/**
 * Player feeds Catagotchi. Vitals changed according to rules.
 */
function feed(): void {
  catHunger -= 1;
  if (catHunger < 0) catHunger = 0;
  if (catHunger > 10) catHunger = 10;
}

/**
 * Player plays with Catagotchi. Vitals changed according to rules.
 */
function play(): void {
  catMood += 1;
  if (catMood < 0) catMood = 0;
  if (catMood > 10) catMood = 10;
  catEnergy -= 1;
  if (catEnergy < 0) catEnergy = 0;
  if (catEnergy > 10) catEnergy = 10;
}

/**
 * Player pets the Catagotchi. Vitals changed according to rules.
 */
function pet(): void {
  catEnergy += 1;
  if (catEnergy < 0) catEnergy = 0;
  if (catEnergy > 10) catEnergy = 10;
  catHunger += 1;
  if (catHunger < 0) catHunger = 0;
  if (catHunger > 10) catHunger = 10;
}

/**
 * Poor Catagotchi died.
 * Execute code when Catagotchi's vitals have reach critical level
 */
function catDied(): void {
  if (catEnergy <= 2 && catMood <= 2 && catHunger >= 8) {
    catStatus = 'Unhappy';
    catScreenImage.src = './photos/unhappy-cat.png';
  } else if (catEnergy <= 4 && catMood <= 4 && catHunger >= 6) {
    catStatus = 'Okay';
    catScreenImage.src = './photos/ok-cat.png';
  } else {
    catStatus = 'Happy';
    catScreenImage.src = './photos/happy-cat.png';
  }
}

/**
 * Update the state of Catagotchi according to rules
 */
function updateCat(): void {
  catEnergy -= 1;
  if (catEnergy === 0) catAlive = false;
  catHunger += 1;
  if (catHunger === 10) catAlive = false;
  catMood -= 1;

  catDied();
}
/**
 * Update the screen of the Catagotchi
 * @returns statement
 */
function updateScreen(): string {
  // Verify if Catagotchi is still alive, and return appropriate string
  if (catAlive) {
    return `Catagotchi!<br>
    Status: ${catStatus}<br>
    Mood:   ${catMood}<br>
    Energy: ${catEnergy}<br>
    Hunger: ${catHunger}`;
  }
  return 'Catagotchi Dead!';
}

/**
 * Runs the update functions
 */
function gameTick(): void {
  updateCat();
  catScreen.innerHTML = updateScreen();

  // Set a timer that calls this function every 1.5 seconds.
  // A better way to do a gameTick will be introduced later in the course.
  setTimeout(() => gameTick(), 1500);
}

/**
 * General setup
 */
window.addEventListener('load', () => gameTick());

document.querySelector('#btn-feed').addEventListener('click', () => feed());
document.querySelector('#btn-play').addEventListener('click', () => play());
document.querySelector('#btn-pet').addEventListener('click', () => pet());
