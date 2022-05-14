const results = document.querySelector(".results");
const loader = document.querySelector(".loader");
const title = document.querySelector("h1");

fetch("https://v2.jokeapi.dev/joke/Any?amount=10&type=twopart")
  .then((response) => response.json())
  .then((data) => {
    data.jokes.forEach((joke, index) => {
      if (index == 2) {
        document.title = joke.setup;
      }
      if (index > 4) return;
      const card = `<div class="col-sm-6 col-md-4 col-lg-3">
                    <div class="card">
                        <div class="joke-detail">
                            <h4 class="type">${joke.category}</h4>
                            <div class="setup">${joke.setup}</div>
                            <div class="punchline">${joke.delivery}</div>
                        </div>
                    </div>
                </div>`;
      loader.style.display = "none";
      results.insertAdjacentHTML("beforeend", card);
    });
  })
  .catch((err) => {
    title.textContent = err;
    loader.style.display = "none";
  });
