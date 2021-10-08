const APIKEY = "mz7BQ5LzMjrvdnaBJoaUCkwMDO8Xb7GX";
document.addEventListener("DOMContentLoaded", search);
function search() {
    const searchEventHandler = ev => {
        ev.preventDefault()
        const str = document.getElementById("search").value;
        const url = `https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&limit=20&q=${encodeURI(str)}`;
        fetch(url)
            .then(response => response.json())
            .then(content => {
                const figures = content.data.map(element => {
                    const figure = document.createElement("figure");
                    const img = document.createElement("img");
                    const figCaption = document.createElement("figcaption");
                    img.src = element.images.downsized.url;
                    img.alt = element.title;
                    figCaption.textContent = element.title;
                    figure.appendChild(img);
                    figure.appendChild(figCaption);

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
}