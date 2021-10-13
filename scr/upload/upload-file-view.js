/* eslint-disable max-len */
import {upload} from './uploadGIF-api.js';

/**
 * Shows the details of the uploaded gif
 *
 * @param {object} event
 */
export const showUploadFileInfo = (event) => {
  const container = document.querySelector('.container');
  if (container.children.length === 1) {
    const file = event.target.files[0];
    const innerDiv = document.createElement('div');
    innerDiv.innerHTML = `
          <ul class="list-group list-group-flush">
              <li class="list-group-item">File name: ${file.name}</li>
              <li class="list-group-item">File type: ${file.type}</li>
              <li class="list-group-item">File size: ${file.size / 1000000} MB</li>
          </ul>
          <div id="upload-wrapper">
              <button id="upload-btn" type="button" class="btn btn-outline-light">Upload</button>
          </div>
            `;
    container.appendChild(innerDiv);
    document.getElementById('upload-btn').addEventListener('click', upload);
  }
};
