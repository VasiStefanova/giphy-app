export const showSuccessAlertMsg = () => {
  const container = document.querySelector('.container');
  container.innerHTML = `
  <div class="alert alert-dismissible alert-success">
    <button type="button" class="btn-close" data-dismiss="alert"></button>
    <strong>Well done!</strong> You successfully uploaded your GIF!
</div>`;
};
