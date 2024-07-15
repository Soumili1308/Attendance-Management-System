document.getElementById("forgotUsernameLink").addEventListener("click", function(event) {
    event.preventDefault();
    window.location.href = "attendance_management_forgotusernamepage.html";
    alert("Forgot Username functionality will be implemented soon!");
});

document.getElementById("forgotPasswordLink").addEventListener("click", function(event) {
    event.preventDefault();
    window.location.href = "attendance_management_forgotpasswordpage.html";
    alert("Forgot Password functionality will be implemented soon!");
});

document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var loginAs = document.getElementById("loginAs").value;

    if (loginAs === "student") {
        // Redirect to student login page or handle student login
        window.location.href = "attendance_management_attendancepage.html";
        alert("Logging in as Student");
    } else if (loginAs === "faculty") {
        // Redirect to faculty login page or handle faculty login
        window.location.href = "attendance_management_attendancepage.html";
        alert("Logging in as Faculty");
    }
    
});
