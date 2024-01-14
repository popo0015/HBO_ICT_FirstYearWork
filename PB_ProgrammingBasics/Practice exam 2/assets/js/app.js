/**
 * This is the entire dataset of TOP2000. It calls `buildData()` to
 * initialize its data. In this way the top section remains readable.
 * 
 * WARNING: DO NOT REMOVE OR CHANGE this code
 */
const top2000 = buildData();

/**
 * Initializes the app when the page is fully loaded.
 */
function onLoad() {
  for (let i = 2021; i >= 2016; i--) {
    createDropDown(i);
  }

  const dropDownElement = document.getElementById("edition_select").value;
  compareDropdownToEditions(dropDownElement);
}

// Call the `onLoad` function on the load event (when the DOM is ready). 
window.addEventListener('load', onLoad);

/**
 * creates dropDown menu
 */
function createDropDown(year) {
  const dropDownElement = document.getElementById("edition_select");
  const dropDownList = document.createElement("option");
  dropDownList.innerHTML = year;
  dropDownElement.appendChild(dropDownList);
}

const dropDownElement = document.getElementById("edition_select");
dropDownElement.addEventListener('change', resetSongs);

/**
 * resets the song list
 */
function resetSongs() {
  const selectedValue = dropDownElement.value;
  compareDropdownToEditions(selectedValue);
}

/**
 * compares the value of the edition in the dropdown and in the array
 */
function compareDropdownToEditions(editionYear) {
  const tableBody = document.getElementById("songs");
  tableBody.innerHTML = '';

  for (let i = 0; i < top2000.length; i++) {
    if (editionYear == top2000[i].edition) {
      const headingNumber = document.getElementById("edition");
      headingNumber.innerHTML = editionYear;
      showAllSongsFromEdition(i);
    }
  }
}

/**
 * shows all the songs and their attributes from the selected edition
 */
function showAllSongsFromEdition(index) {
  for (let j = 0; j < top2000[index].songs.length; j++) {
    const tableBody = document.getElementById("songs");
    const tableRow = document.createElement("tr");
    tableBody.appendChild(tableRow);

    const positionElement = document.createElement("td");
    positionElement.textContent = top2000[index].songs[j].position;
    tableRow.appendChild(positionElement);

    const artistElement = document.createElement("td");
    artistElement.textContent = top2000[index].songs[j].artist;
    tableRow.appendChild(artistElement);

    const titleElement = document.createElement("td");
    titleElement.textContent = top2000[index].songs[j].title;
    tableRow.appendChild(titleElement);

    const yearElement = document.createElement("td");
    yearElement.textContent = top2000[index].songs[j].year;
    tableRow.appendChild(yearElement);
  }
}

document.getElementById("search").addEventListener('input', searchBox);

/**
 * search box
 */
function searchBox() {
  const inputWord = document.getElementById("search").value.toLowerCase();
  const tableRows = document.querySelectorAll("tr");

  for (let i = 0; i < top2000.length; i++) {
    if (top2000[i].edition == dropDownElement.value) {
      for (let j = 0; j < top2000[i].songs.length; j++) {
        const artistElement = top2000[i].songs[j].artist.toLowerCase();
        const titleElement = top2000[i].songs[j].title.toLowerCase();

        const containsWordInArtist = artistElement.includes(inputWord);
        const containsWordInTitle = titleElement.includes(inputWord);

        const currentTableRow = tableRows[j + 1];
        const artistCell = currentTableRow.querySelector("td:nth-child(2)");
        const titleCell = currentTableRow.querySelector("td:nth-child(3)");

        artistCell.classList.remove("has-text-success", "has-text-weight-bold");
        titleCell.classList.remove("has-text-success", "has-text-weight-bold");

        if (inputWord !== "") {
          if (containsWordInArtist) {
            artistCell.classList.add("has-text-success", "has-text-weight-bold");
          }
          if (containsWordInTitle) {
            titleCell.classList.add("has-text-success", "has-text-weight-bold");
          }
        }

        if (containsWordInArtist || containsWordInTitle) {
          currentTableRow.style.display = "";
        } else {
          currentTableRow.style.display = "none";
        }
      }
    }
  }
}

/**
 * Helper function that generates an array of TOP2000 objects. It is used to 
 * create the dataset. 
 * 
 * WARNING - This array is very large, but there is nothing exciting going on 
 *           below this. So: THERE IS NO NEED TO SCROLL TO THE BOTTOM OF THIS 
 *           FILE
 * 
 * WARNING - DO NOT REMOVE OR CHANGE this function in any way! It may be used  
 *           in more ways than you can think of
 * 
 * @returns an array that contains data about TOP2000 editions 
 */
