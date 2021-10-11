import * as utils from "./utils.js"
import { showDetails } from "./details-api.js"

document.addEventListener("DOMContentLoaded", trending);
/**
 * See the top trending gifs. 
 *
 * @return {string}  Returns an html string.
 */
function trending() {
    const trendingEventHandler = ev => {
        ev.preventDefault()
        const url = `https://api.giphy.com/v1/gifs/trending?api_key=${utils.APIKEY}&limit=20`;
        fetch(url)
            .then(response => response.json())
            .then(content => {
                const figures = content.data.map(element => {
                    const figure = document.createElement("figure");
                    const img = document.createElement("img");
                    const figCaption = document.createElement("figcaption");
                    const button = document.createElement("button");
                    button.innerHTML = "View Details";
                    button.addEventListener("click", () => showDetails(element.id));
                    img.src = element.images.original.url;
                    img.alt = element.title;
                    figCaption.textContent = element.title;
                    figure.appendChild(img);
                    figure.appendChild(figCaption);
                    figure.appendChild(button);

                    return figure;
                });

                const container = document.querySelector(".container");
                container.innerHTML = '';
                container.append(...figures);
            })
            .catch(err => console.error(err));
    };
    document.getElementById("btnTrending").addEventListener("click", trendingEventHandler);
}