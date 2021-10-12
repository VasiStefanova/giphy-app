import * as utils from './utils.js';

/**
 * Display the uploaded gif from his file system.
 *
 * @return {string}  Returns an html string.
 */
export function displayUploadedGifs() {
  const displayUploadedGifsHandler = (ev) => {
    const uploadedGifs = utils.getUploadsFromStorage();
    ev.preventDefault();
    const url = `https://api.giphy.com/v1/gifs?api_key=${utils.APIKEY}&ids=${uploadedGifs.join()}`;
    fetch(url)
        .then((response) => response.json())
        .then((content) => {
          const figures = content.data.map((element) => {
            const figure = document.createElement('figure');
            const img = document.createElement('img');
            const figCaption = document.createElement('figcaption');
            const button = document.createElement('button');
            button.innerHTML = 'View Details';
            button.addEventListener('click', () => showDetails(element.id));
            img.src = element.images.original.url;
            img.alt = element.title;
            figCaption.textContent = element.title;
            figure.appendChild(img);
            figure.appendChild(figCaption);
            figure.appendChild(button);

            return figure;
          });

          const container = document.querySelector('.container');
          container.innerHTML = '';
          container.append(...figures);
        })
        .catch((err) => console.error(err));
  };
  document.getElementById('btnUploadedGifs')
      .addEventListener('click', displayUploadedGifsHandler);
};
