import {setContainerContent} from '../utils.js';

/* eslint-disable max-len */
/**
 * Shows the html input for uploading.
 *
 */
export const showUpload = () => {
  setContainerContent(`
      <div class="form-group">
        <input class="form-control" type="file" id="formFile">
    </div>`);
};
