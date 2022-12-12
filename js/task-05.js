const input = document.querySelector("#name-input");
console.log(input);
const output = document.querySelector("#name-output");
console.log(output);

input.addEventListener("input", eventValue);

function eventValue(event) {
  output.textContent =
    event.currentTarget.value === "" ? "Anonymous" : event.currentTarget.value;
}
