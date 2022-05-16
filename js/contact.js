const contactForm = document.getElementById("contactForm");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const subject = document.getElementById("subject");
const message = document.getElementById("message");
const errors = document.getElementsByClassName("form-error");

contactForm.addEventListener("submit", function (e) {
  e.preventDefault();

  for (let err of errors) {
    err.style.display = "none";
  }

  if (firstName.value == "") {
    document.getElementById("firstNameError").style.display = "block";
  }

  if (lastName.value.length < 3) {
    document.getElementById("lastNameError").style.display = "block";
  }

  const emailRegex = /(.+)@(.+){2,}.(.+){2,}/;
  if (!emailRegex.test(email.value)) {
    document.getElementById("emailError").style.display = "block";
  }

  if (subject.value.length < 7) {
    document.getElementById("subjectError").style.display = "block";
  }

  if (message.value.length < 15) {
    document.getElementById("messageError").style.display = "block";
  }
});
