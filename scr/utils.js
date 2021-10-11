export const APIKEY = "mz7BQ5LzMjrvdnaBJoaUCkwMDO8Xb7GX";
//documentation//
export const getUploadsFromStorage = () => {
    const uploadsFromStorage = localStorage.getItem('uploads');
    console.log(uploadsFromStorage)
    const result = uploadsFromStorage ? JSON.parse(uploadsFromStorage) : [];

    return result;
};