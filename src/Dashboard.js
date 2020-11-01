const watchlist = document.querySelector(".watchlist");
const viewedMovies = document.querySelector(".viewed-movies");

const imgBaseW200 = "https://image.tmdb.org/t/p/w200";

fetch(
  "https://api.themoviedb.org/3/movie/top_rated?api_key=a2bf12ab60f87e1ff69ef7b00f747938"
)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    // console.log(data.results[0])

    data.results.forEach((topMovie) => {
      // Below is for dashboard watchlist
      const srcUrl200 = imgBaseW200 + topMovie.poster_path;
      const imgTagsTopRated = document.createElement("img");
      imgTagsTopRated.setAttribute("src", srcUrl200);
      imgTagsTopRated.setAttribute("class", ".card");
      watchlist.appendChild(imgTagsTopRated);

      // Below is for dashboard viewed movies
      const imgTagsViewed = document.createElement("img");
      imgTagsViewed.setAttribute("src", srcUrl200);
      imgTagsViewed.setAttribute("class", ".card");
      viewedMovies.appendChild(imgTagsViewed);
    });
  })
  .catch((error) => {
    console.log(error);
  });
