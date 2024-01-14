const username = prompt("What is your name?", "Will Smith");
const inputMinutes = prompt("Give the duration in minutes you want to convert:", "100");
const minutesNew = inputMinutes % 60;
const hoursNew = (inputMinutes - minutesNew) / 60;
document.write("Hello " + username + ", Your input was " + inputMinutes + " minutes" + "<br><br>");
document.write("Output: " + hoursNew + " hours and " + minutesNew + " minutes");
