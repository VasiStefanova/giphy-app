/* eslint-disable max-len */
// eslint-disable-next-line padded-blocks
export const viewDetailsCard = (gifData) => {

  return `<div id="card-details" class="card border-secondary mb-3" style="width: 25rem; margin: auto;">
  <img class="card-img-top" src="${gifData.images.original.url}" alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">${gifData.title}</h5>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Added by: ${gifData.username ? gifData.username : 'n/a'}</li>
    <li class="list-group-item">Added on: ${gifData.import_datetime}</li>
    <li class="list-group-item">Rating: ${gifData.rating}</li>
  </ul>
</div>`;
};
