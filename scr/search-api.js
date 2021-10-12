/* eslint-disable max-len */
import * as utils from './utils.js';
import {producer} from './html-producer.js';


/**
 * Search gifs by a given query.
 *
 * @return {string}  Returns an html string.
 */
export const search = () => {
  const searchField = document.getElementById('search');
  const str = searchField.value;
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${utils.APIKEY}&limit=${utils.GIF_LIMIT}&q=${encodeURI(str)}`;
  fetch(url)
      .then((response) => response.json())
      .then((content) => {
        producer(content);
        searchField.value = '';
      })
      .catch((err) => console.error(err));
};
