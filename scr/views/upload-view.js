/* eslint-disable max-len */
/**
 * Shows the html input for uploading.
 *
 */
export const showUpload = () => {
  const container = document.querySelector('.container');
  container.innerHTML = `
    <div class="form-group">
        <input class="form-control" type="file" id="formFile">
    </div>
    `;
};
