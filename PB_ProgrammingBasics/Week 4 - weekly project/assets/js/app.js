/**
 * Constant that defines the trophies for each level
 */
const trophies = ['🍓', '🌽', '🧱', '🐴', '🏆'];

/**
 * Constant that defines the monsters within this game
 */
const monsterImages = [
  'assets/img/horns_skull.png',
  'assets/img/fire_horns.png',
  'assets/img/green_blob.png',
  'assets/img/pink_monster.png',
  'assets/img/red_zombie.png'
];

/**
 * a Helper function that returns a random integer number between and 
 * including the lower and upper limits
 * 
 * @param {*} lower the lower limit of the possible result
 * @param {*} upper the upper limit of the possible result
 * @returns a random integer number between and including the lower and upper
 *   limits
 */
function randomIntBetween(lower, upper) {
  return Math.round(lower + (upper - lower) * Math.random());
}

/**
 * Initializes the app when the page is fully loaded.
 * 
 * Instead placing the code outside of a function, this ensures that all expected
 * DOM elements are loaded and available. It is a good practice in Javascript, 
 * and might prevent some funky errors.
 */
window.addEventListener('load', function () {
  const playfield = document.getElementById('playfield');
  const trophiesfield = document.getElementById('trophies');
  let clickNumber = 0;

  trophies.forEach(function (trophy) {
    const cup = document.createElement('span');
    cup.textContent = trophy;
    cup.style.visibility = 'hidden';
    trophiesfield.appendChild(cup);
  });

  monsterImages.forEach(function (imageSrc) {
    const imgElement = document.createElement('img');
    imgElement.src = imageSrc;
    imgElement.className = "playfield_item";
    imgElement.style.left = randomIntBetween(0, window.innerWidth) + 'px';
    imgElement.style.top = randomIntBetween(0, window.innerHeight) + 'px';
    playfield.appendChild(imgElement);

    /**
     * Moves the image to a random position across the screen
     */
    function moveImages() {
      clickNumber += 1;
      imgElement.style.left = randomIntBetween(0, window.innerWidth) + 'px';
      imgElement.style.top = randomIntBetween(0, window.innerHeight) + 'px';

      checkForTrophies();
    }

    imgElement.addEventListener('click', moveImages);
  });

  /**
   * Creates an array with the points that should be reached
   * and whenever that point of clicks is reached it calls the
   * showAndAddTrophy function to visualize the according trophey
   * 
   * @returns a random integer number between and including the lower and upper
   */
  function checkForTrophies() {
    const clicksAmount = [10, 50, 100, 150, 250];

    for (let i = 0; i < clicksAmount.length; i++) {
      const point = clicksAmount[i];

      if (clickNumber >= point) {
        showAndAddTrophy(i);
      }
    }
  }
});

/**
 *  Shows a certain trophy based on the checkForTrophies outcome
 * 
 * @param {} index is the item out of the array with trophies that should be shown
 * @returns a random integer number between and including the lower and upper
 */
function showAndAddTrophy(index) {
  const trophiesfield = document.getElementById('trophies');
  const trophiesElement = trophiesfield.children;

  trophiesElement[index].style.visibility = 'visible';
}