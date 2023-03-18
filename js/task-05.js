const inputText = document.querySelector("#name-input");
const outputText = document.querySelector("#name-output");
inputText.addEventListener("input", writeSpan);

function writeSpan() {
  if (inputText.value == "") {
    outputText.textContent = "Anonymous";
  } else {
    outputText.textContent = inputText.value;
  }
}
