/**
 * Shows an alert message when inccorrect file type is chosen.
 */
export const showAlertMsg = () => {
  const container = document.querySelector('.container');
  container.innerHTML = `<div class="alert alert-dismissible alert-danger">
    <button type="button" class="btn-close" data-dismiss="alert"></button>
    <strong>Oh snap!</strong> Invalid file type! Use img/gif instead.
  </div>`;
};
