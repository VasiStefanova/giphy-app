/* eslint-disable max-len */
import {search} from './search-api.js';
import {trending} from './trending-api.js';
import {upload} from './uploadGIF-api.js';
import {displayUploadedGifs} from './display-uploadedGIFs-api.js';
import {showDetails} from './details-api.js';
import {showUpload} from './upload-view.js';

document.addEventListener('DOMContentLoaded', () => {
  document.addEventListener('click', (event) => {
    //   event.preventDefault();
    if (event.target.classList.contains('view-details')) {
      showDetails(event.target.id);
    } else {
      switch (event.target.id) {
        case 'btnSearch':
          search();
          break;
        case 'btnTrending':
          trending();
          break;
        case 'btnUploadedGifs':
          displayUploadedGifs();
          break;
        case 'btnUpload':
          showUpload();
          document.querySelector('input[type="file"]').addEventListener('change', upload);
          break;
      }
    }
  });
  document.getElementById('search').addEventListener('keyup', (event) => {
    if (event.keyCode === 13) {
      search();
    }
  });
});
