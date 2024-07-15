document.getElementById("forgotPasswordForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;

    // Here you would normally handle the username and email submission,
    // e.g., send a request to the server to reset the password for this username and email.
    
    alert(`Instructions to reset your password have been sent to ${email}.`);
});
