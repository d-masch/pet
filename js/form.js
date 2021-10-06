const keyInput = document.getElementById("some-object-key");
const valueInput = document.getElementById("some-object-value");
const out = document.getElementById("Out");
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
