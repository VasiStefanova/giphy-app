import * as utils from "./utils.js"

export function showDetails(id) {
    const url = `https://api.giphy.com/v1/gifs/${id}?api_key=${utils.APIKEY}`;
    fetch(url)
        .then(response => response.json())
        .then(content => {

            const htmlDiv = `
            <div class="gifDetails">
            <img src= ${content.data.images.downsized.url}>
            <h2>title: ${content.data.title}</h2>
            <h2>rating: ${content.data.rating}</h2>
            <h2>username: ${content.data.username}</h2>
            <h2>slug: ${content.data.slug}</h2>
            </div>
           `
            const container = document.querySelector(".container");
            container.innerHTML = '';
            container.innerHTML = htmlDiv;
        })

        .catch(err => console.error(err));
}
