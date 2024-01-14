/**
 * This is the dataset of quirky music videos that you are required to use in this 
 * exam. 
 * 
 * For more details, see the `dataset.js` file
 */
const database = quirkyVideoDatabaseObject;

const playlistElement = document.getElementById("playlist");
const airtimeSpan = document.getElementById("airtime");
const articles = [];

/**
 * Extracts the title from the whole link text
 */
function extractTitle(linkText) {
  const artistEndIndex = linkText.indexOf(" - ");
  return linkText.slice(artistEndIndex + 3);
}

/**
 * Update the playlist with a new video
 */
function addVideoToPlaylist(video) {
  const articleCreate = document.createElement("article");
  articleCreate.className = "card m-2 p-2";
  playlistElement.appendChild(articleCreate);

  const mediaDivCreate = document.createElement("div");
  mediaDivCreate.className = "media";
  articleCreate.appendChild(mediaDivCreate);

  const mediaLeftCreate = document.createElement("div");
  mediaLeftCreate.className = "media-left";
  mediaDivCreate.appendChild(mediaLeftCreate);
  const paragraph = document.createElement("p");
  paragraph.className = "image is-64x64";
  mediaLeftCreate.appendChild(paragraph);
  const image = document.createElement("img");
  image.src = "https://img.youtube.com/vi/" + video.videoId + "/0.jpg";
  paragraph.appendChild(image);

  const mediaContentCreate = document.createElement("div");
  mediaContentCreate.className = "media-content";
  mediaDivCreate.appendChild(mediaContentCreate);
  const contentCreate = document.createElement("div");
  contentCreate.className = "content";
  mediaContentCreate.appendChild(contentCreate);
  const link = document.createElement("a");
  link.href = "https://youtu.be/" + video.videoId;
  link.innerHTML = `<strong>${video.artist}</strong> - ${video.title}`;
  contentCreate.appendChild(link);

  const mediaRightCreate = document.createElement("div");
  mediaRightCreate.className = "media-right";
  mediaDivCreate.appendChild(mediaRightCreate);
  const duration = document.createElement("span");
  duration.className = "has-text-grey-light";
  let secondsVideo = video.duration;
  const minutesVideo = Math.floor(secondsVideo / 60);
  secondsVideo = secondsVideo % 60;
  if (secondsVideo < 10) {
    duration.textContent = minutesVideo + ":0" + secondsVideo;
  }
  else {
    duration.textContent = minutesVideo + ":" + secondsVideo;
  }
  mediaRightCreate.appendChild(duration);

  articles.push({ element: articleCreate, title: extractTitle(link.textContent) });
}

/**
 * Sorting algorithm for the articles
 */
function sortArticlesByTitle() {
  articles.sort((article1, article2) => article1.title.localeCompare(article2.title));
  playlistElement.innerHTML = "";
  articles.forEach(article => {
    playlistElement.appendChild(article.element);
  });
}

/**
 * Calculate and update the total airtime
 */
function updateAirtime() {
  const totalDurationInSeconds = database.videos.reduce(function (total, element) {
    return total + element.duration;
  }, 0);

  const totalHours = Math.floor(totalDurationInSeconds / 3600);
  const remainingSeconds = totalDurationInSeconds % 3600;
  const totalMinutes = Math.floor(remainingSeconds / 60);
  const totalSeconds = remainingSeconds % 60;

  let airtime = '';
  if (totalHours > 0) {
    airtime += totalHours + ':';
  }
  if (totalMinutes < 10) {
    airtime += '0' + totalMinutes;
  } else {
    airtime += totalMinutes;
  }
  airtime += ':';
  if (totalSeconds < 10) {
    airtime += '0' + totalSeconds;
  } else {
    airtime += totalSeconds;
  }
  airtimeSpan.textContent = airtime;
}

// Window load event handler
window.addEventListener('load', function () {
  const videos = database.videos;

  for (let i = 0; i < videos.length; i++) {
    const video = videos[i];
    addVideoToPlaylist(video);
  }
  sortArticlesByTitle();
  updateAirtime();
});

// Event listener for adding a new video
const addVideoForm = document.getElementById("add-button");
addVideoForm.addEventListener("click", function () {
  const videoId = document.getElementById("video-id").value;
  const artist = document.getElementById("artist").value;
  const title = document.getElementById("title").value;
  const duration = parseFloat(document.getElementById("duration").value);

  if (videoId.length >= 11 && artist.length >= 3 && title.length >= 3 && !isNaN(duration)) {
    const newVideo = { videoId, artist, title, duration };
    database.videos.push(newVideo);
    addVideoToPlaylist(newVideo);
    sortArticlesByTitle();
    setTimeout();
    updateAirtime();
  }
});

/**
 * clear the form
 */
function setTimeout() {
  document.getElementById("video-id").value = "";
  document.getElementById("artist").value = "";
  document.getElementById("title").value = "";
  document.getElementById("duration").value = "";
}