import * as utils from "./utils.js"
import { showDetails } from "./details-api.js"
import { generateCard } from "./card.js";

document.addEventListener("DOMContentLoaded", search);
//documentation//
function search() {
    const searchField = document.getElementById("search");
    const searchEventHandler = ev => {
        ev.preventDefault()
        const str = searchField.value;
        const url = `https://api.giphy.com/v1/gifs/search?api_key=${utils.APIKEY}&limit=20&q=${encodeURI(str)}`;
        fetch(url)
            .then(response => response.json())
            .then(content => {
                const mappedContent = content.data.reduce((acc, X, Y, gifCollection) => {
                    if (gifCollection.length) {
                        let groupOfGifs = gifCollection.splice(0, 4);
                        acc.push(groupOfGifs)
                    }
                    return acc;
                }, [])
                const divRows = mappedContent.map(row => {
                    const rowDiv = document.createElement("div");
                    rowDiv.classList.add("row");
                    row.forEach(element => {
                        console.log(element);
                        const card = generateCard(element);
                        const colDiv = document.createElement("div");
                        colDiv.classList.add("col-sm");
                        colDiv.innerHTML = card;
                        rowDiv.appendChild(colDiv);

                    });

                    return rowDiv;
                });
                const container = document.querySelector(".container");
                container.innerHTML = '';
                container.append(...divRows);
                searchField.value = '';
            })
            .catch(err => console.error(err));
    }
    document.getElementById("btnSearch").addEventListener("click", searchEventHandler);
    searchField.addEventListener('keyup', event => {
        if (event.keyCode === 13) {
            return searchEventHandler(event);
        }
    });
}