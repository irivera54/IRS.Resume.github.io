document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // stop form from submitting

    // validate form data
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var email = document.getElementById("email").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value;

    if (
      firstName === "" ||
      lastName === "" ||
      email === "" ||
      subject === "" ||
      message === ""
    ) {
      alert("All fields are required!");
      return;
    }

    // all validations passed, we can submit form now
    alert("Form data is valid. You can submit the form here.");
    // you can submit form with JS, AJAX or similar here
  });

