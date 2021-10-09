import * as utils from "./utils.js"

document.addEventListener("DOMContentLoaded", search);
function search() {
    const searchEventHandler = ev => {
        ev.preventDefault()
        const str = document.getElementById("search").value;
        const url = `https://api.giphy.com/v1/gifs/search?api_key=${utils.APIKEY}&limit=20&q=${encodeURI(str)}`;
        fetch(url)
            .then(response => response.json())
            .then(content => {
                const figures = content.data.map(element => {
                    const figure = document.createElement("figure");
                    const img = document.createElement("img");
                    const figCaption = document.createElement("figcaption");
                    const button = document.createElement("button")
                    button.innerHTML = "View Details";
                    img.src = element.images.downsized.url;
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
                document.querySelector("#search").value = '';
            })
            .catch(err => console.error(err));
    }
    document.getElementById("btnSearch").addEventListener("click", searchEventHandler);
    document.getElementById("search").addEventListener('keyup', event => {
        if (event.keyCode === 13) {
            return searchEventHandler(event);
        }
    });
}