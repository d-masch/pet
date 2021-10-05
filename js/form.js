const keyInput = document.getElementById("some-object-key");
const valueInput = document.getElementById("some-object-value");
const someObject = {};
const btn = document.getElementById("btn");
btn.onclick = () => {
  someObject[keyInput.value] = valueInput.value;
  let out = document.getElementById("Out");
  out.innerHTML += `
 <div class="outKey">Key: ${keyInput.value} 
 Value: ${someObject[keyInput.value]}</div>`;
};
