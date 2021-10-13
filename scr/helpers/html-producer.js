import {generateCard} from './card.js';
import {setContainerContent} from '../utils.js';

/**
 * Produces an html element with all cards in a grid system.
 *
 * @param {object} content The data that comes as a result from the URL.
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

  setContainerContent('', divRows);
};
