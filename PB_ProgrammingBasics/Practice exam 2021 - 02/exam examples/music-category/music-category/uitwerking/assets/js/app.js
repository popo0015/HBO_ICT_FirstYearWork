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

let totalAirtime = undefined;
let numberDetails = undefined;

/**
 * Function to initialize the application
 * @param {*} event 
 */
function init(event) {
    const sbmButton = document.getElementById('sbmButton');
    sbmButton.addEventListener('click', clickHandler);
    totalAirtime = document.getElementById('total-airtime');
    totalAirtime.innerHTML = `${calcTotalAirtime()} minutes`;
}

/**
 * Function to handle the click event
 * @param {*} event 
 */
function clickHandler(event) {
    event.preventDefault();
    console.log('clicked');
    const song = document.getElementById('inputNumber').value;
    const songDetails = findRightSong(song);
    numberDetails = document.getElementById('number-details');
    numberDetails.innerHTML = '';
    numberDetails.appendChild(writeToDOM({name:'h1', text:`${songDetails.artist}`, class:'bg-yellow'}));
    numberDetails.appendChild(writeToDOM({name:'p', text:`${songDetails.name}`, class:'bg-yellow'}));
    numberDetails.appendChild(writeToDOM({name:'p', text:`${songDetails.duration}`, class:'bg-yellow'}));
}
/**
 * Function find the song in the array
 * @param {*} song - title of a song
 * @returns - returns all the details of the song
 */
function findRightSong(song) {
    let songDetails = {};
    myPlayList.numbers.forEach(function(element){        
        if(element.name == song){
            songDetails.name = element.name;
            songDetails.artist = element.artist;
            songDetails.duration = element.duration;
        }
    });
    return songDetails;
}

/**
 * Function to calculate the duration of the playlist
 * @returns - returns the sum of the duraction of all the songs
 */
function calcTotalAirtime(){
    let total = 0;
    myPlayList.numbers.forEach(function(element){
        total += element.duration;
    });
    return total;
}

/**
 * Function to create a dom element
 * @param {*} element - object with changing DOM content
 * @returns - returns a created DOM element
 */
function writeToDOM(element) {
    const domElement = document.createElement(element.name);
    if(element.class){
        domElement.classList.add(element.class);
    }
    if(element.id){
        domElement.id = id;
    }
    if(element.text){
        domElement.innerText = element.text;
    }
    return domElement;
}