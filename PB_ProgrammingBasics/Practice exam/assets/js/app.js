/**
 * This variable represents the entire list of race data. It calls the 
 * `fetchFormula1Data()` function that builds a (random) datastructure. You are
 * supposed to work with this variable in your project.
 * 
 * WARNING: do not change or delete this code
 */
const racedata = fetchFormula1Data();

/**
 * Initializes the app. This function is called when the page is fully loaded
 * (the window load event).
 */
function init() {
  let driverName = 0;

  for (let i = 0; i < racedata.length; i++) {
    let lapTimeTotal = 0;
    driverName = racedata[i].name;
    for (let j = 0; j < racedata[i].laps.length; j++) {
      lapTimeTotal += racedata[i].laps[j];
    }

    const lapTimeAsWanted = calculateTime(lapTimeTotal);
    createTds(driverName, lapTimeAsWanted);
  }

  getFastestLap();

  const driverDropdown = document.getElementById("driver");
  for (let i = 0; i < racedata.length; i++) {
    const driverDropdownElement = document.createElement("option");
    driverDropdownElement.innerHTML = racedata[i].name;
    driverDropdown.appendChild(driverDropdownElement);
  }
}

// REgister the `init` function on the load event (when the DOM is ready). 
window.addEventListener('load', init);

/**
 * creates rows and cells for the table
 */
function createTds(tableDataName, tableDataTotalraceTime) {
  const tableRow = document.createElement("tr");
  
  const nameCell = document.createElement("td");
  nameCell.textContent = tableDataName;
  tableRow.appendChild(nameCell);
  
  const timeCell = document.createElement("td");
  timeCell.textContent = tableDataTotalraceTime;
  timeCell.className = "time";
  tableRow.appendChild(timeCell);
  
  const lapsElement = document.getElementById("laps");
  lapsElement.appendChild(tableRow);
}

/**
 * calculates time accordingly
 */
function calculateTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const secondsLeft = seconds % 60;
  let timeShown = "";
  if (minutes < 10) {
    if (secondsLeft < 10) {
      timeShown = "0" + minutes + ":" + "0" + secondsLeft.toFixed(3);
    }
    else {
      timeShown = "0" + minutes + ":" + secondsLeft.toFixed(3);
    }
  }
  else {
    if (secondsLeft < 10) {
      timeShown = minutes + ":" + "0" + secondsLeft.toFixed(3);
    }
    else {
      timeShown = minutes + ":" + secondsLeft.toFixed(3);
    }
  }
  return timeShown;
}

/**
 * calculates the fastest lap
 */
function getFastestLap() {
  let currentFastestLap = racedata[0].laps[0];
  for (let i = 0; i < racedata.length; i++) {
    for (let j = 0; j < racedata[i].laps.length; j++) {
      if (currentFastestLap > racedata[i].laps[j]) {
        currentFastestLap = racedata[i].laps[j];
        driverName = racedata[i].name;
      }
    }
  }

  const tableRow = document.createElement("tr");
  
  const nameCell = document.createElement("td");
  nameCell.textContent = driverName;
  tableRow.appendChild(nameCell);
  
  const timeCell = document.createElement("td");
  timeCell.textContent = currentFastestLap;
  timeCell.className = "time";
  tableRow.appendChild(timeCell);
  
  const fastestLap = document.getElementById("fastest");
  fastestLap.appendChild(tableRow);
}

const addButton = document.getElementById("submit");
addButton.addEventListener('click', addLaptimeToList);

/**
 * adds the users input to the laptimes
 */
function addLaptimeToList() {
  const userLapTimeInput = document.getElementById("lapTime").value;
  const userDriverInput = document.getElementById("driver").value;

  for (let i = 0; i < racedata.length; i++) {
    if (userDriverInput === racedata[i].name) {
      racedata[i].laps.push(userLapTimeInput);
      let lapTimeTotal = 0;
      
      const newLapTimeTotal = racedata[i].laps.reduce(function(index = 0){
        lapTimeTotal += racedata[i].laps[index];
        index++;
        return lapTimeTotal;
      });
    }
  }

  getFastestLap();
  removeUserInput();
}

/**
 * removes user input
 */
function removeUserInput() {
  document.getElementById("lapTime").value = "";
}