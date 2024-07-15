document.addEventListener("DOMContentLoaded", function() {
    const loginButton = document.getElementById("loginButton");

    loginButton.addEventListener("click", function() {
        // Redirect to login page
        window.location.href = "attendance_management_loginpage.html";
    });
});
