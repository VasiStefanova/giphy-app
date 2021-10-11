import * as utils from "./utils.js"
const input = document.querySelector('input[type="file"]');
input.addEventListener('change', upload);

/**
 * Upload a gif from his file system.
 *
 */
function upload() {
    console.log(arguments);
    const formData = new FormData();
    formData.append('file', input.files[0]);

    fetch(`https://upload.giphy.com/v1/gifs?api_key=${utils.APIKEY}`, {
        method: 'POST',
        body: formData
    })
        .then(response => response.json())
        .then(result => {
            const uploadedGIFs = utils.getUploadsFromStorage();
            uploadedGIFs.push(result.data.id);
            localStorage.setItem('uploads', JSON.stringify(uploadedGIFs));
            console.log('Success:', result);
        })
        .catch(error => {
            console.error('Error:', error);
        })
        .finally(() => input.value = '');
}
