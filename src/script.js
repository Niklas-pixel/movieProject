// index.html elements
const imageDivHero = document.querySelector(".trend-movies");

const imageDivTopRated = document.querySelector(".top-rated");
const imageDivUpcoming = document.querySelector(".upcoming");

const menu = document.querySelector(".menu");
const nav = document.querySelector(".menu-display");
const navOpen = document.querySelector(".cross");

const imgBase400 = "https://image.tmdb.org/t/p/w400";
const imgBase200 = "https://image.tmdb.org/t/p/w200";

// THIS IS FOR POPULAR MOVIES ON THE TOP OF HOMEPAGE (HERO)

fetch(
  "https://api.themoviedb.org/3/movie/popular?api_key=a2bf12ab60f87e1ff69ef7b00f747938"
)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    data.results.forEach((topMovie) => {
      const srcUrl400 = imgBase400 + topMovie.poster_path;
      const imgTagsHero = document.createElement("img");
      imgTagsHero.setAttribute("src", srcUrl400);
      imgTagsHero.setAttribute("class", ".card-trend");
      imageDivHero.appendChild(imgTagsHero);

      // set movie.html content on click and redirect to movie.html
      imgTagsHero.addEventListener("click", () => {
        location.assign(`movie.html?movie=${topMovie.id}`);
      });
    });
  })
  .catch((error) => {
    console.log(error);
  });

// THIS IS FOR TOP RATED MOVIES ON HOMEPAGE
fetch(
  "https://api.themoviedb.org/3/movie/top_rated?api_key=a2bf12ab60f87e1ff69ef7b00f747938"
)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    data.results.forEach((topMovie) => {
      const srcUrl200 = imgBase200 + topMovie.poster_path;
      const imgTagsTopRated = document.createElement("img");
      imgTagsTopRated.setAttribute("src", srcUrl200);
      imgTagsTopRated.setAttribute("class", ".card");
      imageDivTopRated.appendChild(imgTagsTopRated);

      // set movie.html content on click and redirect to movie.html
      imgTagsTopRated.addEventListener("click", () => {
        location.assign(`movie.html?movie=${topMovie.id}`);
      });
    });
  })
  .catch((error) => {
    console.log(error);
  });

// THIS IS FOR UPCOMING MOVIES ON HOMEPAGe
console.log("before fetch");
fetch(
  "https://api.themoviedb.org/3/movie/upcoming?api_key=a2bf12ab60f87e1ff69ef7b00f747938"
)
  .then((response) => {
    console.log("first then");
    return response.json();
  })
  .then((data) => {
    console.log("data");
    data.results.forEach((topMovie) => {
      const srcUrl200 = imgBase200 + topMovie.poster_path;
      const imgTagsUpcoming = document.createElement("img");
      imgTagsUpcoming.setAttribute("src", srcUrl200);
      imgTagsUpcoming.setAttribute("class", ".card-trend");
      imageDivUpcoming.appendChild(imgTagsUpcoming);

      // set movie.html content on click and redirect to movie.html
      imgTagsUpcoming.addEventListener("click", () => {
        location.assign(
          `https://niklaswernfeldt.github.io/movieProject/movie.html?movie=${topMovie.id}`
        );
      }); // PROD /* https://niklaswernfeldt.github.io/movieProject/movie.html?movie=724089 */
    }); // DEV /* `movie.html?movie=${topMovie.id}` */
  })
  .catch((error) => {
    console.log(error);
  });

menu.addEventListener("click", () => {
  nav.classList.add("open");
});
navOpen.addEventListener("click", () => {
  nav.classList.remove("open");
});
