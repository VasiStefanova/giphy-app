import {showDetails} from './details-api.js';
/* eslint-disable max-len */
/**
 * Displays the gif as a card.
 *
 * @param {object} gifData The id of the gif.
 * @return {HTMLDivElement}  Returns an html div element.
 */
export const generateCard = (gifData) => {
  const card = document.createElement('div');
  card.classList.add('card', 'border-primary', 'mb-3');
  const cardTitle = document.createElement('div');
  cardTitle.classList.add('card-body');
  const title = document.createElement('h5');
  title.classList.add('card-title');
  title.innerText = gifData.title;
  const img = document.createElement('img');
  img.src = gifData.images.original.url;
  img.classList.add('cd-block', 'user-select-none');
  img.style.width = '100%';
  img.style.height = '250px';
  const divParagraph = document.createElement('div');
  divParagraph.classList.add('card-body');
  const paragraph = document.createElement('p');
  paragraph.classList.add('card-text');
  paragraph.innerText = `Added by ${gifData.username}`;
  const divButton = document.createElement('div');
  divButton.classList.add('card-body');
  const button = document.createElement('button');
  button.id = 'show-details';
  button.type = 'button';
  button.classList.add('btn', 'btn-outline-primary');
  button.innerText = 'View Details';
  button.addEventListener('click', () => showDetails(gifData.id));

  cardTitle.appendChild(title);
  divParagraph.appendChild(paragraph);
  divButton.appendChild(button);

  card.appendChild(cardTitle);
  card.appendChild(img);
  card.appendChild(divParagraph);
  card.appendChild(divButton);

  return card;
};
