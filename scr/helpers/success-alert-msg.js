import {setContainerContent} from '../utils.js';

/**
 * Shows an alert success message when a file is uploaded.
 */
export const showSuccessAlertMsg = () => {
  setContainerContent(`
  <div class="alert alert-dismissible alert-success">
    <button type="button" class="btn-close" data-dismiss="alert"></button>
    <strong>Well done!</strong> You successfully uploaded your GIF!
</div>`);
};
