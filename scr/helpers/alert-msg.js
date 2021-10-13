import {setContainerContent} from '../utils.js';
/**
 * Shows an alert message when inccorrect file type is chosen.
 */
export const showAlertMsg = () => {
  setContainerContent(`
  <div class="alert alert-dismissible alert-danger">
    <button type="button" class="btn-close" data-dismiss="alert"></button>
    <strong>Oh snap!</strong> Invalid file type! Use img/gif instead.
  </div>`);
};
