window.addEventListener('load', function () {
  createArticleList([
    { name: 'Slave I', image: 'assets/img/slave-i.jpg', link: 'https://starwars.fandom.com/wiki/Slave_I' },
    { name: 'Millennium Falcon', image: 'assets/img/millenium-falcon.jpg', link: 'https://starwars.fandom.com/nl/wiki/Millennium_Falcon' },
    { name: 'Independence', image: 'assets/img/independence.jpg', link: 'https://starwars.fandom.com/nl/wiki/Independence' },
    { name: 'Executor', image: 'assets/img/executor.jpg', link: 'https://starwars.fandom.com/nl/wiki/Executor' }
  ]);
});

const shipList = document.getElementById('ships');

function createElement(elementType, className, attributes = {}) {
  const element = document.createElement(elementType);
  element.className = className;
  for (const key in attributes) {
    element[key] = attributes[key];
  }
  return element;
}

function createArticleList(articles) {
  articles.forEach(article => {
    const articleElement = createElement('article', 'card m-2 p-2');
    const mediaDiv = createElement('div', 'media');
    mediaDiv.appendChild(createElement('div', 'media-left').appendChild(
      createElement('p', 'image is-64x64').appendChild(
        createElement('img', 'is-rounded', { src: article.image, width: '64', height: '64' })
      )
    ));
    mediaDiv.appendChild(createElement('div', 'media-content').appendChild(
      createElement('div', 'content').appendChild(
        createElement('a', '', { href: article.link, innerHTML: article.name })
      )
    ));
    articleElement.appendChild(mediaDiv);
    shipList.appendChild(articleElement);
  });
}