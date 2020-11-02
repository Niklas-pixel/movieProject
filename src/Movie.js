// https://api.themoviedb.org/3/movie/343611?api_key=a2bf12ab60f87e1ff69ef7b00f747938

const moviePage = document.querySelector(".movie-page");
const addButton = document.querySelector(".add-movie");
const moviePoster = document.querySelector(".movie-poster");

const imgBaseW200 = "https://image.tmdb.org/t/p/w200";

function GetURLParameter(sParam) {
  var sPageURL = window.location.search.substring(1);
  var sURLVariables = sPageURL.split("&");
  for (var i = 0; i < sURLVariables.length; i++) {
    var sParameterName = sURLVariables[i].split("=");
    if (sParameterName[0] == sParam) {
      return sParameterName[1];
    }
  }
}

const movie = GetURLParameter("movie");
console.log(movie);

// FETCH MOVIE WITH THE ID

fetch(
  `https://api.themoviedb.org/3/movie/${movie}?api_key=a2bf12ab60f87e1ff69ef7b00f747938`
)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);

    moviePoster.setAttribute("src", imgBaseW200 + data.poster_path);
  })
  .catch((error) => console.log(error));

// ADD MOVIE FUNCTIONALITY WITH THE ADDBUTTON AND LOCALSTORAGE

addButton.addEventListener("click", () => {
  localStorage.setItem(`${movie}`, moviePoster.getAttribute("src"));
  console.log(localStorage);
});
