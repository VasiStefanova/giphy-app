import * as utils from './utils.js';
import {generateCard} from './card.js';

/**
 * Display the uploaded gif from his file system.
 *
 * @return {string}  Returns an html string.
 */
export const displayUploadedGifs = () => {
  const displayUploadedGifsHandler = (ev) => {
    const uploadedGifs = utils.getUploadsFromStorage();
    ev.preventDefault();
    const url = `https://api.giphy.com/v1/gifs?api_key=${utils.APIKEY}&ids=${uploadedGifs.join()}`;
    fetch(url)
        .then((response) => response.json())
        .then((content) => {
          const mappedContent = content.data.reduce((acc, X, Y, gifCollection) => {
            if (gifCollection.length) {
              const groupOfGifs = gifCollection.splice(0, 4);
              acc.push(groupOfGifs);
            }
            return acc;
          }, []);
          const divRows = mappedContent.map((row) => {
            const rowDiv = document.createElement('div');
            rowDiv.classList.add('row');
            row.forEach((element) => {
              const card = generateCard(element);
              const colDiv = document.createElement('div');
              colDiv.classList.add('col-sm');
              colDiv.innerHTML = card;
              rowDiv.appendChild(colDiv);
            });

            return rowDiv;
          });

          const container = document.querySelector('.container');
          container.innerHTML = '';
          container.append(...divRows);
        })
        .catch((err) => console.error(err));
  };
  document.getElementById('btnUploadedGifs')
      .addEventListener('click', displayUploadedGifsHandler);
};
