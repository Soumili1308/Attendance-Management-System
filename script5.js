document.addEventListener("DOMContentLoaded", function() {
    const faculties = ["Prof. Jayanta Poray", "Prof. Subhasis Koley", "Prof. Oshmita Dey","Prof. Sauvik Bal","Prof. Kalyan Kumar Das"];
    const subjects = ["Computer Networks", "Operational Research", "Compiler Design","Web Technology","Software Engineering"];
    const batches = ["BCS3C"];

    // Populate filter dropdowns
    const facultyFilter = document.getElementById("facultyFilter");
    const subjectFilter = document.getElementById("subjectFilter");
    const batchFilter = document.getElementById("batchFilter");

    faculties.forEach(faculty => {
        const option = document.createElement("option");
        option.value = faculty;
        option.textContent = faculty;
        facultyFilter.appendChild(option);
    });

    subjects.forEach(subject => {
        const option = document.createElement("option");
        option.value = subject;
        option.textContent = subject;
        subjectFilter.appendChild(option);
    });

    batches.forEach(batch => {
        const option = document.createElement("option");
        option.value = batch;
        option.textContent = batch;
        batchFilter.appendChild(option);
    });
});

function filterAttendance() {
    const facultyFilter = document.getElementById("facultyFilter").value;
    const subjectFilter = document.getElementById("subjectFilter").value;
    const batchFilter = document.getElementById("batchFilter").value;

    const attendanceData = JSON.parse(localStorage.getItem('attendanceData')) || [];

    const filteredData = attendanceData.filter(record => {
        return (
            (!facultyFilter || record.faculty === facultyFilter) &&
            (!subjectFilter || record.subject === subjectFilter) &&
            (!batchFilter || record.batch === batchFilter)
        );
    });

    displayAttendance(filteredData);
}

function displayAttendance(data) {
    const attendanceContainer = document.getElementById("attendanceContainer");
    attendanceContainer.innerHTML = "";

    if (data.length === 0) {
        attendanceContainer.innerHTML = "<p>No attendance records found.</p>";
        return;
    }

    data.forEach(record => {
        const recordElement = document.createElement("div");
        recordElement.classList.add("attendance-record");

        recordElement.innerHTML = `
            <h3>${record.date}</h3>
            <p><strong>Faculty:</strong> ${record.faculty}</p>
            <p><strong>Subject:</strong> ${record.subject}</p>
            <p><strong>Batch:</strong> ${record.batch}</p>
            <ul>
                ${record.students.map(student => `
                    <li>
                        <span><strong>ID:</strong> ${student.id}</span>
                        <span><strong>Name:</strong> ${student.name}</span>
                        <span><strong>Present:</strong> ${student.present ? "P" : "A"}</span>
                    </li>
                `).join('')}
            </ul>
        `;

        attendanceContainer.appendChild(recordElement);
    });
}
