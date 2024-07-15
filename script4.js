document.addEventListener("DOMContentLoaded", function() {
    // Mock data
    const faculties = ["Prof. Jayanta Poray", "Prof. Subhasis Koley", "Prof. Oshmita Dey","Prof. Sauvik Bal","Prof. Kalyan Kumar Das"];
    const subjects = ["Computer Networks", "Operational Research", "Compiler Design","Web Technology","Software Engineering"];
    const batches = ["BCS3C"];
    const students = [
        { id: 1200, name: "Soumili Bose" },
        { id: 1201, name: "Chirag Chakraborty" },
        { id: 1202, name: "Kaulick Patra" },
        { id: 1203, name: "Rudrayan Dey" },
        { id: 1204, name: "Rupan Biswas" },
        { id: 1205, name: "Aritra Dakua" },
        { id: 1206, name: "Barsha Guha" },
        { id: 1207, name: "Arijit Pal" },
        { id: 1208, name: "Rohan Banik" },
        { id: 1209, name: "Tuneer Paul" },
        { id: 1210, name: "Ankita Ghoshal" },
        { id: 1211, name: "Saikat Bhattacharya" },
        { id: 1213, name: "Kritika Chaterjee" },
        { id: 1214, name: "Drishty Budhiya" },
        { id: 1215, name: "Akash Tiwari" },
        { id: 1216, name: "Riza Mukherjee" },
        { id: 1217, name: "Sk Sohel" },
        { id: 1218, name: "Binu Dubey" },
        { id: 1219, name: "Zakra Hayat" },
        { id: 1220, name: "Akash Shaw" }
    ];

    // Populate dropdowns
    const facultySelect = document.getElementById("facultyName");
    const subjectSelect = document.getElementById("subject");
    const batchSelect = document.getElementById("batch");

    faculties.forEach(faculty => {
        const option = document.createElement("option");
        option.value = faculty;
        option.textContent = faculty;
        facultySelect.appendChild(option);
    });

    subjects.forEach(subject => {
        const option = document.createElement("option");
        option.value = subject;
        option.textContent = subject;
        subjectSelect.appendChild(option);
    });

    batches.forEach(batch => {
        const option = document.createElement("option");
        option.value = batch;
        option.textContent = batch;
        batchSelect.appendChild(option);
    });

    // Populate students
    const studentsContainer = document.getElementById("studentsContainer");

    students.forEach(student => {
        const studentRow = document.createElement("div");
        studentRow.classList.add("student-row");

        studentRow.innerHTML = `
            <span><strong>ID:</strong> ${student.id}</span>
            <span><strong>Name:</strong> ${student.name}</span>
            <button id="mark_${student.id}" onclick="markAttendance(${student.id})">Mark Present</button>
        `;

        studentsContainer.appendChild(studentRow);
    });

    // Handle form submission
    document.getElementById("attendanceForm").addEventListener("submit", function(event) {
        event.preventDefault();
        const faculty = facultySelect.value;
        const subject = subjectSelect.value;
        const batch = batchSelect.value;
        const date = document.getElementById("date").value;

        const attendance = {
            faculty,
            subject,
            batch,
            date,
            students: []
        };

        students.forEach(student => {
            const button = document.getElementById(`mark_${student.id}`);
            if (button.disabled) {
                attendance.students.push({
                    id: student.id,
                    name: student.name,
                    present: true
                });
            } else {
                attendance.students.push({
                    id: student.id,
                    name: student.name,
                    present: false
                });
            }
        });

        saveAttendance(attendance);
        alert("Attendance has been submitted!");
    });
});

function markAttendance(studentId) {
    const button = document.getElementById(`mark_${studentId}`);
    button.textContent = "Present";
    button.classList.add("marked");
    button.disabled = true;
}

function saveAttendance(attendance) {
    let attendanceData = JSON.parse(localStorage.getItem('attendanceData')) || [];
    attendanceData.push(attendance);
    localStorage.setItem('attendanceData', JSON.stringify(attendanceData));
}
