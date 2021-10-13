/* eslint-disable max-len */
import {upload} from './uploadGIF-api.js';
export const showUploadFileInfo = (event) => {
  const file = event.target.files[0];
  console.log(event.target);
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
  const container = document.querySelector('.container');
  container.appendChild(innerDiv);
  document.getElementById('upload-btn').addEventListener('click', upload);
};
