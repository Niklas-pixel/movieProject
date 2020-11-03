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

// DISPLAY ALL THE MOVIES IMAGES FROM LOCALSTORAGE
function getCurrentUserImages() {
  const currentUser = db.getCurrentUser();
  const images = currentUser.images;

  if (!images) {
    return [];
  } else {
    return images;
  }
}

function displayWatchlist() {
  const imagesArray = getCurrentUserImages();
  imagesArray.forEach((poster, index) => {
    const newImgEl = document.createElement("img");
    newImgEl.setAttribute("src", poster);
    watchlist.appendChild(newImgEl);
  });
}

window.addEventListener("load", runDashboard);
