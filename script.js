function validateEmail(event) {
  // Prevent the form submit
  event.preventDefault();

  // REGEX taken from this article: https://www.w3resource.com/javascript/form/email-validation.php
  let mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  let emailBox = document.querySelector("#email");
  let errorText = document.querySelector(".error-text");

  //   Grabbing the email provided by the user
  let inputEmail = event.target.elements.email.value;

  if (inputEmail.match(mailformat)) {
    emailBox.classList.remove("active");
    errorText.classList.remove("active");
    return true;
  } else {
    emailBox.classList.add("active");
    errorText.classList.add("active");
    return false;
  }
}

let form = document.getElementById("form1");

// attach event listener
form.addEventListener("submit", validateEmail, true);
