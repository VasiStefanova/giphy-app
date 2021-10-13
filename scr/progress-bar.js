/* eslint-disable max-len */
export const displayProgressBar = () => {
  const progressDiv = document.createElement('div');
  progressDiv.innerHTML = `
  <div class="progress">
    <div class="progress-bar progress-bar-striped bg-info" role="progressbar" style="width: 75%;"></div>
</div>`;
  const container = document.querySelector('.container');
  container.appendChild(progressDiv);
};
