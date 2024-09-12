function takeValue(event) {
    event.preventDefault();
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var linkedin = document.getElementById("linkedin").value;
    var degree = document.getElementById("degree").value;
    var university = document.getElementById("university").value;
    var dates = document.getElementById("dates").value;
    var skills = document.getElementById("skills").value;
    var outputDiv = document.getElementById("resumeOutput");
    if (outputDiv) {
        outputDiv.innerHTML = "\n            <h2>Generated Resume</h2>\n            <p><strong>Name:</strong> ".concat(name, "</p>\n            <p><strong>Email:</strong> ").concat(email, "</p>\n            <p><strong>Phone:</strong> ").concat(phone, "</p>\n            <p><strong>LinkedIn:</strong> <a href=\"").concat(linkedin, "\" target=\"_blank\">").concat(linkedin, "</a></p>\n            <p><strong>Degree:</strong> ").concat(degree, "</p>\n            <p><strong>University:</strong> ").concat(university, "</p>\n            <p><strong>Dates:</strong> ").concat(dates, "</p>\n            <p><strong>Skills:</strong> ").concat(skills, "</p>\n        ");
    }
}
var form = document.getElementById("resumeForm");
if (form) {
    form.addEventListener("submit", takeValue);
}
