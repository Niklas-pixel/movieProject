const moviePage = document.querySelector(".movie-page");

class Movie {
  constructor(image, title, duration, description) {
    this.image = image;
    this.title = title;
    this.duration = duration;
    this.description = description;
  }
}

// old
/* function addMovieInfo() {
  const imgEl = document.createElement("img");
  imgEl.setAttribute("src", movie.image);
  moviePage.appendChild(imgEl);
}

addMovieInfo(); */

/* 
addMovieInfo(image) {
    const imgEl = document.createElement("img");
    imgEl.setAttribute("src", image);
    moviePage.appendChild(imgEl);
    console.log(imgEl);
    location.assign("movie.html");
  }
*/
