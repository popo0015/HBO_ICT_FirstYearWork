const ballArray = [1, 1, 1, 1, 1, 1, 1, 1, 1];
ballArray[prompt('Select the oddball [0-8]', 3)] = 1.2;

document.getElementsByClassName("section");

for (let i = 0; i < 9; i++) {
  const ball = document.createElement('div');
  document.querySelector('#ball-list').appendChild(ball);
  ball.innerHTML = i;
  ball[i] = ballArray[i];

  if (ballArray[i] === 1.2) {
    ball.className = "ball column box m-4 has-background-primary has-border-primary-dark";
  } else {
    ball.className = "ball column box m-4 has-background-primary-light";
  }
}

const left = ballArray[0] + ballArray[1] + ballArray[2];
const right = ballArray[3] + ballArray[4] + ballArray[5];

document.querySelector('#left-1').innerHTML = "[0, 1, 2]";
document.querySelector('#right-1').innerHTML = "[3, 4, 5]";

if (left > right) {
  document.querySelector('#result-1').innerHTML = "left is heavier";
  document.querySelector('#conclusion-1').innerHTML = "oddball must be in [0, 1, 2]";
  if (ballArray[0] === ballArray[1]) {
    document.querySelector('#left-2').innerHTML = "[0]";
    document.querySelector('#right-2').innerHTML = "[1]";
    document.querySelector('#result-2').innerHTML = "balanced";
    document.querySelector('#conclusion-2').innerHTML = "oddball is [2]";
    ball.classList.add("has-border-primary-dark");
  }
  else if (ballArray[0] > ballArray[1]) {
    document.querySelector('#left-2').innerHTML = "[0]";
    document.querySelector('#right-2').innerHTML = "[1]";
    document.querySelector('#result-2').innerHTML = "left is heavier";
    document.querySelector('#conclusion-2').innerHTML = "oddball is [0]";
    ball.classList.add("has-border-primary-dark");
  }
  else {
    document.querySelector('#left-2').innerHTML = "[0]";
    document.querySelector('#right-2').innerHTML = "[1]";
    document.querySelector('#result-2').innerHTML = "right is heavier";
    document.querySelector('#conclusion-2').innerHTML = "oddball is [1]";
    ball.classList.add("has-border-primary-dark");
  }
}
else if (left < right) {
  document.querySelector('#result-1').innerHTML = "right is heavier";
  document.querySelector('#conclusion-1').innerHTML = "oddball must be in [3, 4, 5]";
  if (ballArray[3] === ballArray[4]) {
    document.querySelector('#left-2').innerHTML = "[3]";
    document.querySelector('#right-2').innerHTML = "[4]";
    document.querySelector('#result-2').innerHTML = "balanced";
    document.querySelector('#conclusion-2').innerHTML = "oddball is [5]";
    ball.classList.add("has-border-primary-dark");
  }
  else if (ballArray[3] > ballArray[4]) {
    document.querySelector('#left-2').innerHTML = "[3]";
    document.querySelector('#right-2').innerHTML = "[4]";
    document.querySelector('#result-2').innerHTML = "left is heavier";
    document.querySelector('#conclusion-2').innerHTML = "oddball is [3]";
    ball.classList.add("has-border-primary-dark");
  }
  else {
    document.querySelector('#left-2').innerHTML = "[3]";
    document.querySelector('#right-2').innerHTML = "[4]";
    document.querySelector('#result-2').innerHTML = "right is heavier";
    document.querySelector('#conclusion-2').innerHTML = "oddball is [4]";
    ball.classList.add("has-border-primary-dark");
  }
}
else {
  document.querySelector('#result-1').innerHTML = "balanced";
  document.querySelector('#conclusion-1').innerHTML = "oddball must be in [6, 7, 8]";
  if (ballArray[6] === ballArray[7]) {
    document.querySelector('#left-2').innerHTML = "[6]";
    document.querySelector('#right-2').innerHTML = "[7]";
    document.querySelector('#result-2').innerHTML = "balanced";
    document.querySelector('#conclusion-2').innerHTML = "oddball is [8]";
    ball.classList.add("has-border-primary-dark");
  }
  else if (ballArray[6] > ballArray[7]) {
    document.querySelector('#left-2').innerHTML = "[6]";
    document.querySelector('#right-2').innerHTML = "[7]";
    document.querySelector('#result-2').innerHTML = "left is heavier";
    document.querySelector('#conclusion-2').innerHTML = "oddball is [6]";
    ball.classList.add("has-border-primary-dark");
  }
  else {
    document.querySelector('#left-2').innerHTML = "[6]";
    document.querySelector('#right-2').innerHTML = "[7]";
    document.querySelector('#result-2').innerHTML = "right is heavier";
    document.querySelector('#conclusion-2').innerHTML = "oddball is [7]";
    ball.classList.add("has-border-primary-dark");
  }
}