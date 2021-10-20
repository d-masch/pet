const keyInput = document.getElementById("some-object-key");
const valueInput = document.getElementById("some-object-value");
const someObject = {};
const form = document.getElementById("form");
const out = document.getElementById("out");
window.addEventListener("DOMContentLoaded", () => {
  form.addEventListener("submit", callBack);
});
function callBack(event) {
  event.preventDefault();
  someObject[keyInput.value] = valueInput.value;
  out.innerHTML = getOutput(someObject);
 }
function getOutput(obj) {
  let output = "";
  for (const key in obj) {
    output += `<div class="outKey">Key: ${key} Value: ${obj[key]}</div>`;
  }
  return output;
}
