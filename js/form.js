window.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form");
  const keyInput = document.getElementById("some-object-key");
  const valueInput = document.getElementById("some-object-value");
  const out = document.getElementById("out");
  const someObject = {};
  function getOutput(obj) {
    let output = "";
    for (const key in obj) {
      output += `<div class="outKey">Key: ${key} Value: ${obj[key]}</div>`;
    }
    return output;
  }
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    someObject[keyInput.value] = valueInput.value;
    out.innerHTML = getOutput(someObject);
  });
});

/*const keyInput = document.getElementById("some-object-key");
const valueInput = document.getElementById("some-object-value");
const out = document.getElementById("out");
const btn = document.getElementById("btn");
const someObject = {};
function getOutput(obj) {
  let output = "";
  for (const key in obj) {
    output += `
 <div class="outKey">Key: ${key} 
 Value: ${obj[key]}</div>`;
  }
  return output;
}
btn.onclick = () => {
  someObject[keyInput.value] = valueInput.value;
  out.innerHTML = getOutput(someObject);
}; 
*/
