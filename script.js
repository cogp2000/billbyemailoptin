(() => {
  const form = document.getElementById("enrollment-form");
  const email = document.getElementById("email");
  const confirmEmail = document.getElementById("confirm-email");
  const emailMessage = document.getElementById("email-match-message");
  const fileInput = document.getElementById("photo-id");
  const fileMessage = document.getElementById("file-message");
  const submitButton = document.getElementById("submit-button");

  const MAX_FILE_BYTES = 7 * 1024 * 1024;
  const ALLOWED_TYPES = new Set([
    "image/jpeg",
    "image/png",
    "application/pdf"
  ]);

  function validateEmails() {
    if (!confirmEmail.value) {
      emailMessage.textContent = "";
      confirmEmail.setCustomValidity("");
      return true;
    }

    const match = email.value.trim().toLowerCase() === confirmEmail.value.trim().toLowerCase();
    confirmEmail.setCustomValidity(match ? "" : "Email addresses must match.");
    emailMessage.textContent = match ? "" : "The email addresses do not match.";
    return match;
  }

  function validateFile() {
    const file = fileInput.files && fileInput.files[0];
    fileInput.setCustomValidity("");
    fileMessage.textContent = "";

    if (!file) return true;

    if (file.size > MAX_FILE_BYTES) {
      fileInput.setCustomValidity("The ID file must be 7 MB or smaller.");
      fileMessage.textContent = "This file is too large. Please upload a file that is 7 MB or smaller.";
      return false;
    }

    if (file.type && !ALLOWED_TYPES.has(file.type)) {
      fileInput.setCustomValidity("Upload a JPG, PNG, or PDF file.");
      fileMessage.textContent = "Please upload a JPG, PNG, or PDF file.";
      return false;
    }

    return true;
  }

  email.addEventListener("input", validateEmails);
  confirmEmail.addEventListener("input", validateEmails);
  fileInput.addEventListener("change", validateFile);

  form.addEventListener("submit", (event) => {
    const emailsValid = validateEmails();
    const fileValid = validateFile();

    if (!emailsValid || !fileValid || !form.checkValidity()) {
      event.preventDefault();
      form.reportValidity();
      return;
    }

    submitButton.disabled = true;
    submitButton.textContent = "Submitting…";
  });
})();
