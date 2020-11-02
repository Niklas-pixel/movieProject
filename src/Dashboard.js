const watchlist = document.querySelector(".watchlist");
const viewedMovies = document.querySelector(".viewed-movies");

const imgBaseW200 = "https://image.tmdb.org/t/p/w200";

// DISPLAY ALL THE MOVIES IMAGES FROM LOCALSTORAGE
function getAllImages() {
  const imagesString = localStorage.getItem("images");
  const imagesArray = JSON.parse(imagesString);

  if (imagesArray === null) {
    return [];
  } else {
    return imagesArray;
  }
}

function displayWatchlist() {
  const imagesArray = getAllImages();
  imagesArray.forEach((poster, index) => {
    const newImgEl = document.createElement("img");
    newImgEl.setAttribute("src", poster);
    watchlist.appendChild(newImgEl);
  });
}

displayWatchlist();
