// Get form and output elements
var form = document.getElementById("Resumeform");
var resumeOutput = document.getElementById("resumeOutput");
// Event listener for form submission
form.addEventListener("submit", function (event) {
    event.preventDefault();
    // Collect form data
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var education = document.getElementById("education").value;
    var experience = document.getElementById("experience").value;
    var skills = document.getElementById("skills").value;
    // Generate editable resume content
    var resumeContent = "\n        <h2>Editable Resume</h2>\n        <p><strong>Name:</strong> <input type=\"text\" value=\"".concat(name, "\" id=\"editableName\" /></p>\n        <p><strong>Email:</strong> <input type=\"email\" value=\"").concat(email, "\" id=\"editableEmail\" /></p>\n        <p><strong>Phone:</strong> <input type=\"tel\" value=\"").concat(phone, "\" id=\"editablePhone\" /></p>\n        <h3>Education</h3>\n        <textarea id=\"editableEducation\">").concat(education, "</textarea>\n        <h3>Experience</h3>\n        <textarea id=\"editableExperience\">").concat(experience, "</textarea>\n        <h3>Skills</h3>\n        <textarea id=\"editableSkills\">").concat(skills, "</textarea>\n        <button id=\"saveButton\">Save</button>\n    ");
    // Display editable resume content in the output div
    resumeOutput.innerHTML = resumeContent;
    // Event listener to handle saving the edited resume
    var saveButton = document.getElementById("saveButton");
    saveButton.addEventListener("click", function () {
        // Get updated values
        var updatedName = document.getElementById("editableName").value;
        var updatedEmail = document.getElementById("editableEmail").value;
        var updatedPhone = document.getElementById("editablePhone").value;
        var updatedEducation = document.getElementById("editableEducation").value;
        var updatedExperience = document.getElementById("editableExperience").value;
        var updatedSkills = document.getElementById("editableSkills").value;
        // Generate the updated resume content
        var updatedResumeContent = "\n            <h2>Resume</h2>\n            <p><strong>Name:</strong> ".concat(updatedName, "</p>\n            <p><strong>Email:</strong> ").concat(updatedEmail, "</p>\n            <p><strong>Phone:</strong> ").concat(updatedPhone, "</p>\n            <h3>Education</h3>\n            <p>").concat(updatedEducation, "</p>\n            <h3>Experience</h3>\n            <p>").concat(updatedExperience, "</p>\n            <h3>Skills</h3>\n            <p>").concat(updatedSkills, "</p>\n        ");
        // Update the resume output with the new content
        resumeOutput.innerHTML = updatedResumeContent;
    });
});
