// Smooth scroll to section
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

// Form submission with popup + inline message
const form = document.querySelector("form");
const status = document.createElement("p"); // message container
status.id = "form-status";
form.parentNode.appendChild(status); // add below form

form.addEventListener("submit", async function(e) {
  e.preventDefault();

  const data = new FormData(form);

  try {
    const response = await fetch(form.action, {
      method: form.method,
      body: data,
      headers: { 'Accept': 'application/json' }
    });

    if (response.ok) {
      // Popup alert for user confirmation
      alert("Thank you for reaching out! I'll get back to you soon.");
      // Inline message also visible below form
      status.textContent = "Thank you for reaching out! I'll get back to you soon.";
      form.reset();
    } else {
      alert("Oops! Something went wrong.");
      status.textContent = "Oops! Something went wrong.";
    }
  } catch (error) {
    alert("Error: Unable to send message.");
    status.textContent = "Error: Unable to send message.";
  }
});
