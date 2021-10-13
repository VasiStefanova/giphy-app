import * as utils from '../utils.js';
import {showUpload} from '../upload-view.js';

/**
 * Upload a gif from his file system.
 *
 */
export const upload = () => {
  const input = document.querySelector('input[type="file"]');
  const formData = new FormData();
  formData.append('file', input.files[0]);

  fetch(`https://upload.giphy.com/v1/gifs?api_key=${utils.APIKEY}`, {
    method: 'POST',
    body: formData,
  })
      .then((response) => response.json())
      .then((result) => {
        const uploadedGIFs = utils.getUploadsFromStorage();
        uploadedGIFs.push(result.data.id);
        localStorage.setItem('uploads', JSON.stringify(uploadedGIFs));
        console.log('Success:', result);
      })
      .catch((error) => {
        console.error('Error:', error);
      })
      .finally(() => {
        // input.value = ''
        showUpload();
      });
};
