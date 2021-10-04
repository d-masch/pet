const someObjectkey = document.getElementById("some-object-key");
const someObjectvalue = document.getElementById("some-object-value");
const someObject = {};
const btn = document.getElementById("btn");
btn.onclick = () => {
  someObject.someObjectkey = someObjectvalue;
  console.log(someObjectkey.value, someObjectvalue.value);
 };
console.log(someObject);
