const nameUser = window.prompt("Please enter your name", "Will Smith");
document.getElementById("username").innerHTML = nameUser;

const ageUser = window.prompt("Please enter your age", "30");
document.getElementById("age").innerHTML = ageUser;

const adviceText = document.getElementById("advice-text");
const adviceCard = document.getElementById("advice-card");

if (ageUser < 18) {
  adviceText.innerHTML = "Sorry " + nameUser + ", you are not old enough to get a proper advice from us";
  adviceCard.className = "box has-background-grey-light";
}
else {
  const heightUser = window.prompt("Please enter your height (in m, ie. 1.96)", "1.85");
  document.getElementById("height").innerHTML = heightUser;

  const weightUser = window.prompt("Please enter your weight (in kg, ie. 89.3)", "65");
  document.getElementById("weight").innerHTML = weightUser;

  const bmiResult = weightUser / (heightUser * heightUser);

  if (bmiResult < 18.5) {
    adviceText.innerHTML = "Your BMI: " + bmiResult + "<br>" + "You are under weight" + "<br>" + "Start with a personal trainer";
    adviceCard.className = "box has-background-warning";
  }
  else if (bmiResult < 25) {
    adviceText.innerHTML = "Your BMI: " + bmiResult + "<br>" + "You are normal weight" + "<br>" + "Start with any programme";
    adviceCard.className = "box has-background-success";
  }
  else if (bmiResult < 30) {
    adviceText.innerHTML = "Your BMI: " + bmiResult + "<br>" + "You are slightly over weight" + "<br>" + "Start with cardio training";
    adviceCard.className = "box has-background-warning";
  }
  else {
    adviceText.innerHTML = "Your BMI: " + bmiResult + "<br>" + "You are obese" + "<br>" + "Start with a personal trainer";
    adviceCard.className = "box has-background-danger";
  }
}