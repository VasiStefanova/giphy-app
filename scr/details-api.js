import * as utils from "./utils.js"

const url = `https://api.giphy.com/v1/gifs/{gif_id}?api_key=${utils.APIKEY}`;
const getGifById = (gifId = 0) => gif.find((g) => g.id === gifId);

function showDetails(id) {
    const gif = getGifById(id);

    return`
    <div class="gifDetails">
    <h2>title: ${gif.title}</h2>
    <h2>rating: ${gif.rating}</h2>
    <h2>username: ${gif.username}</h2>
    <h2>slug: ${gif.slug}</h2>
    <h2>source: ${gif.source_tld}</h2>
    `
}
 