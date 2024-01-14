import HelloWorld from './HelloWorld.js';
import Car from './Cars.js';

const myCar = new Car();
const greeting = new HelloWorld();

myCar.setFuel(50);
myCar.setBrand('Mercedes');

const contentText = `${greeting.greet()} \n Your car is ${myCar.getBrand()}! The fuel you have is ${myCar.getFuel()} litres.`;

window.addEventListener('load', () => {
  document.getElementById('content').innerText = contentText;
});
