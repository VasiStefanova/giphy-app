import {generateCard} from './card.js';

/**
 * Produces an html file with the information that comes from the URL.
 *
 * @param {object} content The data that comes from the URL
 */
export const producer = (content) =>{
  const mappedContent = content.data.reduce((acc, X, Y, gifCollection) => {
    if (gifCollection.length) {
      const groupOfGifs = gifCollection.splice(0, 4);
      acc.push(groupOfGifs);
    }
    return acc;
  }, []);
  const divRows = mappedContent.map((row) => {
    const rowDiv = document.createElement('div');
    rowDiv.classList.add('row');
    row.forEach((element) => {
      const card = generateCard(element);
      const colDiv = document.createElement('div');
      colDiv.classList.add('col-sm');
      colDiv.innerHTML = card;
      rowDiv.appendChild(colDiv);
    });

    return rowDiv;
  });
  const container = document.querySelector('.container');
  container.innerHTML = '';
  container.append(...divRows);
};
