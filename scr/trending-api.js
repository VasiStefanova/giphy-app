/* eslint-disable max-len */
import * as utils from './utils.js';
import {producer} from './html-producer.js';

/**
 * See the top trending gifs.
 *
 * @return {string}  Returns an html string.
 */
export const trending = () => {
  const url = `https://api.giphy.com/v1/gifs/trending?api_key=${utils.APIKEY}&limit=${utils.GIF_LIMIT}`;
  fetch(url)
      .then((response) => response.json())
      .then((content) => producer(content))
      .catch((err) => console.error(err));
};
