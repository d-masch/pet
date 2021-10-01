const someObject = document.getElementById('some-object-key');
const btn = document.getElementById('btn');
btn.onclick = () => {
    alert(someObject.value);
};
