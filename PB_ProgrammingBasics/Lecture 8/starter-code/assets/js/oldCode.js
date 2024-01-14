window.addEventListener('load', function () {
  createAnArticle('Slave I', 'assets/img/slave-i.jpg', 'https://starwars.fandom.com/wiki/Slave_I');
  createAnArticle('Millennium Falcon', 'assets/img/millenium-falcon.jpg', 'https://starwars.fandom.com/nl/wiki/Millennium_Falcon');
  createAnArticle('Independence', 'assets/img/independence.jpg', 'https://starwars.fandom.com/nl/wiki/Independence');
  createAnArticle('Executor', 'assets/img/executor.jpg', 'https://starwars.fandom.com/nl/wiki/Executor');
});

const shipList = document.getElementById('ships');

function createAnArticle(articleName, imagePhoto, imageLink) {
  const articleElement = document.createElement('article');
  articleElement.className = 'card m-2 p-2';
  // Media layout object
  const mediaDiv = document.createElement('div');
  mediaDiv.className = 'media';
  articleElement.appendChild(mediaDiv);
  // Media-left section
  const mediaLeftDiv = document.createElement('div');
  mediaLeftDiv.className = 'media-left';
  mediaDiv.appendChild(mediaLeftDiv);
  // The paragraph that contains the image inside the media-left
  const paragraphElement = document.createElement('p');
  paragraphElement.className = 'image is-64x64';
  mediaLeftDiv.appendChild(paragraphElement);
  // The image element itself
  const imageElement = document.createElement('img');
  imageElement.src = imagePhoto;
  paragraphElement.appendChild(imageElement);
  // Media-content section
  const mediaContentDiv = document.createElement('div');
  mediaContentDiv.className = 'media-content';
  mediaDiv.appendChild(mediaContentDiv);
  // The div that holds the link
  const contentDiv = document.createElement('div');
  contentDiv.className = 'content';
  mediaContentDiv.appendChild(contentDiv);
  // The link to the fandom page
  const linkElement = document.createElement('a');
  linkElement.href = imageLink;
  linkElement.innerHTML = articleName;
  contentDiv.appendChild(linkElement);
  // Append the Executor article to the list
  shipList.appendChild(articleElement);
}