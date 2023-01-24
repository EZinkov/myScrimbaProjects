const apiKey = 'f8ebd2ec'
const btn = document.getElementById('btn')
const inputValue = document.getElementById('input-value')
const filmList = document.getElementById('film-list')
let watchlistImdbArr = JSON.parse(localStorage.getItem("watchlist")) || [];

document.addEventListener('click', function(e) {
    e.preventDefault
    if (e.target === btn) {
        showResults()
    }
})

let filmArray = []

function showResults() {
    fetch(`https://www.omdbapi.com/?apikey=${apiKey}&s=${inputValue.value}&type=movie`)
        .then(response => response.json())
        .then(data => {
            imdbIdArray = data.Search.map(movieElement => movieElement.imdbID)
            renderFilms(imdbIdArray)
        })
        .catch(err => filmList.innerHTML = `
        <h1 class="movie-not-found">Oops ! Not able to find any such movie. Try Again</h1>`);
}




function renderFilms(imdbIdArray) {
    filmList.innerHTML = ""
    imdbIdArray.forEach(imdbId => {
        fetch(`https://www.omdbapi.com/?apikey=${apiKey}&i=${imdbId}`)
        .then(res => res.json())
        .then(movieData => filmList.innerHTML += getFilmHtml(movieData))
    });
}


function getFilmHtml(movieData) {
    const {imdbID, Title, imdbRating, Genre, Plot, Poster, Runtime} = movieData
    const filmHtml = 
    `
    <div class="movie d-flex" id = "${imdbID}">
        <img src= ${ Poster == "N/A"?"images/posterNotFound.png":Poster}
            class="movie-poster"
            alt="movie poster">
        <div class="movie-info">
            <header class="d-flex">
                <h2 class="movie-name">${Title}</h2>
                <div class="rating">
                    <i class="fa-solid fa-star"></i>
                    <span>${imdbRating}</span>
                </div>
            </header>
            <div class="highlights d-flex">
                <span class="movie-time">${Runtime}</span>
                <span class="genre">${Genre}</span>
                <button class="watchlist-button" id = "add-${imdbID}" onclick="addToWatchlist('${imdbID}')">
                    <i class="fa-solid fa-circle-plus"></i>
                    watchlist
                </button>
            </div>
            <p class="summary">${Plot}</p>
        </div>
</div>`

    return filmHtml

}

function addToWatchlist(imdbId){
    // Add only if it's not already present
    if (watchlistImdbArr.indexOf(imdbId) == -1){
        watchlistImdbArr.push(imdbId);
    }
    localStorage.setItem("watchlist", JSON.stringify(watchlistImdbArr));
    document.getElementById(`add-${imdbId}`).setAttribute("disabled", "");
    document.getElementById(`add-${imdbId}`).innerHTML = `
                            <i class="fa-solid fa-check"></i>
                            watchlist`;
}

