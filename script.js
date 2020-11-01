const imageDiv = document.querySelector(".pic");
const body = document.querySelector(".body");

const imgBase = "https://image.tmdb.org/t/p/w200";

fetch(
  "https://api.themoviedb.org/3/movie/top_rated?api_key=a2bf12ab60f87e1ff69ef7b00f747938"
)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    // console.log(data.results[0])

    data.results.forEach((topMovie) => {
      const imgTag = document.createElement("img");
      const srcUrl = imgBase + topMovie.poster_path;
      imgTag.setAttribute("src", srcUrl);
      imageDiv.appendChild(imgTag);
    });
  })
  .catch((error) => {
    console.log(error);
  });
