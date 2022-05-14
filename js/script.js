const title = document.querySelector("h2");
const setup = document.querySelector(".setup");
const punchline = document.querySelector(".punchline");

const getRandomJoke = function () {
  fetch("https://v2.jokeapi.dev/joke/Any?type=twopart")
    .then(
      (response) => response.json(),
      (err) => {
        title.textContent = "There is a problem, please try again.";
      }
    )
    .then((data) => {
      console.log(data);
      document.title = data.setup;
      title.textContent = data.category + " Joke";
      setup.textContent = data.setup;
      punchline.textContent = data.delivery;
    });
};
getRandomJoke();
