// index.html elements
const imageDivHero = document.querySelector(".trend-movies");
const imageDivTopRated = document.querySelector(".movie-row");

const imgBase400 = "https://image.tmdb.org/t/p/w400";
const imgBase200 = "https://image.tmdb.org/t/p/w200";

fetch(
  "https://api.themoviedb.org/3/movie/top_rated?api_key=a2bf12ab60f87e1ff69ef7b00f747938"
)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    // console.log(data.results[0])

    data.results.forEach((topMovie) => {
      // Below is for trend movies top of homepage
      const srcUrl400 = imgBase400 + topMovie.poster_path;
      const imgTagsHero = document.createElement("img");
      imgTagsHero.setAttribute("src", srcUrl400);
      imgTagsHero.setAttribute("class", ".card-trend");
      imageDivHero.appendChild(imgTagsHero);
      // Below is for top-rated movies homepage
      const srcUrl200 = imgBase200 + topMovie.poster_path;
      const imgTagsTopRated = document.createElement("img");
      imgTagsTopRated.setAttribute("src", srcUrl200);
      imgTagsTopRated.setAttribute("class", ".card");
      imageDivTopRated.appendChild(imgTagsTopRated);

      // set movie.html content on click and redirect to movie.html
      imgTagsTopRated.addEventListener("click", () => {
        const movie = new Movie(srcUrl400);

        console.log(movie);

        // location.assign("movie.html");
      });
    });
  })
  .catch((error) => {
    console.log(error);
  });

// THIS IS WHERE CLASSES COME IN, STORE THE CLICKED MOVIES PROPERTIES IN THE CLASS
// AND IN Movie.js And movie.html DISPLAY THOSE PROPERTIES
