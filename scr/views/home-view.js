import {viewDetailsCard} from './details-card.js';
import * as utils from '../utils.js';

/**
 * Displays one random gif.
 *
 */
export const showHomeView = () => {
  const url = `https://api.giphy.com/v1/gifs/random?api_key=${utils.APIKEY}`;

  fetch(url)
      .then((response) => response.json())
      .then((content) =>{
        const card = viewDetailsCard(content.data);
        utils.setContainerContent(card);
      })
      .catch((err) => console.error(err));
};
