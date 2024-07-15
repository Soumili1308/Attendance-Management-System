document.addEventListener("DOMContentLoaded", function() {

    const markAttendanceButton = document.getElementById("markAttendanceButton");
    const viewAttendanceButton = document.getElementById("viewAttendanceButton");
    const generateReportButton = document.getElementById("generateReportButton");

    markAttendanceButton.addEventListener("click", function() {
        // Redirect to the mark attendance page
        window.location.href = "attendance_management_markattendancepage.html";
    });

    viewAttendanceButton.addEventListener("click", function() {
        // Redirect to the view attendance page
        window.location.href = "attendance_management_viewattendancepage.html";
    });

    generateReportButton.addEventListener("click", function() {
        // Redirect to the generate report page
        window.location.href = "attendance_management_generatereportpage.html";
    });
});