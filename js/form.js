const keyInput = document.getElementById("some-object-key");
const valueInput = document.getElementById("some-object-value");
const someObject = {};
const btn = document.getElementById("btn");
btn.onclick = () => {
  someObject[keyInput.value] = valueInput.value;

  document.getElementById("keyOut").innerHTML = keyInput.value;
  document.getElementById("valueOut").innerHTML = someObject[keyInput.value];
};
