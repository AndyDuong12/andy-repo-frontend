// Add your code here

const form = document.getElementById("form");
const modal = new bootstrap.Modal(document.getElementById("formModal"));
const modalBody = document.getElementById("modalBody");

form.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent page reload

  // Get user input
  const fullName = document.getElementById("fullName").value.trim();
  const email = document.getElementById("email").value.trim();
  const registrationStatus =
    document.getElementById("registrationStatus").value;

  const courses = [];
  if (document.getElementById("prog-languages").checked)
    courses.push("Programming Languages");
  if (document.getElementById("op-systems").checked)
    courses.push("Operating Systems");
  if (document.getElementById("fullstack-webdev").checked)
    courses.push("Full Stack Web Developments");

  const comments = document.getElementById("comments").value.trim();

  // Create modal content
  modalBody.innerHTML = `
    <p><strong>Full Name:</strong> ${fullName || "N/A"}</p>
    <p><strong>Email:</strong> ${email || "N/A"}</p>
    <p><strong>Registration Status:</strong> ${
      registrationStatus === "Choose an Option" ? "N/A" : registrationStatus
    }</p>
    <p><strong>Courses Taken:</strong> ${
      courses.length > 0 ? courses.join(", ") : "None"
    }</p>
    <p><strong>Comments:</strong> ${comments || "N/A"}</p>
  `;

  // Show modal
  modal.show();

  // Reset form after submission
  form.reset();
});
