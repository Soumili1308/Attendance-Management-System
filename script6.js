function generateReport() {
    const studentName = document.getElementById("studentName").value;
    const studentId = document.getElementById("studentId").value;
    const batch = document.getElementById("batch").value;

    const attendanceData = JSON.parse(localStorage.getItem('attendanceData')) || [];
    const studentReports = attendanceData.filter(record => {
        return record.batch === batch && record.students.some(student => student.id == studentId && student.name.toLowerCase() === studentName.toLowerCase());
    });

    displayReport(studentReports, studentName, studentId, batch);
}

function displayReport(data, studentName, studentId, batch) {
    const reportContainer = document.getElementById("reportContainer");
    reportContainer.innerHTML = "";

    if (data.length === 0) {
        reportContainer.innerHTML = "<p>No attendance records found for this student.</p>";
        return;
    }

    const table = document.createElement("table");
    table.classList.add("report-table");
    table.innerHTML = `
        <tr>
            <th>Date</th>
            <th>Faculty</th>
            <th>Subject</th>
            <th>Batch</th>
            <th>Attendance</th>
        </tr>
    `;

    data.forEach(record => {
        const studentRecord = record.students.find(student => student.id == studentId && student.name.toLowerCase() === studentName.toLowerCase());
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${record.date}</td>
            <td>${record.faculty}</td>
            <td>${record.subject}</td>
            <td>${record.batch}</td>
            <td>${studentRecord.present ? "Present" : "Absent"}</td>
        `;
        table.appendChild(row);
    });

    reportContainer.appendChild(table);
}
