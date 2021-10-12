import {search} from './search-api.js';
import {trending} from './trending-api.js';
import {upload} from './uploadGIF-api.js';
import {displayUploadedGifs} from './display-uploadedGIFs-api.js';

document.addEventListener('DOMContentLoaded', search);

document.addEventListener('DOMContentLoaded', trending);

const input = document.querySelector('input[type="file"]');
input.addEventListener('change', upload);

document.addEventListener('DOMContentLoaded', displayUploadedGifs);

