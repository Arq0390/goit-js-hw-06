const input = document.querySelector("#validation-input");
const inLength = input.getAttribute("data-length");

input.addEventListener("blur", () => {
  if (input.value.length === Number(inLength)) {
    input.classList.add("valid");
    input.classList.remove("invalid");
  } else {
    input.classList.add("invalid");
    input.classList.remove("valid");
  }
});
