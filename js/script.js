const title = document.querySelector("h2");
const setup = document.querySelector(".setup");
const punchline = document.querySelector(".punchline");

const getRandomJoke = function () {
  fetch("https://official-joke-api.appspot.com/random_joke")
    .then(
      (response) => response.json(),
      (err) => {
        title.innerHTML = "There is a problem, please try again.";
      }
    )
    .then((data) => {
      document.title = data.setup;
      title.innerHTML = data.type + " Joke";
      setup.innerHTML = data.setup;
      punchline.innerHTML = data.punchline;
    });
};
getRandomJoke();
