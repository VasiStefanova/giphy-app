import {viewDetailsCard} from '../views/details-card.js';
import * as utils from '../utils.js';
/**
 * Shows a given gif’s detailed information.
 *
 * @param {string} id The id of the gif.
 */
export const showDetails = (id) => {
  const url = `https://api.giphy.com/v1/gifs/${id}?api_key=${utils.APIKEY}`;
  fetch(url)
      .then((response) => response.json())
      .then((content) => {
        console.log(content);
        const htmlDiv = viewDetailsCard(content.data);
        const container = document.querySelector('.container');
        container.innerHTML = '';
        container.innerHTML = htmlDiv;
      })

      .catch((err) => console.error(err));
};
