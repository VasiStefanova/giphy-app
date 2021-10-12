import { viewDetailsCard } from './details-card.js';
import * as utils from './utils.js';
/**
 * See a given gif’s detailed information like uploaded user’s username...
 *
 * @param {string} id The id of the gif.
 * @return {string}  Returns an html string.
 */
export const showDetails = (id) => {
  const url = `https://api.giphy.com/v1/gifs/${id}?api_key=${utils.APIKEY}`;
  fetch(url)
      .then((response) => response.json())
      .then((content) => {
        const htmlDiv = viewDetailsCard(content.data);
        const container = document.querySelector('.container');
        container.innerHTML = '';
        container.innerHTML = htmlDiv;
      })

      .catch((err) => console.error(err));
};
