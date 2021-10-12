/* eslint-disable max-len */
/**
 * Displays the gif as a card.
 *
 * @param {object} gifData The id of the gif.
 * @return {HTMLDivElement}  Returns an html div element.
 */
// eslint-disable-next-line padded-blocks
export const generateCard = (gifData) => {

  return `<div class="card border-primary mb-3">
  <div class="card-body">
    <h5 class="card-title">${gifData.title}</h5>
  </div>
  <img src="${gifData.images.original.url}" class="d-block user-select-none" width="100%" height="200">
  <div class="card-body">
    <p class="card-text">Added by ${gifData.username}</p>
  </div>
  <div class="card-body">
    <button id=${gifData.id} type="button" class="btn btn-outline-primary view-details">View Details</button>
  </div>`;
};


