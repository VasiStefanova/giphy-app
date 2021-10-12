// eslint-disable-next-line padded-blocks
export const viewDetailsCard = (gifData) => {

  return `<h1>${gifData.title}</h1>
  <div class="gif-detailed">
    <div class="poster">
      <img src="${gifData.images.original.url}">
    </div>
    <div class="gif-info">
      <p>Added by: ${gifData.username}</p>
    </div>
  </div>
  `






//   `<div class="card border-primary mb-3">
//   <div class="card-body">
//     <h5 class="card-title">${gifData.title}</h5>
//   </div>
//   <img src="${gifData.images.original.url}" class="d-block user-select-none" width="100%" height="200">
//   <div class="card-body">
//     <p class="card-text">Added by ${gifData.username}</p>
//   </div>
//   `;
};
