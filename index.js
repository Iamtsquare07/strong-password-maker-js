const copy = document.getElementById("copy");
const passwordField = document.getElementById("generated");
const lengthField = document.getElementById("characters");

function generatePassword() {
  const length = parseInt(lengthField.value);
  const includeSpecialChars = document.getElementById("special").checked;
  const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  const numericChars = "0123456789";
  const specialChars = "!@#$€£¥₦%^&*()_+[]{}|;:,.<>?";

  let characters = uppercaseChars + lowercaseChars + numericChars;
  if (includeSpecialChars) {
    characters += specialChars;
  }

  let password = "";

  if (!length) {
    lengthField.focus();
    return;
  }

  if (length > 7) {
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      password += characters.charAt(randomIndex);
    }

    passwordField.value = password;
    document.querySelector(".result").style.display = "block";
    copy.textContent = "Click to copy";
  } else {
    alert(
      "Pasword less than 8 characters long is too weak for a hero like you"
    );
  }
}

function copyToClipboard() {
  const passwordText = passwordField.value;
  navigator.clipboard.writeText(passwordText);
  if (!passwordText) {
    lengthField.focus();
    alert("Generate a password first");
    return;
  }
  copy.textContent = "Password Copied!";
}

document.getElementById("generate").addEventListener("click", generatePassword);
copy.addEventListener("click", copyToClipboard);
