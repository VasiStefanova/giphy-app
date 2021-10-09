import * as utils from "./utils.js"
const input = document.querySelector('input[type="file"]');
input.addEventListener('change', upload.bind(upload, id));

function upload(id, ev) {
    console.log(arguments);
    const formData = new FormData();
    formData.append('file', input.files[0]);

    fetch(`https://upload.giphy.com/v1/gifs?api_key=${utils.APIKEY}`, {
        method: 'POST',
        body: formData
    })
        .then(response => response.json())
        .then(result => {
            console.log('Success:', result);
        })
        .catch(error => {
            console.error('Error:', error);
        })
        .finally(() => input.value = '');
}
