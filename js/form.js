const someObjectkey = document.getElementById("some-object-key");
const someObjectvalue = document.getElementById("some-object-value");
const btn = document.getElementById("btn");
btn.onclick = () => {
  document.write("key is: " + someObjectkey.value);
  document.write("   velue is: " + someObjectvalue.value);
};
