function randomNumber(max = 99, min = 0) {
  return Math.floor(Math.random() * max) + min;
}

async function getMovie() {
  try {
    const response = await fetch("https://api.sampleapis.com/movies/classic");
    const data = await response.json();

    const title = document.getElementById("title");
    const cover = document.getElementById("cover");

    const index = randomNumber(data.length);

    title.innerText = data[index].title;
    cover.setAttribute("src", data[index].posterURL);
  } catch (error) {
    console.error(error);
  }
}

/*fetch("https://api.sampleapis.com/movies/classic", {
    method: "GET"
}).then((response) => {
    console.log("response", response);
    response.json().then((data) => {
        console.log("data", data);

        const title = document.getElementById("title");
        const cover = document.getElementById("cover");

        title.innerText = data[0].title;
        cover.setAttribute("src", data[0].posterURL);
    })
})*/
