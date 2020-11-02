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

const movieId = GetURLParameter("movie");

// FETCH MOVIE WITH THE ID

fetch(
  `https://api.themoviedb.org/3/movie/${movieId}?api_key=a2bf12ab60f87e1ff69ef7b00f747938`
)
  .then((response) => response.json())
  .then((data) => {
    moviePoster.setAttribute("src", imgBaseW200 + data.poster_path);
  })
  .catch((error) => console.log(error));

// ADD MOVIE FUNCTIONALITY WITH THE ADDBUTTON AND LOCALSTORAGE

function getAllImages() {
  const imagesString = localStorage.getItem("images");
  const imagesArray = JSON.parse(imagesString);

  if (imagesArray === null) {
    return [];
  } else {
    return imagesArray;
  }
}

function saveNewMovie() {
  const url = moviePoster.getAttribute("src");
  const imagesArray = getAllImages();

  const updatedImagesArray = [...imagesArray, url];
  const updatedImagesString = JSON.stringify(updatedImagesArray);
  localStorage.setItem("images", updatedImagesString);
}

addButton.addEventListener("click", saveNewMovie);
