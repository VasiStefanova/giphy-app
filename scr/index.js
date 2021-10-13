/* eslint-disable max-len */
import {search} from './api-functionalities/search-api.js';
import {trending} from './api-functionalities/trending-api.js';
import {displayUploadedGifs} from './api-functionalities/display-uploadedGIFs-api.js';
import {showDetails} from './api-functionalities/details-api.js';
import {showUpload} from './views/upload-view.js';
import {showUploadFileInfo} from './views/upload-file-view.js';

document.addEventListener('DOMContentLoaded', () => {
  document.addEventListener('click', (event) => {
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
          document.querySelector('input[type="file"]').addEventListener('change', showUploadFileInfo);
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
