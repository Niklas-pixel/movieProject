// https://api.themoviedb.org/3/movie/343611?api_key=a2bf12ab60f87e1ff69ef7b00f747938

const moviePage = document.querySelector(".movie-page");
const addButton = document.querySelector(".add-movie");
const viewedButton = document.querySelector(".viewed-movie");

const movieBg = document.querySelector(".movie-bg");
const moviePoster = document.querySelector(".movie-poster");
const movieTitle = document.querySelector(".movie-title");
const movieGenre = document.querySelector(".movie-genre");
const movieScore = document.querySelector(".movie-score");
const movieDuration = document.querySelector(".movie-duration");
const movieInfo = document.querySelector(".movie-info");

const menu = document.querySelector(".menu");
const nav = document.querySelector(".menu-display");
const navOpen = document.querySelector(".cross");

const imgBaseW400 = "https://image.tmdb.org/t/p/w400";
const imgBaseW200 = "https://image.tmdb.org/t/p/w200";

let imgObj = {};

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
console.log("before fetch");
fetch(
  `https://api.themoviedb.org/3/movie/${movieId}?api_key=a2bf12ab60f87e1ff69ef7b00f747938`
)
  .then((response) => response.json())
  .then((data) => {
    movieBg.style.backgroundImage = `url(${imgBaseW400 + data.poster_path})`;
    moviePoster.setAttribute("src", imgBaseW200 + data.poster_path);

    movieTitle.innerHTML = data.title;
    movieScore.innerHTML = `${data.vote_average} points`;
    movieDuration.innerHTML = `${data.runtime} minutes`;
    movieInfo.innerHTML = data.overview;
    imgObj = { ...data };
    console.log(imgObj);
  })
  .catch((error) => console.log(error));

function getCurrentUserImages() {
  const currentUser = db.getCurrentUser();
  const images = currentUser.images;

  if (!images) {
    return [];
  } else {
    return images;
  }
}

function saveNewMovie() {
  const url = moviePoster.getAttribute("src");
  const imagesArray = getCurrentUserImages();

  const updatedImagesArray = [...imagesArray, url];
  // GET THE current user
  const currentUser = db.getCurrentUser(); // REFACTOR FROM THIS LINE TO...
  // update and set the current user object (add the new images array)
  currentUser.images = updatedImagesArray;
  db.setCurrentUser(currentUser);

  // update the current user in the array of all the `users` in the localStorage
  // get users array from localStorage
  const users = db.getAllUsers();

  // Find the current user object in the `users` array
  users.forEach((user) => {
    if (currentUser.email === user.email) {
      // update the current user object in the `users` array
      user.images = updatedImagesArray;
    }
  });

  const updatedUsersStr = JSON.stringify(users);

  localStorage.setItem("users", updatedUsersStr); // ...THIS LINE
}

addButton.addEventListener("click", saveNewMovie);

// line (61-80) refactor it into one Database method - updateCurrentUserImages()
// pass it a updatedImagesArray

function getCurrentUserViewed() {
  const currentUser = db.getCurrentUser();
  const viewed = currentUser.viewed;

  if (!viewed) {
    return [];
  } else {
    return viewed;
  }
}

// Refactor the code below to a Database method aswell - updateCurrentUserViewed()
// pass it a updatedViewedArray

function saveViewedMovie() {
  const url = moviePoster.getAttribute("src");
  const viewedArray = getCurrentUserViewed();

  const updatedViewedArray = [...viewedArray, url];
  // GET THE current user
  const currentUser = db.getCurrentUser(); // REFACTOR FROM THIS LINE TO...
  // update and set the current user object (add the new images array)
  currentUser.viewed = updatedViewedArray;
  db.setCurrentUser(currentUser);

  // update the current user in the array of all the `users` in the localStorage
  // get users array from localStorage
  const users = db.getAllUsers();

  // Find the current user object in the `users` array
  users.forEach((user) => {
    if (currentUser.email === user.email) {
      // update the current user object in the `users` array
      user.viewed = updatedViewedArray;
    }
  });

  const updatedUsersStr = JSON.stringify(users);

  localStorage.setItem("users", updatedUsersStr); // ...THIS LINE
}

viewedButton.addEventListener("click", saveViewedMovie);

menu.addEventListener("click", () => {
  nav.classList.add("open");
});
navOpen.addEventListener("click", () => {
  nav.classList.remove("open");
});
