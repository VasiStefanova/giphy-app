export const APIKEY = 'mz7BQ5LzMjrvdnaBJoaUCkwMDO8Xb7GX';
export const GIF_LIMIT = 20;

export const getUploadsFromStorage = () => {
  const uploadsFromStorage = localStorage.getItem('uploads');
  const result = uploadsFromStorage ? JSON.parse(uploadsFromStorage) : [];

  return result;
};
