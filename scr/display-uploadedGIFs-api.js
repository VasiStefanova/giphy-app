/* eslint-disable max-len */
import * as utils from './utils.js';
import {producer} from './html-producer.js';

/**
 * Display the uploaded gif from his file system.
 *
 * @return {string}  Returns an html string.
 */
export const displayUploadedGifs = () => {
  const uploadedGifs = utils.getUploadsFromStorage();
  const url = `https://api.giphy.com/v1/gifs?api_key=${utils.APIKEY}&ids=${uploadedGifs.join()}`;
  fetch(url)
      .then((response) => response.json())
      .then((content) => producer(content))
      .catch((err) => console.error(err));
};
