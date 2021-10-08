document.addEventListener("DOMContentLoaded", trending);
function trending() {
    const trendingEventHandler = ev => {
        ev.preventDefault()
        const url = `https://api.giphy.com/v1/gifs/trending?api_key=${APIKEY}&limit=20`;
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
            })
            .catch(err => console.error(err));
    }
    document.getElementById("btnTrending").addEventListener("click", trendingEventHandler);
}