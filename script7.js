document.getElementById("forgotUsernameForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const email = document.getElementById("email").value;

    // Here you would normally handle the email submission,
    // e.g., send a request to the server to retrieve the username associated with this email.
    
    alert(`Instructions to recover your username have been sent to ${email}.`);
});
