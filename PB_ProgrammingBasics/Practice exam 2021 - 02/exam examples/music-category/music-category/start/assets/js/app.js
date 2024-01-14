window.addEventListener('load', init);

//global variables
const myPlayList = {
    name: 'My Favourite 80s tracks',
    numbers: [
        {
            name: 'Wake me up be for you Go-Go',
            duration: 3.43,
            artist: 'Wham'
        },
        {
            name: 'Never gonna give you up',
            duration: 3.30,
            artist: 'Rick Astley'
        },
        {
            name: 'The final countdown',
            duration: 3.57,
            artist: 'Europe'
        }
    ]
}

let artistElement;
let songElement;
let durationElement;
let selectElement;
let chosenOption;

/**
 * Function to initialize the application
 */
function init() {
    const sumbitButton = document.querySelector("button");
    sumbitButton.addEventListener("click", submit);

    artistElement = document.getElementById("artist");
    songElement = document.getElementById("number");
    durationElement = document.getElementById("duration");
}

function pickTheRightObject() {
    for (i = 0; i < myPlayList.numbers.length; i++) {
        if (chosenOption === myPlayList.numbers[i].name) {
            artistElement.innerText = myPlayList.numbers[i].artist;
            songElement.innerText = myPlayList.numbers[i].name;
            durationElement.innerText = `Duration: ${myPlayList.numbers[i].duration} minutes`;
        }
    }
}

function submit() {
    selectElement = document.getElementsByName("inputNumber")[0];
    chosenOption = selectElement.options[selectElement.selectedIndex].value;

    pickTheRightObject();
}