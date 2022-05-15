const container = document.querySelector(".dynamic-divs");
const reset = document.querySelector(".reset");
const input = document.querySelector(".dynamic input");

input.addEventListener("change", function (e) {
  container.innerHTML = "";
  for (let i = 1; i <= e.target.value; i++) {
    container.insertAdjacentHTML("beforeend", `<div>Number ${i}</div>`);
  }
});

reset.addEventListener("click", function () {
  input.value = 0;
  container.innerHTML = "";
});
