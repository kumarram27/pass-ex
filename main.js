const tuneIcon = document.getElementById("tune");
const optionsDiv = document.getElementById("options");

tuneIcon.addEventListener("click", function () {
  optionsDiv.classList.toggle("show");
});

const password_input = document.getElementById("password");
const length_input = document.getElementById("lengthSlider");
const length_output = document.getElementById("length");
length_input.addEventListener("input", updateLength);
const upperCase_input = document.getElementById("uppercase");
const lowerCase_input = document.getElementById("lowercase");
const numbers_input = document.getElementById("numbers");
const symbols_input = document.getElementById("symbols");
const generate_button = document.getElementById("generate");
generate_button.addEventListener("click", generatePassword);
const copy_btn = document.getElementById("copy");
copy_btn.addEventListener("click", copyPassword);

const uppercase_chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase_chars = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+";

function updateLength() {
  length_output.textContent = length_input.value;
  updateProgress(); // Call the function to update the progress bar
}

function updateProgress() {
  // Calculate the width of the progress bar
  const width =
    ((length_input.value - length_input.min) /
      (length_input.max - length_input.min)) *
    100;
  // Set the width of the progress bar dynamically
  length_input.style.background = `linear-gradient(to right, #ad25fc ${width}%, #ddd ${width}%)`;
  generatePassword(); // Call the function to generate the password
}

function generatePassword() {
  let length = length_input.value;
  let password = "";
  let chars = "";

  chars += upperCase_input.checked ? uppercase_chars : "";
  chars += lowerCase_input.checked ? lowercase_chars : "";
  chars += numbers_input.checked ? numbers : "";
  chars += symbols_input.checked ? symbols : "";
  for (let i = 0; i < length; i++) {
    let rand = Math.floor(Math.random() * chars.length);
    password += chars.substring(rand, rand + 1);
  }
  password_input.value = password;
}

async function copyPassword() {
  await navigator.clipboard.writeText(password_input.value);
  alert("Password copied to clipboard");
}

// Call the updateLength function initially to set the initial value
updateLength();
