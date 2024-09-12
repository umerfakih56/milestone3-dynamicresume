function takeValue(event: Event): void {
    event.preventDefault(); 

   let name = (document.getElementById("name") as HTMLInputElement).value;
    let email = (document.getElementById("email") as HTMLInputElement).value;
    let phone = (document.getElementById("phone") as HTMLInputElement).value;
    let linkedin = (document.getElementById("linkedin") as HTMLInputElement).value;
    let degree = (document.getElementById("degree") as HTMLInputElement).value;
    let university = (document.getElementById("university") as HTMLInputElement).value;
    let dates = (document.getElementById("dates") as HTMLInputElement).value;
    let skills = (document.getElementById("skills") as HTMLTextAreaElement).value;

    let outputDiv = document.getElementById("resumeOutput");

    if (outputDiv) {
        outputDiv.innerHTML = `
            <h2>Generated Resume</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>LinkedIn:</strong> <a href="${linkedin}" target="_blank">${linkedin}</a></p>
            <p><strong>Degree:</strong> ${degree}</p>
            <p><strong>University:</strong> ${university}</p>
            <p><strong>Dates:</strong> ${dates}</p>
            <p><strong>Skills:</strong> ${skills}</p>
        `;
    }
}

let form = document.getElementById("resumeForm");
if (form) {
    form.addEventListener("submit", takeValue);
}