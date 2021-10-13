export const APIKEY = 'mz7BQ5LzMjrvdnaBJoaUCkwMDO8Xb7GX';
export const GIF_LIMIT = 20;

/**
 * Gets gifs from local storage.
 * @return {Array} collection of gifs.
 */
export const getUploadsFromStorage = () => {
  const uploadsFromStorage = localStorage.getItem('uploads');
  const result = uploadsFromStorage ? JSON.parse(uploadsFromStorage) : [];

  return result;
};

/**
 * Set the html container div with a given innerHTML string.
 * @param {string} innerHTML to be placed in the container.
 * @param {Array}  htmlElements optional - collection of html elements.
 */
export const setContainerContent = (innerHTML, htmlElements = []) => {
  const container = document.querySelector('.container');
  container.innerHTML = innerHTML;
  if (htmlElements.length) {
    container.append(...htmlElements);
  }
};
