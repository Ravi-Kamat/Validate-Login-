function validateForm(event) {
    event.preventDefault(); // prevent form from submitting

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let message = document.getElementById("message");

    if (email.indexOf("@") == -1) { // check for @ symbol in email
        message.innerHTML = "Invalid email or password!";
        message.className = "error-message";
    } else if (password.length < 8) { // check for password length
        message.innerHTML = "Invalid email or password!";
        message.className = "error-message";
    } else {
        message.innerHTML = "Valid email and password!";
        message.className = "valid-message";
    }
}