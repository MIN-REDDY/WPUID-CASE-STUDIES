// ==============================
// STUDENT ENQUIRY FORM
// ==============================

const enquiryForm = document.getElementById("enquiryForm");
const formMessage = document.getElementById("formMessage");

enquiryForm.addEventListener("submit", function (event) {

    // Prevent the page from reloading
    event.preventDefault();

    // Collect form values
    const studentName = document.getElementById("studentName").value.trim();
    const rollNumber = document.getElementById("rollNumber").value.trim();
    const email = document.getElementById("email").value.trim();
    const mobile = document.getElementById("mobile").value.trim();
    const enquiryType = document.getElementById("enquiryType").value;
    const message = document.getElementById("message").value.trim();

    // Check whether all required fields contain data
    if (!studentName || !rollNumber || !email || !mobile || !enquiryType || !message) {
        formMessage.textContent = "Please fill in all the fields.";
        formMessage.style.color = "red";
        return;
    }

    // Validate mobile number
    if (!/^[0-9]{10}$/.test(mobile)) {
        formMessage.textContent = "Please enter a valid 10-digit mobile number.";
        formMessage.style.color = "red";
        return;
    }

    // Display successful submission feedback
    formMessage.textContent =
        "Thank you, " + studentName + "! Your enquiry has been submitted successfully.";

    formMessage.style.color = "green";

    // Reset the form
    enquiryForm.reset();

});


// ==============================
// DOWNLOAD RESOURCE FUNCTION
// ==============================

function downloadResource(filename, content) {

    // Create a Blob containing the resource text
    const blob = new Blob([content], {
        type: "text/plain"
    });

    // Create a temporary URL
    const url = URL.createObjectURL(blob);

    // Create a temporary download link
    const link = document.createElement("a");

    link.href = url;
    link.download = filename;

    // Trigger download
    document.body.appendChild(link);
    link.click();

    // Remove the temporary link
    document.body.removeChild(link);

    // Release the temporary URL
    URL.revokeObjectURL(url);
}


// ==============================
// RESOURCE BUTTONS
// ==============================

const downloadButtons = document.querySelectorAll(".download-button");

downloadButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const resource = button.getAttribute("data-download");

        if (resource === "timetable") {

            downloadResource(
                "Sample_Timetable.txt",
                "Malla Reddy University\n\nSample Student Timetable\n\nMonday: Mathematics\nTuesday: Programming\nWednesday: Physics\nThursday: Cyber Security\nFriday: English\n\nThis is a sample timetable for the case study."
            );

        } else if (resource === "application") {

            downloadResource(
                "Student_Application.txt",
                "Malla Reddy University\n\nSample Student Application\n\nStudent Name: ____________\nRoll Number: ____________\nDepartment: ____________\nPurpose: ____________\nDate: ____________\n\nThis is a sample student application resource."
            );

        } else if (resource === "guidelines") {

            downloadResource(
                "Academic_Guidelines.txt",
                "Malla Reddy University\n\nSample Academic Guidelines\n\n1. Attend classes regularly.\n2. Follow university academic instructions.\n3. Check academic announcements.\n4. Complete assignments on time.\n5. Follow examination guidelines.\n\nThis is a sample academic guideline resource."
            );

        }

    });

});
