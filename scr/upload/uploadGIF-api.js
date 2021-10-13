import * as utils from '../utils.js';
import {displayProgressBar} from '../progress-bar.js';
import {showAlertMsg} from '../alert-msg.js';
import {showSuccessAlertMsg} from '../success-alert-msg.js';

/**
 * Upload a gif from his file system.
 *
 */
export const upload = () => {
  const input = document.querySelector('input[type="file"]');
  const file = input.files[0];
  if (file.type !== 'image/gif') {
    showAlertMsg();
  } else {
    const formData = new FormData();
    formData.append('file', file);
    displayProgressBar();
    fetch(`https://upload.giphy.com/v1/gifs?api_key=${utils.APIKEY}`, {
      method: 'POST',
      body: formData,
    })
        .then((response) => response.json())
        .then((result) => {
          const uploadedGIFs = utils.getUploadsFromStorage();
          uploadedGIFs.push(result.data.id);
          localStorage.setItem('uploads', JSON.stringify(uploadedGIFs));
          showSuccessAlertMsg();
          console.log('Success:', result);
        })
        .catch((error) => {
          console.error('Error:', error);
        });
  }
};
