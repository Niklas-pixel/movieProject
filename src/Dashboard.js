const watchlist = document.querySelector(".watchlist");
const viewedMovies = document.querySelector(".viewed-movies");

const imgBaseW200 = "https://image.tmdb.org/t/p/w200";

function runDashboard() {
  const users = db.getAllUsers();
  const currentUser = db.getCurrentUser();

  const user = users.find((profile) => {
    if (profile.email === currentUser.email) {
      return true;
    }
  });

  if (!user) {
    location.assign("login.html");
  } else {
    displayWatchlist();
  }
}

// DISPLAY ALL THE WATCHLIST MOVIES IMAGES FROM LOCALSTORAGE
function getCurrentUserImages() {
  const currentUser = db.getCurrentUser();
  const images = currentUser.images;

  if (!images) {
    return [];
  } else {
    return images;
  }
}

// DISPLAY ALL THE VIEWED MOVIES IMAGES FROM LOCALSTORAGE

function getCurrentUserViewed() {
  const currentUser = db.getCurrentUser();
  const viewed = currentUser.viewed;

  if (!viewed) {
    return [];
  } else {
    return viewed;
  }
}

function displayWatchlist() {
  // CODE BELOW FOR WATCHLIST
  const imagesArray = getCurrentUserImages();
  imagesArray.forEach((poster) => {
    const newImgEl = document.createElement("img");
    newImgEl.setAttribute("src", poster);
    watchlist.appendChild(newImgEl);
  });

  // CODE BELOW FOR VIEWED
  const viewedArray = getCurrentUserViewed();
  viewedArray.forEach((poster) => {
    const newImgEl = document.createElement("img");
    newImgEl.setAttribute("src", poster);
    viewedMovies.appendChild(newImgEl);
  });
}

window.addEventListener("load", runDashboard);
