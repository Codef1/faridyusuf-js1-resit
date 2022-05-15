const paragraphs = document.querySelector(".about");

for (let i = 1; i < paragraphs.childNodes.length; i++) {
  paragraphs.insertBefore(paragraphs.childNodes[i], paragraphs.firstChild);
}
