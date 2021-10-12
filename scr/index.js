/* eslint-disable max-len */
import {search} from './search-api.js';
import {trending} from './trending-api.js';
import {upload} from './uploadGIF-api.js';
import {displayUploadedGifs} from './display-uploadedGIFs-api.js';
import {showDetails} from './details-api.js';

document.addEventListener('DOMContentLoaded', () => {
  document.addEventListener('click', (event) => {
    if (event.target.classList.contains('view-details')) {
      showDetails(event.target.id);
    }
    if (event.target.id === 'btnSearch') {
      search();
    }
    if (event.target.id === 'btnTrending') {
      trending();
    }
    if (event.target.id === 'btnUploadedGifs') {
      displayUploadedGifs();
    }
  });
  document.getElementById('search').addEventListener('keyup', (event) => {
    if (event.keyCode === 13) {
      search();
    }
  });

  document.querySelector('input[type="file"]').addEventListener('change', upload);
});
