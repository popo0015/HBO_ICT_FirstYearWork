import Shape from './Shape.js';
import Circle from './Circle.js';
import Rectangle from './Rectangle.js';

window.addEventListener('load', init);

function init(): void {
  alert('initialising');

  const myCircle: Circle = new Circle('blue', 10);
  const myRectangle: Rectangle = new Rectangle('red', 10, 20);
}