function buildData() {
  return [
    {
      'edition': 2016,
      'songs': [
        {
          'position': 1,
          'artist': 'Queen',
          'title': 'Bohemian Rhapsody',
          'year': 1975
        },
        {
          'position': 2,
          'artist': 'Eagles',
          'title': 'Hotel California',
          'year': 1977
        },
        {
          'position': 3,
          'artist': 'Led Zeppelin',
          'title': 'Stairway To Heaven',
          'year': 1971
        },
        {
          'position': 4,
          'artist': 'Billy Joel',
          'title': 'Piano Man',
          'year': 1974
        },
        {
          'position': 5,
          'artist': 'Deep Purple',
          'title': 'Child In Time',
          'year': 1972
        },
        {
          'position': 6,
          'artist': 'Boudewijn de Groot',
          'title': 'Avond',
          'year': 1997
        },
        {
          'position': 7,
          'artist': 'David Bowie',
          'title': 'Heroes',
          'year': 1977
        },
        {
          'position': 8,
          'artist': 'Claudia de Breij',
          'title': 'Mag Ik Dan Bij Jou',
          'year': 2011
        },
        {
          'position': 9,
          'artist': 'Pink Floyd',
          'title': 'Wish You Were Here',
          'year': 1975
        },
        {
          'position': 10,
          'artist': 'Pearl Jam',
          'title': 'Black',
          'year': 1991
        },
        {
          'position': 11,
          'artist': 'Coldplay',
          'title': 'Fix You',
          'year': 2005
        },
        {
          'position': 12,
          'artist': 'John Lennon',
          'title': 'Imagine',
          'year': 1971
        },
        {
          'position': 13,
          'artist': 'Prince & The Revolution',
          'title': 'Purple Rain',
          'year': 1984
        },
        {
          'position': 14,
          'artist': 'Bruce Springsteen',
          'title': 'The River',
          'year': 1981
        },
        {
          'position': 15,
          'artist': 'Metallica',
          'title': 'Nothing Else Matters',
          'year': 1992
        },
        {
          'position': 16,
          'artist': 'Pink Floyd',
          'title': 'Comfortably Numb',
          'year': 1979
        },
        {
          'position': 17,
          'artist': 'Guns N\' Roses',
          'title': 'November Rain',
          'year': 1992
        },
        {
          'position': 18,
          'artist': 'The Beach Boys',
          'title': 'God Only Knows',
          'year': 1966
        },
        {
          'position': 19,
          'artist': 'Dire Straits',
          'title': 'Brothers In Arms',
          'year': 1985
        },
        {
          'position': 20,
          'artist': 'Pink Floyd',
          'title': 'Shine On You Crazy Diamond',
          'year': 1975
        },
        {
          'position': 21,
          'artist': 'AC/DC',
          'title': 'Thunderstruck',
          'year': 1990
        },
        {
          'position': 22,
          'artist': 'Golden Earring',
          'title': 'Radar Love',
          'year': 1973
        },
        {
          'position': 23,
          'artist': 'Simon & Garfunkel',
          'title': 'The Sound Of Silence',
          'year': 1966
        },
        {
          'position': 24,
          'artist': 'Racoon',
          'title': 'Oceaan',
          'year': 2012
        },
        {
          'position': 25,
          'artist': 'Metallica',
          'title': 'One',
          'year': 1994
        },
        {
          'position': 26,
          'artist': 'Dire Straits',
          'title': 'Sultans Of Swing',
          'year': 1978
        },
        {
          'position': 27,
          'artist': 'Meat Loaf',
          'title': 'Paradise By The Dashboard Light',
          'year': 1978
        },
        {
          'position': 28,
          'artist': 'Johnny Cash',
          'title': 'Hurt',
          'year': 2003
        },
        {
          'position': 29,
          'artist': 'Leonard Cohen',
          'title': 'Hallelujah',
          'year': 1984
        },
        {
          'position': 30,
          'artist': 'Toto',
          'title': 'Africa',
          'year': 1982
        },
        {
          'position': 31,
          'artist': 'U2',
          'title': 'One',
          'year': 1992
        },
        {
          'position': 32,
          'artist': 'Nirvana',
          'title': 'Smells Like Teen Spirit',
          'year': 1991
        },
        {
          'position': 33,
          'artist': 'Coldplay',
          'title': 'Viva La Vida',
          'year': 2009
        },
        {
          'position': 34,
          'artist': 'Pearl Jam',
          'title': 'Just Breathe',
          'year': 2009
        },
        {
          'position': 35,
          'artist': 'Queen',
          'title': 'Innuendo',
          'year': 1991
        },
        {
          'position': 36,
          'artist': 'Coldplay',
          'title': 'Clocks',
          'year': 2003
        },
        {
          'position': 37,
          'artist': 'The Alan Parsons Project',
          'title': 'Old And Wise',
          'year': 1982
        },
        {
          'position': 38,
          'artist': 'David Bowie',
          'title': 'Space Oddity',
          'year': 1969
        },
        {
          'position': 39,
          'artist': 'The Beatles',
          'title': 'Hey Jude',
          'year': 1968
        },
        {
          'position': 40,
          'artist': 'The Cure',
          'title': 'A Forest',
          'year': 1980
        },
        {
          'position': 41,
          'artist': 'Coldplay',
          'title': 'The Scientist',
          'year': 2002
        },
        {
          'position': 42,
          'artist': 'Guus Meeuwis',
          'title': 'Brabant',
          'year': 2004
        },
        {
          'position': 43,
          'artist': 'Fleetwood Mac',
          'title': 'Go Your Own Way',
          'year': 1977
        },
        {
          'position': 44,
          'artist': 'Pearl Jam',
          'title': 'Alive',
          'year': 1992
        },
        {
          'position': 45,
          'artist': 'Amy Winehouse',
          'title': 'Back To Black',
          'year': 2006
        },
        {
          'position': 46,
          'artist': 'The Doors',
          'title': 'Riders On The Storm',
          'year': 1971
        },
        {
          'position': 47,
          'artist': 'Adele',
          'title': 'Someone Like You',
          'year': 2011
        },
        {
          'position': 48,
          'artist': 'Supertramp',
          'title': 'School',
          'year': 1974
        },
        {
          'position': 49,
          'artist': 'U2',
          'title': 'Sunday Bloody Sunday',
          'year': 1985
        },
        {
          'position': 50,
          'artist': 'Red Hot Chili Peppers',
          'title': 'Under The Bridge',
          'year': 1992
        },
        {
          'position': 51,
          'artist': 'Guns N\' Roses',
          'title': 'Sweet Child O\' Mine',
          'year': 1988
        },
        {
          'position': 52,
          'artist': 'Simon & Garfunkel',
          'title': 'Bridge Over Troubled Water',
          'year': 1970
        },
        {
          'position': 53,
          'artist': 'Dire Straits',
          'title': 'Telegraph Road',
          'year': 1982
        },
        {
          'position': 54,
          'artist': 'Phil Collins',
          'title': 'In The Air Tonight',
          'year': 1981
        },
        {
          'position': 55,
          'artist': 'Wim Sonneveld',
          'title': 'Het Dorp',
          'year': 1974
        },
        {
          'position': 56,
          'artist': 'Otis Redding',
          'title': '(Sittin\' On) The Dock Of The Bay',
          'year': 1968
        },
        {
          'position': 57,
          'artist': 'Paolo Nutini',
          'title': 'Iron Sky',
          'year': 2014
        },
        {
          'position': 58,
          'artist': 'Queen',
          'title': 'Somebody To Love',
          'year': 1976
        },
        {
          'position': 59,
          'artist': 'U2',
          'title': 'With Or Without You',
          'year': 1987
        },
        {
          'position': 60,
          'artist': 'The Rolling Stones',
          'title': 'Sympathy For The Devil',
          'year': 1973
        },
        {
          'position': 61,
          'artist': 'The Rolling Stones',
          'title': 'Paint It Black',
          'year': 1966
        },
        {
          'position': 62,
          'artist': 'Metallica',
          'title': 'Enter Sandman',
          'year': 1991
        },
        {
          'position': 63,
          'artist': 'Acda En De Munnik',
          'title': 'Het Regent Zonnestralen',
          'year': 1998
        },
        {
          'position': 64,
          'artist': 'Queen',
          'title': 'Love Of My Life',
          'year': 1975
        },
        {
          'position': 65,
          'artist': 'AC/DC',
          'title': 'Highway To Hell',
          'year': 1979
        },
        {
          'position': 66,
          'artist': 'Pink Floyd',
          'title': 'Another Brick In The Wall',
          'year': 1979
        },
        {
          'position': 67,
          'artist': 'Dire Straits',
          'title': 'Private Investigations',
          'year': 1982
        },
        {
          'position': 68,
          'artist': 'The Beatles',
          'title': 'Let It Be',
          'year': 1970
        },
        {
          'position': 69,
          'artist': 'Ramses Shaffy & Liesbeth List',
          'title': 'Pastorale',
          'year': 1969
        },
        {
          'position': 70,
          'artist': 'Rage Against The Machine',
          'title': 'Killing In The Name Of',
          'year': 1992
        },
        {
          'position': 71,
          'artist': 'The Animals',
          'title': 'The House Of The Rising Sun',
          'year': 1964
        },
        {
          'position': 72,
          'artist': 'Adele',
          'title': 'Hello',
          'year': 2015
        },
        {
          'position': 73,
          'artist': 'AC/DC',
          'title': 'Whole Lotta Rosie',
          'year': 1978
        },
        {
          'position': 74,
          'artist': 'Robbie Williams',
          'title': 'Angels',
          'year': 1998
        },
        {
          'position': 75,
          'artist': 'Radiohead',
          'title': 'Creep',
          'year': 1993
        },
        {
          'position': 76,
          'artist': 'Snow Patrol',
          'title': 'Chasing Cars',
          'year': 2006
        },
        {
          'position': 77,
          'artist': 'Billy Joel',
          'title': 'Goodnight Saigon',
          'year': 1983
        },
        {
          'position': 78,
          'artist': 'The Rolling Stones',
          'title': 'Angie',
          'year': 1973
        },
        {
          'position': 79,
          'artist': 'Electric Light Orchestra',
          'title': 'Mr. Blue Sky',
          'year': 1978
        },
        {
          'position': 80,
          'artist': 'R.E.M.',
          'title': 'Losing My Religion',
          'year': 1991
        },
        {
          'position': 81,
          'artist': 'Klein Orkest',
          'title': 'Over De Muur',
          'year': 1984
        },
        {
          'position': 82,
          'artist': 'Dotan',
          'title': 'Home',
          'year': 2014
        },
        {
          'position': 83,
          'artist': 'Eric Clapton',
          'title': 'Tears In Heaven',
          'year': 1992
        },
        {
          'position': 84,
          'artist': 'Adele',
          'title': 'Make You Feel My Love',
          'year': 2008
        },
        {
          'position': 85,
          'artist': 'The Verve',
          'title': 'Bitter Sweet Symphony',
          'year': 1997
        },
        {
          'position': 86,
          'artist': 'Queen',
          'title': 'Who Wants To Live Forever',
          'year': 1986
        },
        {
          'position': 87,
          'artist': 'Queen & David Bowie',
          'title': 'Under Pressure',
          'year': 1981
        },
        {
          'position': 88,
          'artist': 'Marco Borsato',
          'title': 'Dochters',
          'year': 2008
        },
        {
          'position': 89,
          'artist': 'Foo Fighters',
          'title': 'The Pretender',
          'year': 2007
        },
        {
          'position': 90,
          'artist': 'Queen',
          'title': 'Don\'t Stop Me Now',
          'year': 1979
        },
        {
          'position': 91,
          'artist': 'Jeff Buckley',
          'title': 'Hallelujah',
          'year': 1994
        },
        {
          'position': 92,
          'artist': 'The Scene',
          'title': 'Iedereen Is Van De Wereld',
          'year': 1991
        },
        {
          'position': 93,
          'artist': 'Van Dik Hout',
          'title': 'Stil In Mij',
          'year': 1994
        },
        {
          'position': 94,
          'artist': 'Bette Midler',
          'title': 'The Rose',
          'year': 1980
        },
        {
          'position': 95,
          'artist': 'Supertramp',
          'title': 'Fool\'s Overture',
          'year': 1977
        },
        {
          'position': 96,
          'artist': 'The Beatles',
          'title': 'Blackbird',
          'year': 1968
        },
        {
          'position': 97,
          'artist': 'The Beatles',
          'title': 'Yesterday',
          'year': 1965
        },
        {
          'position': 98,
          'artist': 'Simple Minds',
          'title': 'Belfast Child',
          'year': 1989
        },
        {
          'position': 99,
          'artist': 'The Rolling Stones',
          'title': 'Gimme Shelter',
          'year': 1969
        },
        {
          'position': 100,
          'artist': 'Bob Dylan',
          'title': 'Hurricane',
          'year': 1975
        }
      ]
    },
    {
      'edition': 2017,
      'songs': [
        {
          'position': 1,
          'artist': 'Queen',
          'title': 'Bohemian Rhapsody',
          'year': 1975
        },
        {
          'position': 2,
          'artist': 'Eagles',
          'title': 'Hotel California',
          'year': 1977
        },
        {
          'position': 3,
          'artist': 'Led Zeppelin',
          'title': 'Stairway To Heaven',
          'year': 1971
        },
        {
          'position': 4,
          'artist': 'Billy Joel',
          'title': 'Piano Man',
          'year': 1974
        },
        {
          'position': 5,
          'artist': 'Deep Purple',
          'title': 'Child In Time',
          'year': 1972
        },
        {
          'position': 6,
          'artist': 'Pearl Jam',
          'title': 'Black',
          'year': 1991
        },
        {
          'position': 7,
          'artist': 'Pink Floyd',
          'title': 'Wish You Were Here',
          'year': 1975
        },
        {
          'position': 8,
          'artist': 'Coldplay',
          'title': 'Fix You',
          'year': 2005
        },
        {
          'position': 9,
          'artist': 'Boudewijn De Groot',
          'title': 'Avond',
          'year': 1997
        },
        {
          'position': 10,
          'artist': 'Guns N\' Roses',
          'title': 'November Rain',
          'year': 1992
        },
        {
          'position': 11,
          'artist': 'David Bowie',
          'title': 'Heroes',
          'year': 1977
        },
        {
          'position': 12,
          'artist': 'Pink Floyd',
          'title': 'Comfortably Numb',
          'year': 1979
        },
        {
          'position': 13,
          'artist': 'AC/DC',
          'title': 'Thunderstruck',
          'year': 1990
        },
        {
          'position': 14,
          'artist': 'Claudia De Breij',
          'title': 'Mag Ik Dan Bij Jou',
          'year': 2011
        },
        {
          'position': 15,
          'artist': 'Metallica',
          'title': 'Nothing Else Matters',
          'year': 1992
        },
        {
          'position': 16,
          'artist': 'John Lennon',
          'title': 'Imagine',
          'year': 1971
        },
        {
          'position': 17,
          'artist': 'Dire Straits',
          'title': 'Brothers In Arms',
          'year': 1985
        },
        {
          'position': 18,
          'artist': 'Prince & The Revolution',
          'title': 'Purple Rain',
          'year': 1984
        },
        {
          'position': 19,
          'artist': 'Bruce Springsteen',
          'title': 'The River',
          'year': 1981
        },
        {
          'position': 20,
          'artist': 'Johnny Cash',
          'title': 'Hurt',
          'year': 2003
        },
        {
          'position': 21,
          'artist': 'Golden Earring',
          'title': 'Radar Love',
          'year': 1973
        },
        {
          'position': 22,
          'artist': 'Pink Floyd',
          'title': 'Shine On You Crazy Diamond',
          'year': 1975
        },
        {
          'position': 23,
          'artist': 'Metallica',
          'title': 'One',
          'year': 1994
        },
        {
          'position': 24,
          'artist': 'Racoon',
          'title': 'Oceaan',
          'year': 2012
        },
        {
          'position': 25,
          'artist': 'Toto',
          'title': 'Africa',
          'year': 1982
        },
        {
          'position': 26,
          'artist': 'Dire Straits',
          'title': 'Sultans Of Swing',
          'year': 1978
        },
        {
          'position': 27,
          'artist': 'Meat Loaf',
          'title': 'Paradise By The Dashboard Light',
          'year': 1978
        },
        {
          'position': 28,
          'artist': 'Simon & Garfunkel',
          'title': 'The Sound Of Silence',
          'year': 1966
        },
        {
          'position': 29,
          'artist': 'Beach Boys',
          'title': 'God Only Knows',
          'year': 1966
        },
        {
          'position': 30,
          'artist': 'Pearl Jam',
          'title': 'Just Breathe',
          'year': 2009
        },
        {
          'position': 31,
          'artist': 'Coldplay',
          'title': 'Viva La Vida',
          'year': 2009
        },
        {
          'position': 32,
          'artist': 'U2',
          'title': 'One',
          'year': 1992
        },
        {
          'position': 33,
          'artist': 'Fleetwood Mac',
          'title': 'Go Your Own Way',
          'year': 1977
        },
        {
          'position': 34,
          'artist': 'Nirvana',
          'title': 'Smells Like Teen Spirit',
          'year': 1991
        },
        {
          'position': 35,
          'artist': 'Alan Parsons Project',
          'title': 'Old And Wise',
          'year': 1982
        },
        {
          'position': 36,
          'artist': 'Guns N\' Roses',
          'title': 'Sweet Child O\' Mine',
          'year': 1988
        },
        {
          'position': 37,
          'artist': 'Pearl Jam',
          'title': 'Alive',
          'year': 1992
        },
        {
          'position': 38,
          'artist': 'Queen',
          'title': 'Innuendo',
          'year': 1991
        },
        {
          'position': 39,
          'artist': 'Coldplay',
          'title': 'The Scientist',
          'year': 2002
        },
        {
          'position': 40,
          'artist': 'Linkin Park',
          'title': 'In The End',
          'year': 2001
        },
        {
          'position': 41,
          'artist': 'U2',
          'title': 'With Or Without You',
          'year': 1987
        },
        {
          'position': 42,
          'artist': 'Cure',
          'title': 'A Forest',
          'year': 1980
        },
        {
          'position': 43,
          'artist': 'AC/DC',
          'title': 'Highway To Hell',
          'year': 1979
        },
        {
          'position': 44,
          'artist': 'Supertramp',
          'title': 'School',
          'year': 1974
        },
        {
          'position': 45,
          'artist': 'Klein Orkest',
          'title': 'Over De Muur',
          'year': 1984
        },
        {
          'position': 46,
          'artist': 'Coldplay',
          'title': 'Clocks',
          'year': 2003
        },
        {
          'position': 47,
          'artist': 'U2',
          'title': 'Sunday Bloody Sunday',
          'year': 1985
        },
        {
          'position': 48,
          'artist': 'Phil Collins',
          'title': 'In The Air Tonight',
          'year': 1981
        },
        {
          'position': 49,
          'artist': 'Doors',
          'title': 'Riders On The Storm',
          'year': 1971
        },
        {
          'position': 50,
          'artist': 'Guus Meeuwis',
          'title': 'Brabant',
          'year': 2004
        },
        {
          'position': 51,
          'artist': 'Rolling Stones',
          'title': 'Sympathy For The Devil',
          'year': 1973
        },
        {
          'position': 52,
          'artist': 'Paolo Nutini',
          'title': 'Iron Sky',
          'year': 2014
        },
        {
          'position': 53,
          'artist': 'Dire Straits',
          'title': 'Telegraph Road',
          'year': 1982
        },
        {
          'position': 54,
          'artist': 'Disturbed',
          'title': 'The Sound Of Silence',
          'year': 2016
        },
        {
          'position': 55,
          'artist': 'Electric Light Orchestra',
          'title': 'Mr. Blue Sky',
          'year': 1978
        },
        {
          'position': 56,
          'artist': 'Red Hot Chili Peppers',
          'title': 'Under The Bridge',
          'year': 1992
        },
        {
          'position': 57,
          'artist': 'Amy Winehouse',
          'title': 'Back To Black',
          'year': 2006
        },
        {
          'position': 58,
          'artist': 'Simon & Garfunkel',
          'title': 'Bridge Over Troubled Water',
          'year': 1970
        },
        {
          'position': 59,
          'artist': 'AC/DC',
          'title': 'Whole Lotta Rosie',
          'year': 1978
        },
        {
          'position': 60,
          'artist': 'Kensington',
          'title': 'Sorry',
          'year': 2016
        },
        {
          'position': 61,
          'artist': 'Beatles',
          'title': 'Hey Jude',
          'year': 1968
        },
        {
          'position': 62,
          'artist': 'Wim Sonneveld',
          'title': 'Het Dorp',
          'year': 1974
        },
        {
          'position': 63,
          'artist': 'Metallica',
          'title': 'Enter Sandman',
          'year': 1991
        },
        {
          'position': 64,
          'artist': 'Rage Against The Machine',
          'title': 'Killing In The Name',
          'year': 1992
        },
        {
          'position': 65,
          'artist': 'Radiohead',
          'title': 'Creep',
          'year': 1993
        },
        {
          'position': 66,
          'artist': 'Queen',
          'title': 'Somebody To Love',
          'year': 1976
        },
        {
          'position': 67,
          'artist': 'Rolling Stones',
          'title': 'Paint It Black',
          'year': 1966
        },
        {
          'position': 68,
          'artist': 'Robbie Williams',
          'title': 'Angels',
          'year': 1998
        },
        {
          'position': 69,
          'artist': 'Dire Straits',
          'title': 'Private Investigations',
          'year': 1982
        },
        {
          'position': 70,
          'artist': 'Rolling Stones',
          'title': 'Angie',
          'year': 1973
        },
        {
          'position': 71,
          'artist': 'U2',
          'title': 'Where The Streets Have No Name',
          'year': 1987
        },
        {
          'position': 72,
          'artist': 'Queen',
          'title': 'Love Of My Life',
          'year': 1975
        },
        {
          'position': 73,
          'artist': 'R.E.M.',
          'title': 'Losing My Religion',
          'year': 1991
        },
        {
          'position': 74,
          'artist': 'Otis Redding',
          'title': 'The Dock Of The Bay',
          'year': 1968
        },
        {
          'position': 75,
          'artist': 'Eric Clapton',
          'title': 'Tears In Heaven',
          'year': 1992
        },
        {
          'position': 76,
          'artist': 'David Bowie',
          'title': 'Space Oddity',
          'year': 1969
        },
        {
          'position': 77,
          'artist': 'Animals',
          'title': 'House Of The Rising Sun',
          'year': 1964
        },
        {
          'position': 78,
          'artist': 'Snow Patrol',
          'title': 'Chasing Cars',
          'year': 2006
        },
        {
          'position': 79,
          'artist': 'Beatles',
          'title': 'Let It Be',
          'year': 1970
        },
        {
          'position': 80,
          'artist': 'Rolling Stones',
          'title': 'Gimme Shelter',
          'year': 1969
        },
        {
          'position': 81,
          'artist': 'Billy Joel',
          'title': 'Goodnight Saigon',
          'year': 1983
        },
        {
          'position': 82,
          'artist': 'Acda & De Munnik',
          'title': 'Het Regent Zonnestralen',
          'year': 1998
        },
        {
          'position': 83,
          'artist': 'The Verve',
          'title': 'Bitter Sweet Symphony',
          'year': 1997
        },
        {
          'position': 84,
          'artist': 'Supertramp',
          'title': 'Fool\'s Overture',
          'year': 1977
        },
        {
          'position': 85,
          'artist': 'Elvis Presley',
          'title': 'Suspicious Minds',
          'year': 1969
        },
        {
          'position': 86,
          'artist': 'Ramses Shaffy & Liesbeth List',
          'title': 'Pastorale',
          'year': 1969
        },
        {
          'position': 87,
          'artist': 'Beatles',
          'title': 'Yesterday',
          'year': 1965
        },
        {
          'position': 88,
          'artist': 'Foo Fighters',
          'title': 'The Pretender',
          'year': 2007
        },
        {
          'position': 89,
          'artist': 'Adele',
          'title': 'Someone Like You',
          'year': 2011
        },
        {
          'position': 90,
          'artist': 'Pink Floyd',
          'title': 'Another Brick In The Wall',
          'year': 1979
        },
        {
          'position': 91,
          'artist': 'Stef Bos',
          'title': 'Papa',
          'year': 1991
        },
        {
          'position': 92,
          'artist': 'ABBA',
          'title': 'Dancing Queen',
          'year': 1976
        },
        {
          'position': 93,
          'artist': 'Metallica',
          'title': 'Master Of puppets',
          'year': 1986
        },
        {
          'position': 94,
          'artist': 'Queen',
          'title': 'Don\'t Stop Me Now',
          'year': 1979
        },
        {
          'position': 95,
          'artist': 'Van Dik Hout',
          'title': 'Stil In Mij',
          'year': 1994
        },
        {
          'position': 96,
          'artist': 'Muse',
          'title': 'Uprising',
          'year': 2009
        },
        {
          'position': 97,
          'artist': 'Bette Midler',
          'title': 'The Rose',
          'year': 1980
        },
        {
          'position': 98,
          'artist': 'Leonard Cohen',
          'title': 'Hallelujah',
          'year': 1984
        },
        {
          'position': 99,
          'artist': 'Simple Minds',
          'title': 'Belfast Child',
          'year': 1989
        },
        {
          'position': 100,
          'artist': 'Oasis',
          'title': 'Wonderwall',
          'year': 1995
        }
      ]
    },
    {
      'edition': 2018,
      'songs': [
        {
          'position': 1,
          'artist': 'Queen',
          'title': 'Bohemian Rhapsody',
          'year': 1975
        },
        {
          'position': 2,
          'artist': 'Eagles',
          'title': 'Hotel California',
          'year': 1977
        },
        {
          'position': 3,
          'artist': 'Billy Joel',
          'title': 'Piano Man',
          'year': 1974
        },
        {
          'position': 4,
          'artist': 'Led Zeppelin',
          'title': 'Stairway To Heaven',
          'year': 1971
        },
        {
          'position': 5,
          'artist': 'Pink Floyd',
          'title': 'Wish You Were Here',
          'year': 1975
        },
        {
          'position': 6,
          'artist': 'Deep Purple',
          'title': 'Child In Time',
          'year': 1970
        },
        {
          'position': 7,
          'artist': 'Pearl Jam',
          'title': 'Black',
          'year': 1992
        },
        {
          'position': 8,
          'artist': 'Toto',
          'title': 'Africa',
          'year': 1982
        },
        {
          'position': 9,
          'artist': 'Coldplay',
          'title': 'Fix You',
          'year': 2005
        },
        {
          'position': 10,
          'artist': 'Boudewijn De Groot',
          'title': 'Avond',
          'year': 1997
        },
        {
          'position': 11,
          'artist': 'Guns N\' Roses',
          'title': 'November Rain',
          'year': 1992
        },
        {
          'position': 12,
          'artist': 'Queen',
          'title': 'Love Of My Life',
          'year': 1986
        },
        {
          'position': 13,
          'artist': 'Metallica',
          'title': 'Nothing Else Matters',
          'year': 1992
        },
        {
          'position': 14,
          'artist': 'Pink Floyd',
          'title': 'Comfortably Numb',
          'year': 1979
        },
        {
          'position': 15,
          'artist': 'Dire Straits',
          'title': 'Brothers In Arms',
          'year': 1985
        },
        {
          'position': 16,
          'artist': 'John Lennon',
          'title': 'Imagine',
          'year': 1971
        },
        {
          'position': 17,
          'artist': 'David Bowie',
          'title': 'Heroes',
          'year': 1976
        },
        {
          'position': 18,
          'artist': 'Pink Floyd',
          'title': 'Shine On You Crazy Diamond',
          'year': 1975
        },
        {
          'position': 19,
          'artist': 'AC/DC',
          'title': 'Thunderstruck',
          'year': 1990
        },
        {
          'position': 20,
          'artist': 'Dire Straits',
          'title': 'Sultans Of Swing',
          'year': 1978
        },
        {
          'position': 21,
          'artist': 'Bruce Springsteen',
          'title': 'The River',
          'year': 1981
        },
        {
          'position': 22,
          'artist': 'Johnny Cash',
          'title': 'Hurt',
          'year': 2002
        },
        {
          'position': 23,
          'artist': 'Metallica',
          'title': 'One',
          'year': 1994
        },
        {
          'position': 24,
          'artist': 'Claudia De Breij',
          'title': 'Mag Ik Dan Bij Jou',
          'year': 2011
        },
        {
          'position': 25,
          'artist': 'Prince & The Revolution',
          'title': 'Purple Rain',
          'year': 1984
        },
        {
          'position': 26,
          'artist': 'Simon & Garfunkel',
          'title': 'The Sound Of Silence',
          'year': 1966
        },
        {
          'position': 27,
          'artist': 'Golden Earring',
          'title': 'Radar Love',
          'year': 1973
        },
        {
          'position': 28,
          'artist': 'Racoon',
          'title': 'Oceaan',
          'year': 2012
        },
        {
          'position': 29,
          'artist': 'Meat Loaf',
          'title': 'Paradise By The Dashboard Light',
          'year': 1978
        },
        {
          'position': 30,
          'artist': 'Queen',
          'title': 'Innuendo',
          'year': 1991
        },
        {
          'position': 31,
          'artist': 'Bl\u00f8f ft. Geike',
          'title': 'Zoutelande',
          'year': 2017
        },
        {
          'position': 32,
          'artist': 'Nirvana',
          'title': 'Smells Like Teen Spirit',
          'year': 1991
        },
        {
          'position': 33,
          'artist': 'Queen',
          'title': 'Somebody To Love',
          'year': 1976
        },
        {
          'position': 34,
          'artist': 'Guns N\' Roses',
          'title': 'Sweet Child O\' Mine',
          'year': 1987
        },
        {
          'position': 35,
          'artist': 'Pearl Jam',
          'title': 'Just Breathe',
          'year': 2009
        },
        {
          'position': 36,
          'artist': 'Coldplay',
          'title': 'Viva La Vida',
          'year': 2008
        },
        {
          'position': 37,
          'artist': 'Queen',
          'title': 'Don\'t Stop Me Now',
          'year': 1979
        },
        {
          'position': 38,
          'artist': 'David Bowie & Queen',
          'title': 'Under Pressure',
          'year': 1981
        },
        {
          'position': 39,
          'artist': 'Disturbed',
          'title': 'The Sound Of Silence',
          'year': 2016
        },
        {
          'position': 40,
          'artist': 'Dire Straits',
          'title': 'Telegraph Road',
          'year': 1982
        },
        {
          'position': 41,
          'artist': 'Phil Collins',
          'title': 'In The Air Tonight',
          'year': 1981
        },
        {
          'position': 42,
          'artist': 'Fleetwood Mac',
          'title': 'Go Your Own Way',
          'year': 1977
        },
        {
          'position': 43,
          'artist': 'Amy Winehouse',
          'title': 'Back To Black',
          'year': 2007
        },
        {
          'position': 44,
          'artist': 'Supertramp',
          'title': 'School',
          'year': 1974
        },
        {
          'position': 45,
          'artist': 'Coldplay',
          'title': 'The Scientist',
          'year': 2002
        },
        {
          'position': 46,
          'artist': 'Beach Boys',
          'title': 'God Only Knows',
          'year': 1966
        },
        {
          'position': 47,
          'artist': 'Linkin Park',
          'title': 'In The End',
          'year': 2000
        },
        {
          'position': 48,
          'artist': 'Rolling Stones',
          'title': 'Paint It Black',
          'year': 1966
        },
        {
          'position': 49,
          'artist': 'Rolling Stones',
          'title': 'Sympathy For The Devil',
          'year': 1973
        },
        {
          'position': 50,
          'artist': 'U2',
          'title': 'One',
          'year': 1992
        },
        {
          'position': 51,
          'artist': 'Electric Light Orchestra',
          'title': 'Mr. Blue Sky',
          'year': 1978
        },
        {
          'position': 52,
          'artist': 'U2',
          'title': 'With Or Without You',
          'year': 1987
        },
        {
          'position': 53,
          'artist': 'Beatles',
          'title': 'Let It Be',
          'year': 1970
        },
        {
          'position': 54,
          'artist': 'Pink Floyd',
          'title': 'Another Brick In The Wall',
          'year': 1979
        },
        {
          'position': 55,
          'artist': 'Pearl Jam',
          'title': 'Alive',
          'year': 1992
        },
        {
          'position': 56,
          'artist': 'Guus Meeuwis',
          'title': 'Brabant',
          'year': 2003
        },
        {
          'position': 57,
          'artist': 'Coldplay',
          'title': 'Clocks',
          'year': 2003
        },
        {
          'position': 58,
          'artist': 'Doors',
          'title': 'Riders On The Storm',
          'year': 1971
        },
        {
          'position': 59,
          'artist': 'AC/DC',
          'title': 'Highway To Hell',
          'year': 1979
        },
        {
          'position': 60,
          'artist': 'Klein Orkest',
          'title': 'Over De Muur',
          'year': 1984
        },
        {
          'position': 61,
          'artist': 'Simon & Garfunkel',
          'title': 'Bridge Over Troubled Water',
          'year': 1970
        },
        {
          'position': 62,
          'artist': 'Rage Against The Machine',
          'title': 'Killing In The Name',
          'year': 1992
        },
        {
          'position': 63,
          'artist': 'Eminem',
          'title': 'Lose Yourself',
          'year': 2002
        },
        {
          'position': 64,
          'artist': 'Wim Sonneveld',
          'title': 'Het Dorp',
          'year': 1974
        },
        {
          'position': 65,
          'artist': 'Alan Parsons Project',
          'title': 'Old And Wise',
          'year': 1982
        },
        {
          'position': 66,
          'artist': 'Red Hot Chili Peppers',
          'title': 'Under The Bridge',
          'year': 1991
        },
        {
          'position': 67,
          'artist': 'ABBA',
          'title': 'Dancing Queen',
          'year': 1976
        },
        {
          'position': 68,
          'artist': 'George Michael & Queen',
          'title': 'Somebody To Love (Live)',
          'year': 1993
        },
        {
          'position': 69,
          'artist': 'U2',
          'title': 'Sunday Bloody Sunday',
          'year': 1985
        },
        {
          'position': 70,
          'artist': 'Beatles',
          'title': 'Hey Jude',
          'year': 1968
        },
        {
          'position': 71,
          'artist': 'Cure',
          'title': 'A Forest',
          'year': 1980
        },
        {
          'position': 72,
          'artist': 'Metallica',
          'title': 'Enter Sandman',
          'year': 1991
        },
        {
          'position': 73,
          'artist': 'AC/DC',
          'title': 'Whole Lotta Rosie',
          'year': 1978
        },
        {
          'position': 74,
          'artist': 'Queen',
          'title': 'Who Wants To Live Forever',
          'year': 1986
        },
        {
          'position': 75,
          'artist': 'Kensington',
          'title': 'Sorry',
          'year': 2016
        },
        {
          'position': 76,
          'artist': 'Robbie Williams',
          'title': 'Angels',
          'year': 1998
        },
        {
          'position': 77,
          'artist': 'Paolo Nutini',
          'title': 'Iron Sky',
          'year': 2014
        },
        {
          'position': 78,
          'artist': 'Eric Clapton',
          'title': 'Tears In Heaven',
          'year': 1992
        },
        {
          'position': 79,
          'artist': 'Rolling Stones',
          'title': 'Angie',
          'year': 1973
        },
        {
          'position': 80,
          'artist': 'Dire Straits',
          'title': 'Private Investigations',
          'year': 1982
        },
        {
          'position': 81,
          'artist': 'David Bowie',
          'title': 'Space Oddity',
          'year': 1969
        },
        {
          'position': 82,
          'artist': 'Michael Jackson',
          'title': 'Billie Jean',
          'year': 1983
        },
        {
          'position': 83,
          'artist': 'Foo Fighters',
          'title': 'The Pretender',
          'year': 2007
        },
        {
          'position': 84,
          'artist': 'R.E.M.',
          'title': 'Losing My Religion',
          'year': 1991
        },
        {
          'position': 85,
          'artist': 'Ed Sheeran',
          'title': 'Perfect',
          'year': 2017
        },
        {
          'position': 86,
          'artist': 'Animals',
          'title': 'House Of The Rising Sun',
          'year': 1964
        },
        {
          'position': 87,
          'artist': 'Radiohead',
          'title': 'Creep',
          'year': 1992
        },
        {
          'position': 88,
          'artist': 'Queen',
          'title': 'Killer Queen',
          'year': 1974
        },
        {
          'position': 89,
          'artist': 'Metallica',
          'title': 'Master Of puppets',
          'year': 1986
        },
        {
          'position': 90,
          'artist': 'Otis Redding',
          'title': 'The Dock Of The Bay',
          'year': 1968
        },
        {
          'position': 91,
          'artist': 'Michael Kiwanuka',
          'title': 'Cold Little Heart',
          'year': 2016
        },
        {
          'position': 92,
          'artist': 'Supertramp',
          'title': 'Fool\'s Overture',
          'year': 1977
        },
        {
          'position': 93,
          'artist': 'Billy Joel',
          'title': 'Goodnight Saigon',
          'year': 1983
        },
        {
          'position': 94,
          'artist': 'Stef Bos',
          'title': 'Papa',
          'year': 1991
        },
        {
          'position': 95,
          'artist': 'Snow Patrol',
          'title': 'Chasing Cars',
          'year': 2006
        },
        {
          'position': 96,
          'artist': 'The Verve',
          'title': 'Bitter Sweet Symphony',
          'year': 1997
        },
        {
          'position': 97,
          'artist': 'Adele',
          'title': 'Someone Like You',
          'year': 2011
        },
        {
          'position': 98,
          'artist': 'Muse',
          'title': 'Uprising',
          'year': 2009
        },
        {
          'position': 99,
          'artist': 'Rolling Stones',
          'title': 'Gimme Shelter',
          'year': 1969
        },
        {
          'position': 100,
          'artist': 'Avicii ft. Aloe Blacc',
          'title': 'Wake Me Up',
          'year': 2013
        }
      ]
    },
    {
      'edition': 2019,
      'songs': [
        {
          'position': 1,
          'artist': 'Queen',
          'title': 'Bohemian Rhapsody',
          'year': 1975
        },
        {
          'position': 2,
          'artist': 'Eagles',
          'title': 'Hotel California',
          'year': 1977
        },
        {
          'position': 3,
          'artist': 'Billy Joel',
          'title': 'Piano Man',
          'year': 1974
        },
        {
          'position': 4,
          'artist': 'Danny Vera',
          'title': 'Roller Coaster',
          'year': 2019
        },
        {
          'position': 5,
          'artist': 'Led Zeppelin',
          'title': 'Stairway To Heaven',
          'year': 1971
        },
        {
          'position': 6,
          'artist': 'Boudewijn de Groot',
          'title': 'Avond',
          'year': 1997
        },
        {
          'position': 7,
          'artist': 'Pearl Jam',
          'title': 'Black',
          'year': 1992
        },
        {
          'position': 8,
          'artist': 'Coldplay',
          'title': 'Fix You',
          'year': 2005
        },
        {
          'position': 9,
          'artist': 'Normaal',
          'title': 'De Boer Dat Is De Keerl',
          'year': 1993
        },
        {
          'position': 10,
          'artist': 'Pink Floyd',
          'title': 'Wish You Were Here',
          'year': 1975
        },
        {
          'position': 11,
          'artist': 'Toto',
          'title': 'Africa',
          'year': 1982
        },
        {
          'position': 12,
          'artist': 'Deep Purple',
          'title': 'Child In Time',
          'year': 1970
        },
        {
          'position': 13,
          'artist': 'Queen',
          'title': 'Love Of My Life',
          'year': 1975
        },
        {
          'position': 14,
          'artist': 'Guns N\' Roses',
          'title': 'November Rain',
          'year': 1992
        },
        {
          'position': 15,
          'artist': 'Metallica',
          'title': 'Nothing Else Matters',
          'year': 1992
        },
        {
          'position': 16,
          'artist': 'Pink Floyd',
          'title': 'Comfortably Numb',
          'year': 1979
        },
        {
          'position': 17,
          'artist': 'Dire Straits',
          'title': 'Brothers In Arms',
          'year': 1985
        },
        {
          'position': 18,
          'artist': 'Disturbed',
          'title': 'The Sound Of Silence',
          'year': 2016
        },
        {
          'position': 19,
          'artist': 'Bruce Springsteen',
          'title': 'The River',
          'year': 1981
        },
        {
          'position': 20,
          'artist': 'AC/DC',
          'title': 'Thunderstruck',
          'year': 1990
        },
        {
          'position': 21,
          'artist': 'Metallica',
          'title': 'One',
          'year': 1994
        },
        {
          'position': 22,
          'artist': 'Pink Floyd',
          'title': 'Shine On You Crazy Diamond (Pts. 1-5)',
          'year': 1975
        },
        {
          'position': 23,
          'artist': 'Golden Earring',
          'title': 'Radar Love',
          'year': 1973
        },
        {
          'position': 24,
          'artist': 'Prince & The Revolution',
          'title': 'Purple Rain',
          'year': 1984
        },
        {
          'position': 25,
          'artist': 'Wim Sonneveld',
          'title': 'Het Dorp',
          'year': 1974
        },
        {
          'position': 26,
          'artist': 'Dire Straits',
          'title': 'Sultans Of Swing',
          'year': 1978
        },
        {
          'position': 27,
          'artist': 'David Bowie',
          'title': 'Heroes',
          'year': 1976
        },
        {
          'position': 28,
          'artist': 'Simon & Garfunkel',
          'title': 'The Sound Of Silence',
          'year': 1966
        },
        {
          'position': 29,
          'artist': 'John Lennon',
          'title': 'Imagine',
          'year': 1971
        },
        {
          'position': 30,
          'artist': 'Klein Orkest',
          'title': 'Over De Muur',
          'year': 1984
        },
        {
          'position': 31,
          'artist': 'Johnny Cash',
          'title': 'Hurt',
          'year': 2002
        },
        {
          'position': 32,
          'artist': 'Guns N\' Roses',
          'title': 'Sweet Child O\' Mine',
          'year': 1987
        },
        {
          'position': 33,
          'artist': 'Pearl Jam',
          'title': 'Just Breathe',
          'year': 2009
        },
        {
          'position': 34,
          'artist': 'Racoon',
          'title': 'Oceaan',
          'year': 2012
        },
        {
          'position': 35,
          'artist': 'Meat Loaf',
          'title': 'Paradise By The Dashboard Light',
          'year': 1978
        },
        {
          'position': 36,
          'artist': 'Coldplay',
          'title': 'Viva La Vida',
          'year': 2008
        },
        {
          'position': 37,
          'artist': 'Nirvana',
          'title': 'Smells Like Teen Spirit',
          'year': 1991
        },
        {
          'position': 38,
          'artist': 'Claudia de Breij',
          'title': 'Mag Ik Dan Bij Jou',
          'year': 2011
        },
        {
          'position': 39,
          'artist': 'Queen',
          'title': 'Innuendo',
          'year': 1991
        },
        {
          'position': 40,
          'artist': 'Dire Straits',
          'title': 'Telegraph Road',
          'year': 1982
        },
        {
          'position': 41,
          'artist': 'Supertramp',
          'title': 'School',
          'year': 1974
        },
        {
          'position': 42,
          'artist': 'Queen',
          'title': 'Somebody To Love',
          'year': 1976
        },
        {
          'position': 43,
          'artist': 'Fleetwood Mac',
          'title': 'Go Your Own Way',
          'year': 1977
        },
        {
          'position': 44,
          'artist': 'The Cure',
          'title': 'A Forest',
          'year': 1980
        },
        {
          'position': 45,
          'artist': 'Lady Gaga & Bradley Cooper',
          'title': 'Shallow',
          'year': 2018
        },
        {
          'position': 46,
          'artist': 'Coldplay',
          'title': 'The Scientist',
          'year': 2002
        },
        {
          'position': 47,
          'artist': 'The Rolling Stones',
          'title': 'Paint It Black',
          'year': 1966
        },
        {
          'position': 48,
          'artist': 'Phil Collins',
          'title': 'In The Air Tonight',
          'year': 1981
        },
        {
          'position': 49,
          'artist': 'Queen',
          'title': 'Don\'t Stop Me Now',
          'year': 1979
        },
        {
          'position': 50,
          'artist': 'Guus Meeuwis',
          'title': 'Brabant',
          'year': 2003
        },
        {
          'position': 51,
          'artist': 'Bl\u00f8f ft. Geike',
          'title': 'Zoutelande',
          'year': 2017
        },
        {
          'position': 52,
          'artist': 'Linkin Park',
          'title': 'In The End',
          'year': 2000
        },
        {
          'position': 53,
          'artist': 'The Beatles',
          'title': 'Let It Be',
          'year': 1970
        },
        {
          'position': 54,
          'artist': 'Queen & David Bowie',
          'title': 'Under Pressure',
          'year': 1981
        },
        {
          'position': 55,
          'artist': 'U2',
          'title': 'With Or Without You',
          'year': 1987
        },
        {
          'position': 56,
          'artist': 'Pearl Jam',
          'title': 'Alive',
          'year': 1992
        },
        {
          'position': 57,
          'artist': 'U2',
          'title': 'One',
          'year': 1992
        },
        {
          'position': 58,
          'artist': 'Amy Winehouse',
          'title': 'Back To Black',
          'year': 2007
        },
        {
          'position': 59,
          'artist': 'The Beach Boys',
          'title': 'God Only Knows',
          'year': 1966
        },
        {
          'position': 60,
          'artist': 'Rage Against The Machine',
          'title': 'Killing In The Name',
          'year': 1992
        },
        {
          'position': 61,
          'artist': 'U2',
          'title': 'Sunday Bloody Sunday',
          'year': 1985
        },
        {
          'position': 62,
          'artist': 'Electric Light Orchestra',
          'title': 'Mr. Blue Sky',
          'year': 1978
        },
        {
          'position': 63,
          'artist': 'Kensington',
          'title': 'Sorry',
          'year': 2016
        },
        {
          'position': 64,
          'artist': 'Metallica',
          'title': 'Enter Sandman',
          'year': 1991
        },
        {
          'position': 65,
          'artist': 'The Rolling Stones',
          'title': 'Sympathy For The Devil',
          'year': 1973
        },
        {
          'position': 66,
          'artist': 'AC/DC',
          'title': 'Highway To Hell',
          'year': 1979
        },
        {
          'position': 67,
          'artist': 'Michael Kiwanuka',
          'title': 'Cold Little Heart',
          'year': 2016
        },
        {
          'position': 68,
          'artist': 'ABBA',
          'title': 'Dancing Queen',
          'year': 1976
        },
        {
          'position': 69,
          'artist': 'Pink Floyd',
          'title': 'Another Brick In The Wall',
          'year': 1979
        },
        {
          'position': 70,
          'artist': 'Stef Bos',
          'title': 'Papa',
          'year': 1991
        },
        {
          'position': 71,
          'artist': 'Supertramp',
          'title': 'Fool\'s Overture',
          'year': 1977
        },
        {
          'position': 72,
          'artist': 'The Beatles',
          'title': 'Hey Jude',
          'year': 1968
        },
        {
          'position': 73,
          'artist': 'Ramses Shaffy & Liesbeth List',
          'title': 'Pastorale',
          'year': 1969
        },
        {
          'position': 74,
          'artist': 'Queen',
          'title': 'Who Wants To Live Forever',
          'year': 1986
        },
        {
          'position': 75,
          'artist': 'The Doors',
          'title': 'Riders On The Storm',
          'year': 1971
        },
        {
          'position': 76,
          'artist': 'The Alan Parsons Project',
          'title': 'Old And Wise',
          'year': 1982
        },
        {
          'position': 77,
          'artist': 'The Beatles',
          'title': 'Here Comes The Sun',
          'year': 1969
        },
        {
          'position': 78,
          'artist': 'Red Hot Chili Peppers',
          'title': 'Under The Bridge',
          'year': 1991
        },
        {
          'position': 79,
          'artist': 'George Michael & Queen',
          'title': 'Somebody To Love (Live)',
          'year': 1993
        },
        {
          'position': 80,
          'artist': 'Coldplay',
          'title': 'Clocks',
          'year': 2003
        },
        {
          'position': 81,
          'artist': 'AC/DC',
          'title': 'Whole Lotta Rosie',
          'year': 1978
        },
        {
          'position': 82,
          'artist': 'Simon & Garfunkel',
          'title': 'Bridge Over Troubled Water',
          'year': 1970
        },
        {
          'position': 83,
          'artist': 'Radiohead',
          'title': 'Creep',
          'year': 1992
        },
        {
          'position': 84,
          'artist': 'Normaal',
          'title': 'Deurdonderen (Live)',
          'year': 1982
        },
        {
          'position': 85,
          'artist': 'Metallica',
          'title': 'Master Of Puppets',
          'year': 1986
        },
        {
          'position': 86,
          'artist': 'Paolo Nutini',
          'title': 'Iron Sky',
          'year': 2014
        },
        {
          'position': 87,
          'artist': 'Dire Straits',
          'title': 'Private Investigations',
          'year': 1982
        },
        {
          'position': 88,
          'artist': 'Normaal',
          'title': 'Oerend Hard',
          'year': 1977
        },
        {
          'position': 89,
          'artist': 'Robbie Williams',
          'title': 'Angels',
          'year': 1998
        },
        {
          'position': 90,
          'artist': 'The Rolling Stones',
          'title': 'Angie',
          'year': 1973
        },
        {
          'position': 91,
          'artist': 'Eric Clapton',
          'title': 'Tears In Heaven',
          'year': 1992
        },
        {
          'position': 92,
          'artist': 'David Bowie',
          'title': 'Space Oddity',
          'year': 1969
        },
        {
          'position': 93,
          'artist': 'Ramses Shaffy',
          'title': 'Laat Me',
          'year': 1978
        },
        {
          'position': 94,
          'artist': 'The Beatles',
          'title': 'Yesterday',
          'year': 1965
        },
        {
          'position': 95,
          'artist': 'Eminem',
          'title': 'Lose Yourself',
          'year': 2002
        },
        {
          'position': 96,
          'artist': 'Marco Borsato',
          'title': 'Dochters',
          'year': 2008
        },
        {
          'position': 97,
          'artist': 'Dolly Parton',
          'title': 'Jolene',
          'year': 1974
        },
        {
          'position': 98,
          'artist': 'U2',
          'title': 'Where The Streets Have No Name',
          'year': 1987
        },
        {
          'position': 99,
          'artist': 'Otis Redding',
          'title': '(Sittin\' On) The Dock Of The Bay',
          'year': 1968
        },
        {
          'position': 100,
          'artist': 'The Rolling Stones',
          'title': 'Gimme Shelter',
          'year': 1969
        }
      ]
    },
    {
      'edition': 2020,
      'songs': [
        {
          'position': 1,
          'artist': 'Danny Vera',
          'title': 'Roller Coaster',
          'year': 2019
        },
        {
          'position': 2,
          'artist': 'Queen',
          'title': 'Bohemian Rhapsody',
          'year': 1975
        },
        {
          'position': 3,
          'artist': 'Eagles',
          'title': 'Hotel California',
          'year': 1977
        },
        {
          'position': 4,
          'artist': 'Billy Joel',
          'title': 'Piano Man',
          'year': 1974
        },
        {
          'position': 5,
          'artist': 'Led Zeppelin',
          'title': 'Stairway To Heaven',
          'year': 1971
        },
        {
          'position': 6,
          'artist': 'Pearl Jam',
          'title': 'Black',
          'year': 1992
        },
        {
          'position': 7,
          'artist': 'Boudewijn de Groot',
          'title': 'Avond',
          'year': 1997
        },
        {
          'position': 8,
          'artist': 'Coldplay',
          'title': 'Fix You',
          'year': 2005
        },
        {
          'position': 9,
          'artist': 'Pink Floyd',
          'title': 'Wish You Were Here',
          'year': 1975
        },
        {
          'position': 10,
          'artist': 'David Bowie',
          'title': 'Heroes',
          'year': 1976
        },
        {
          'position': 11,
          'artist': 'Queen',
          'title': 'Love Of My Life',
          'year': 1975
        },
        {
          'position': 12,
          'artist': 'Di-rect',
          'title': 'Soldier On',
          'year': 2020
        },
        {
          'position': 13,
          'artist': 'Prince & The Revolution',
          'title': 'Purple Rain',
          'year': 1984
        },
        {
          'position': 14,
          'artist': 'Toto',
          'title': 'Africa',
          'year': 1982
        },
        {
          'position': 15,
          'artist': 'Deep Purple',
          'title': 'Child In Time',
          'year': 1970
        },
        {
          'position': 16,
          'artist': 'Guns N\' Roses',
          'title': 'November Rain',
          'year': 1992
        },
        {
          'position': 17,
          'artist': 'Metallica',
          'title': 'Nothing Else Matters',
          'year': 1992
        },
        {
          'position': 18,
          'artist': 'Dire Straits',
          'title': 'Brothers In Arms',
          'year': 1985
        },
        {
          'position': 19,
          'artist': 'Pink Floyd',
          'title': 'Comfortably Numb',
          'year': 1979
        },
        {
          'position': 20,
          'artist': 'Disturbed',
          'title': 'The Sound Of Silence',
          'year': 2016
        },
        {
          'position': 21,
          'artist': 'Bruce Springsteen',
          'title': 'The River',
          'year': 1981
        },
        {
          'position': 22,
          'artist': 'Racoon',
          'title': 'Oceaan',
          'year': 2012
        },
        {
          'position': 23,
          'artist': 'Simon & Garfunkel',
          'title': 'The Sound Of Silence',
          'year': 1966
        },
        {
          'position': 24,
          'artist': 'AC/DC',
          'title': 'Thunderstruck',
          'year': 1990
        },
        {
          'position': 25,
          'artist': 'Nirvana',
          'title': 'Smells Like Teen Spirit',
          'year': 1991
        },
        {
          'position': 26,
          'artist': 'John Lennon',
          'title': 'Imagine',
          'year': 1971
        },
        {
          'position': 27,
          'artist': 'Dire Straits',
          'title': 'Sultans Of Swing',
          'year': 1978
        },
        {
          'position': 28,
          'artist': 'Pink Floyd',
          'title': 'Shine On You Crazy Diamond (Pts. 1-5)',
          'year': 1975
        },
        {
          'position': 29,
          'artist': 'Miss Montreal',
          'title': 'Door de wind',
          'year': 2020
        },
        {
          'position': 30,
          'artist': 'Metallica',
          'title': 'One',
          'year': 1994
        },
        {
          'position': 31,
          'artist': 'Stef Bos',
          'title': 'Papa',
          'year': 1991
        },
        {
          'position': 32,
          'artist': 'Pearl Jam',
          'title': 'Just Breathe',
          'year': 2009
        },
        {
          'position': 33,
          'artist': 'Golden Earring',
          'title': 'Radar Love',
          'year': 1973
        },
        {
          'position': 34,
          'artist': 'Meat Loaf',
          'title': 'Paradise By The Dashboard Light',
          'year': 1978
        },
        {
          'position': 35,
          'artist': 'Guns N\' Roses',
          'title': 'Sweet Child O\' Mine',
          'year': 1987
        },
        {
          'position': 36,
          'artist': 'Phil Collins',
          'title': 'In The Air Tonight',
          'year': 1981
        },
        {
          'position': 37,
          'artist': 'Lady Gaga & Bradley Cooper',
          'title': 'Shallow',
          'year': 2018
        },
        {
          'position': 38,
          'artist': 'Klein Orkest',
          'title': 'Over De Muur',
          'year': 1984
        },
        {
          'position': 39,
          'artist': 'The Cure',
          'title': 'A Forest',
          'year': 1980
        },
        {
          'position': 40,
          'artist': 'Johnny Cash',
          'title': 'Hurt',
          'year': 2002
        },
        {
          'position': 41,
          'artist': 'Fleetwood Mac',
          'title': 'Go Your Own Way',
          'year': 1977
        },
        {
          'position': 42,
          'artist': 'Dire Straits',
          'title': 'Telegraph Road',
          'year': 1982
        },
        {
          'position': 43,
          'artist': 'Coldplay',
          'title': 'Viva La Vida',
          'year': 2008
        },
        {
          'position': 44,
          'artist': 'The Rolling Stones',
          'title': 'Paint It Black',
          'year': 1966
        },
        {
          'position': 45,
          'artist': 'Supertramp',
          'title': 'School',
          'year': 1974
        },
        {
          'position': 46,
          'artist': 'Queen',
          'title': 'Innuendo',
          'year': 1991
        },
        {
          'position': 47,
          'artist': 'Wim Sonneveld',
          'title': 'Het Dorp',
          'year': 1974
        },
        {
          'position': 48,
          'artist': 'Simon & Garfunkel',
          'title': 'Bridge Over Troubled Water',
          'year': 1970
        },
        {
          'position': 49,
          'artist': 'Linkin Park',
          'title': 'In The End',
          'year': 2000
        },
        {
          'position': 50,
          'artist': 'The Beatles',
          'title': 'Let It Be',
          'year': 1970
        },
        {
          'position': 51,
          'artist': 'Rage Against The Machine',
          'title': 'Killing In The Name',
          'year': 1992
        },
        {
          'position': 52,
          'artist': 'U2',
          'title': 'Sunday Bloody Sunday',
          'year': 1985
        },
        {
          'position': 53,
          'artist': 'U2',
          'title': 'With Or Without You',
          'year': 1987
        },
        {
          'position': 54,
          'artist': 'Claudia de Breij',
          'title': 'Mag Ik Dan Bij Jou',
          'year': 2011
        },
        {
          'position': 55,
          'artist': 'Queen',
          'title': 'Don\'t Stop Me Now',
          'year': 1979
        },
        {
          'position': 56,
          'artist': 'ABBA',
          'title': 'Dancing Queen',
          'year': 1976
        },
        {
          'position': 57,
          'artist': 'Pearl Jam',
          'title': 'Alive',
          'year': 1992
        },
        {
          'position': 58,
          'artist': 'Amy Winehouse',
          'title': 'Back To Black',
          'year': 2007
        },
        {
          'position': 59,
          'artist': 'Queen & David Bowie',
          'title': 'Under Pressure',
          'year': 1981
        },
        {
          'position': 60,
          'artist': 'George Michael & Queen',
          'title': 'Somebody To Love (Live)',
          'year': 1993
        },
        {
          'position': 61,
          'artist': 'Coldplay',
          'title': 'The Scientist',
          'year': 2002
        },
        {
          'position': 62,
          'artist': 'Radiohead',
          'title': 'Creep',
          'year': 1992
        },
        {
          'position': 63,
          'artist': 'The Beach Boys',
          'title': 'God Only Knows',
          'year': 1966
        },
        {
          'position': 64,
          'artist': 'Dolly Parton',
          'title': 'Jolene',
          'year': 1974
        },
        {
          'position': 65,
          'artist': 'Michael Kiwanuka',
          'title': 'Cold Little Heart',
          'year': 2016
        },
        {
          'position': 66,
          'artist': 'The Rolling Stones',
          'title': 'Sympathy For The Devil',
          'year': 1973
        },
        {
          'position': 67,
          'artist': 'U2',
          'title': 'One',
          'year': 1992
        },
        {
          'position': 68,
          'artist': 'Metallica',
          'title': 'Enter Sandman',
          'year': 1991
        },
        {
          'position': 69,
          'artist': 'Guus Meeuwis',
          'title': 'Brabant',
          'year': 2003
        },
        {
          'position': 70,
          'artist': 'Queen',
          'title': 'Somebody To Love',
          'year': 1976
        },
        {
          'position': 71,
          'artist': 'Bl\u00f8f ft. Geike',
          'title': 'Zoutelande',
          'year': 2017
        },
        {
          'position': 72,
          'artist': 'Electric Light Orchestra',
          'title': 'Mr. Blue Sky',
          'year': 1978
        },
        {
          'position': 73,
          'artist': 'Liesbeth List & Ramses Shaffy',
          'title': 'Pastorale',
          'year': 1969
        },
        {
          'position': 74,
          'artist': 'Eminem',
          'title': 'Lose Yourself',
          'year': 2002
        },
        {
          'position': 75,
          'artist': 'Supertramp',
          'title': 'Fool\'s Overture',
          'year': 1977
        },
        {
          'position': 76,
          'artist': 'Kensington',
          'title': 'Sorry',
          'year': 2016
        },
        {
          'position': 77,
          'artist': 'Pink Floyd',
          'title': 'Another Brick In The Wall',
          'year': 1979
        },
        {
          'position': 78,
          'artist': 'AC/DC',
          'title': 'Highway To Hell',
          'year': 1979
        },
        {
          'position': 79,
          'artist': 'The Rolling Stones',
          'title': 'Angie',
          'year': 1973
        },
        {
          'position': 80,
          'artist': 'Red Hot Chili Peppers',
          'title': 'Under The Bridge',
          'year': 1991
        },
        {
          'position': 81,
          'artist': 'The Doors',
          'title': 'Riders On The Storm',
          'year': 1971
        },
        {
          'position': 82,
          'artist': 'Robbie Williams',
          'title': 'Angels',
          'year': 1998
        },
        {
          'position': 83,
          'artist': 'The Beatles',
          'title': 'Here Comes The Sun',
          'year': 1969
        },
        {
          'position': 84,
          'artist': 'The Alan Parsons Project',
          'title': 'Old And Wise',
          'year': 1982
        },
        {
          'position': 85,
          'artist': 'Queen',
          'title': 'Who Wants To Live Forever',
          'year': 1986
        },
        {
          'position': 86,
          'artist': 'Paolo Nutini',
          'title': 'Iron Sky',
          'year': 2014
        },
        {
          'position': 87,
          'artist': 'Kensington',
          'title': 'Uncharted',
          'year': 2019
        },
        {
          'position': 88,
          'artist': 'Metallica',
          'title': 'Master Of Puppets',
          'year': 1986
        },
        {
          'position': 89,
          'artist': 'Queen',
          'title': 'The Show Must Go On',
          'year': 1991
        },
        {
          'position': 90,
          'artist': 'Otis Redding',
          'title': '(Sittin\' On) The Dock Of The Bay',
          'year': 1968
        },
        {
          'position': 91,
          'artist': 'AC/DC',
          'title': 'Whole Lotta Rosie',
          'year': 1978
        },
        {
          'position': 92,
          'artist': 'The Beatles',
          'title': 'Hey Jude',
          'year': 1968
        },
        {
          'position': 93,
          'artist': 'Muse',
          'title': 'Uprising',
          'year': 2009
        },
        {
          'position': 94,
          'artist': 'Snow Patrol',
          'title': 'Chasing Cars',
          'year': 2006
        },
        {
          'position': 95,
          'artist': 'Dire Straits',
          'title': 'Private Investigations',
          'year': 1982
        },
        {
          'position': 96,
          'artist': 'Coldplay',
          'title': 'Clocks',
          'year': 2003
        },
        {
          'position': 97,
          'artist': 'Ramses Shaffy',
          'title': 'Laat Me',
          'year': 1978
        },
        {
          'position': 98,
          'artist': 'The Weeknd',
          'title': 'Blinding Lights',
          'year': 2019
        },
        {
          'position': 99,
          'artist': 'U2',
          'title': 'Where The Streets Have No Name',
          'year': 1987
        },
        {
          'position': 100,
          'artist': 'The Rolling Stones',
          'title': 'Gimme Shelter',
          'year': 1969
        }
      ]
    },
    {
      'edition': 2021,
      'songs': [
        {
          'position': 1,
          'artist': 'Queen',
          'title': 'Bohemian Rhapsody',
          'year': 1975
        },
        {
          'position': 2,
          'artist': 'Danny Vera',
          'title': 'Roller Coaster',
          'year': 2019
        },
        {
          'position': 3,
          'artist': 'Procol Harum',
          'title': 'A Whiter Shade Of Pale',
          'year': 1967
        },
        {
          'position': 4,
          'artist': 'Eagles',
          'title': 'Hotel California',
          'year': 1977
        },
        {
          'position': 5,
          'artist': 'Billy Joel',
          'title': 'Piano Man',
          'year': 1974
        },
        {
          'position': 6,
          'artist': 'Golden Earring',
          'title': 'Radar Love',
          'year': 1973
        },
        {
          'position': 7,
          'artist': 'Led Zeppelin',
          'title': 'Stairway To Heaven',
          'year': 1971
        },
        {
          'position': 8,
          'artist': 'Metallica',
          'title': 'Nothing Else Matters',
          'year': 1992
        },
        {
          'position': 9,
          'artist': 'Pearl Jam',
          'title': 'Black',
          'year': 1992
        },
        {
          'position': 10,
          'artist': 'Boudewijn de Groot',
          'title': 'Avond',
          'year': 1997
        },
        {
          'position': 11,
          'artist': 'Coldplay',
          'title': 'Fix You',
          'year': 2005
        },
        {
          'position': 12,
          'artist': 'Queen',
          'title': 'Love Of My Life',
          'year': 1975
        },
        {
          'position': 13,
          'artist': 'Pink Floyd',
          'title': 'Wish You Were Here',
          'year': 1975
        },
        {
          'position': 14,
          'artist': 'Di-rect',
          'title': 'Soldier On',
          'year': 2020
        },
        {
          'position': 15,
          'artist': 'Deep Purple',
          'title': 'Child In Time',
          'year': 1970
        },
        {
          'position': 16,
          'artist': 'Bruce Springsteen',
          'title': 'The River',
          'year': 1981
        },
        {
          'position': 17,
          'artist': 'Guns N\' Roses',
          'title': 'November Rain',
          'year': 1992
        },
        {
          'position': 18,
          'artist': 'Dire Straits',
          'title': 'Brothers In Arms',
          'year': 1985
        },
        {
          'position': 19,
          'artist': 'Disturbed',
          'title': 'The Sound Of Silence',
          'year': 2016
        },
        {
          'position': 20,
          'artist': 'Miss Montreal',
          'title': 'Door De Wind',
          'year': 2020
        },
        {
          'position': 21,
          'artist': 'Prince & The Revolution',
          'title': 'Purple Rain',
          'year': 1984
        },
        {
          'position': 22,
          'artist': 'Pink Floyd',
          'title': 'Comfortably Numb',
          'year': 1979
        },
        {
          'position': 23,
          'artist': 'Toto',
          'title': 'Africa',
          'year': 1982
        },
        {
          'position': 24,
          'artist': 'David Bowie',
          'title': 'Heroes',
          'year': 1976
        },
        {
          'position': 25,
          'artist': 'Dire Straits',
          'title': 'Sultans Of Swing',
          'year': 1978
        },
        {
          'position': 26,
          'artist': 'Metallica',
          'title': 'One',
          'year': 1994
        },
        {
          'position': 27,
          'artist': 'Racoon',
          'title': 'Oceaan',
          'year': 2012
        },
        {
          'position': 28,
          'artist': 'Simon & Garfunkel',
          'title': 'The Sound Of Silence',
          'year': 1966
        },
        {
          'position': 29,
          'artist': 'Pink Floyd',
          'title': 'Shine On You Crazy Diamond (Pts. 1-5)',
          'year': 1975
        },
        {
          'position': 30,
          'artist': 'Nirvana',
          'title': 'Smells Like Teen Spirit',
          'year': 1991
        },
        {
          'position': 31,
          'artist': 'AC/DC',
          'title': 'Thunderstruck',
          'year': 1990
        },
        {
          'position': 32,
          'artist': 'Pearl Jam',
          'title': 'Just Breathe',
          'year': 2009
        },
        {
          'position': 33,
          'artist': 'Guns N\' Roses',
          'title': 'Sweet Child O\' Mine',
          'year': 1987
        },
        {
          'position': 34,
          'artist': 'John Lennon',
          'title': 'Imagine',
          'year': 1971
        },
        {
          'position': 35,
          'artist': 'Meat Loaf',
          'title': 'Paradise By The Dashboard Light',
          'year': 1978
        },
        {
          'position': 36,
          'artist': 'Dire Straits',
          'title': 'Telegraph Road',
          'year': 1982
        },
        {
          'position': 37,
          'artist': 'Phil Collins',
          'title': 'In The Air Tonight',
          'year': 1981
        },
        {
          'position': 38,
          'artist': 'Lady Gaga & Bradley Cooper',
          'title': 'Shallow',
          'year': 2018
        },
        {
          'position': 39,
          'artist': 'Klein Orkest',
          'title': 'Over De Muur',
          'year': 1984
        },
        {
          'position': 40,
          'artist': 'The Cure',
          'title': 'A Forest',
          'year': 1980
        },
        {
          'position': 41,
          'artist': 'Johnny Cash',
          'title': 'Hurt',
          'year': 2002
        },
        {
          'position': 42,
          'artist': 'Queen',
          'title': 'Innuendo',
          'year': 1991
        },
        {
          'position': 43,
          'artist': 'Coldplay',
          'title': 'Viva La Vida',
          'year': 2008
        },
        {
          'position': 44,
          'artist': 'ABBA',
          'title': 'Dancing Queen',
          'year': 1976
        },
        {
          'position': 45,
          'artist': 'Fleetwood Mac',
          'title': 'Go Your Own Way',
          'year': 1977
        },
        {
          'position': 46,
          'artist': 'Linkin Park',
          'title': 'In The End',
          'year': 2000
        },
        {
          'position': 47,
          'artist': 'Supertramp',
          'title': 'School',
          'year': 1974
        },
        {
          'position': 48,
          'artist': 'Rage Against The Machine',
          'title': 'Killing In The Name',
          'year': 1992
        },
        {
          'position': 49,
          'artist': 'Michael Kiwanuka',
          'title': 'Cold Little Heart',
          'year': 2016
        },
        {
          'position': 50,
          'artist': 'The Rolling Stones',
          'title': 'Paint It Black',
          'year': 1966
        },
        {
          'position': 51,
          'artist': 'Metallica',
          'title': 'Enter Sandman',
          'year': 1991
        },
        {
          'position': 52,
          'artist': 'Stef Bos',
          'title': 'Papa',
          'year': 1991
        },
        {
          'position': 53,
          'artist': 'Golden Earring',
          'title': 'When The Lady Smiles',
          'year': 1984
        },
        {
          'position': 54,
          'artist': 'Wim Sonneveld',
          'title': 'Het Dorp',
          'year': 1974
        },
        {
          'position': 55,
          'artist': 'Simon & Garfunkel',
          'title': 'Bridge Over Troubled Water',
          'year': 1970
        },
        {
          'position': 56,
          'artist': 'Amy Winehouse',
          'title': 'Back To Black',
          'year': 2007
        },
        {
          'position': 57,
          'artist': 'Queen',
          'title': 'Don\'t Stop Me Now',
          'year': 1979
        },
        {
          'position': 58,
          'artist': 'Pearl Jam',
          'title': 'Alive',
          'year': 1992
        },
        {
          'position': 59,
          'artist': 'The Beatles',
          'title': 'Let It Be',
          'year': 1970
        },
        {
          'position': 60,
          'artist': 'Liesbeth List & Ramses Shaffy',
          'title': 'Pastorale',
          'year': 1969
        },
        {
          'position': 61,
          'artist': 'U2',
          'title': 'Sunday Bloody Sunday',
          'year': 1985
        },
        {
          'position': 62,
          'artist': 'The Beach Boys',
          'title': 'God Only Knows',
          'year': 1966
        },
        {
          'position': 63,
          'artist': 'The Rolling Stones',
          'title': 'Sympathy For The Devil',
          'year': 1973
        },
        {
          'position': 64,
          'artist': 'Kensington',
          'title': 'Sorry',
          'year': 2016
        },
        {
          'position': 65,
          'artist': 'Metallica',
          'title': 'Master Of Puppets',
          'year': 1986
        },
        {
          'position': 66,
          'artist': 'Radiohead',
          'title': 'Creep',
          'year': 1992
        },
        {
          'position': 67,
          'artist': 'U2',
          'title': 'With Or Without You',
          'year': 1987
        },
        {
          'position': 68,
          'artist': 'Electric Light Orchestra',
          'title': 'Mr. Blue Sky',
          'year': 1978
        },
        {
          'position': 69,
          'artist': 'Queen & David Bowie',
          'title': 'Under Pressure',
          'year': 1981
        },
        {
          'position': 70,
          'artist': 'Paolo Nutini',
          'title': 'Iron Sky',
          'year': 2014
        },
        {
          'position': 71,
          'artist': 'Supertramp',
          'title': 'Fool\'s Overture',
          'year': 1977
        },
        {
          'position': 72,
          'artist': 'Coldplay',
          'title': 'The Scientist',
          'year': 2002
        },
        {
          'position': 73,
          'artist': 'Pink Floyd',
          'title': 'Another Brick In The Wall',
          'year': 1979
        },
        {
          'position': 74,
          'artist': 'U2',
          'title': 'One',
          'year': 1992
        },
        {
          'position': 75,
          'artist': 'Floor Jansen & Henk Poort',
          'title': 'Phantom Of The Opera',
          'year': 2019
        },
        {
          'position': 76,
          'artist': 'Eminem',
          'title': 'Lose Yourself',
          'year': 2002
        },
        {
          'position': 77,
          'artist': 'Fleetwood Mac',
          'title': 'The Chain',
          'year': 1977
        },
        {
          'position': 78,
          'artist': 'George Michael & Queen',
          'title': 'Somebody To Love (Live)',
          'year': 1993
        },
        {
          'position': 79,
          'artist': 'Muse',
          'title': 'Uprising',
          'year': 2009
        },
        {
          'position': 80,
          'artist': 'The Alan Parsons Project',
          'title': 'Old And Wise',
          'year': 1982
        },
        {
          'position': 81,
          'artist': 'Queen',
          'title': 'Somebody To Love',
          'year': 1976
        },
        {
          'position': 82,
          'artist': 'The Beatles',
          'title': 'Here Comes The Sun',
          'year': 1969
        },
        {
          'position': 83,
          'artist': 'Guus Meeuwis',
          'title': 'Brabant',
          'year': 2003
        },
        {
          'position': 84,
          'artist': 'Red Hot Chili Peppers',
          'title': 'Under The Bridge',
          'year': 1991
        },
        {
          'position': 85,
          'artist': 'Volbeat',
          'title': 'Lola Montez',
          'year': 2013
        },
        {
          'position': 86,
          'artist': 'Claudia de Breij',
          'title': 'Mag Ik Dan Bij Jou',
          'year': 2011
        },
        {
          'position': 87,
          'artist': 'The Doors',
          'title': 'Riders On The Storm',
          'year': 1971
        },
        {
          'position': 88,
          'artist': 'AC/DC',
          'title': 'Highway To Hell',
          'year': 1979
        },
        {
          'position': 89,
          'artist': 'Queen',
          'title': 'Who Wants To Live Forever',
          'year': 1986
        },
        {
          'position': 90,
          'artist': 'Eric Clapton',
          'title': 'Tears In Heaven',
          'year': 1992
        },
        {
          'position': 91,
          'artist': 'The Rolling Stones',
          'title': 'Angie',
          'year': 1973
        },
        {
          'position': 92,
          'artist': 'Robbie Williams',
          'title': 'Angels',
          'year': 1998
        },
        {
          'position': 93,
          'artist': 'Dire Straits',
          'title': 'Private Investigations',
          'year': 1982
        },
        {
          'position': 94,
          'artist': 'Kensington',
          'title': 'Uncharted',
          'year': 2019
        },
        {
          'position': 95,
          'artist': 'Golden Earring',
          'title': 'Another 45 Miles',
          'year': 1969
        },
        {
          'position': 96,
          'artist': 'Bl\u00f8f ft. Geike',
          'title': 'Zoutelande',
          'year': 2017
        },
        {
          'position': 97,
          'artist': 'Nothing But Thieves',
          'title': 'Impossible (Orchestral Version Live at Abbey Road)',
          'year': 2020
        },
        {
          'position': 98,
          'artist': 'Snow Patrol',
          'title': 'Chasing Cars',
          'year': 2006
        },
        {
          'position': 99,
          'artist': 'Dolly Parton',
          'title': 'Jolene',
          'year': 1974
        },
        {
          'position': 100,
          'artist': 'The Rolling Stones',
          'title': 'Gimme Shelter',
          'year': 1969
        }
      ]
    }
  ];
};