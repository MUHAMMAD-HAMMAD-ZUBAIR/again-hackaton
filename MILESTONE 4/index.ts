// Get form and output elements
const form = document.getElementById("Resumeform") as HTMLFormElement;
const resumeOutput = document.getElementById("resumeOutput") as HTMLDivElement;

// Event listener for form submission
form.addEventListener("submit", (event) => {
    event.preventDefault();

    // Collect form data
    const name = (document.getElementById("name") as HTMLInputElement).value;
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const phone = (document.getElementById("phone") as HTMLInputElement).value;
    const education = (document.getElementById("education") as HTMLTextAreaElement).value;
    const experience = (document.getElementById("experience") as HTMLTextAreaElement).value;
    const skills = (document.getElementById("skills") as HTMLTextAreaElement).value;

    // Generate editable resume content
    const resumeContent = `
        <h2>Editable Resume</h2>
        <p><strong>Name:</strong> <input type="text" value="${name}" id="editableName" /></p>
        <p><strong>Email:</strong> <input type="email" value="${email}" id="editableEmail" /></p>
        <p><strong>Phone:</strong> <input type="tel" value="${phone}" id="editablePhone" /></p>
        <h3>Education</h3>
        <textarea id="editableEducation">${education}</textarea>
        <h3>Experience</h3>
        <textarea id="editableExperience">${experience}</textarea>
        <h3>Skills</h3>
        <textarea id="editableSkills">${skills}</textarea>
        <button id="saveButton">Save</button>
    `;

    // Display editable resume content in the output div
    resumeOutput.innerHTML = resumeContent;

    // Event listener to handle saving the edited resume
    const saveButton = document.getElementById("saveButton") as HTMLButtonElement;
    saveButton.addEventListener("click", () => {
        // Get updated values
        const updatedName = (document.getElementById("editableName") as HTMLInputElement).value;
        const updatedEmail = (document.getElementById("editableEmail") as HTMLInputElement).value;
        const updatedPhone = (document.getElementById("editablePhone") as HTMLInputElement).value;
        const updatedEducation = (document.getElementById("editableEducation") as HTMLTextAreaElement).value;
        const updatedExperience = (document.getElementById("editableExperience") as HTMLTextAreaElement).value;
        const updatedSkills = (document.getElementById("editableSkills") as HTMLTextAreaElement).value;

        // Generate the updated resume content
        const updatedResumeContent = `
            <h2>Resume</h2>
            <p><strong>Name:</strong> ${updatedName}</p>
            <p><strong>Email:</strong> ${updatedEmail}</p>
            <p><strong>Phone:</strong> ${updatedPhone}</p>
            <h3>Education</h3>
            <p>${updatedEducation}</p>
            <h3>Experience</h3>
            <p>${updatedExperience}</p>
            <h3>Skills</h3>
            <p>${updatedSkills}</p>
        `;

        // Update the resume output with the new content
        resumeOutput.innerHTML = updatedResumeContent;
    });
});
