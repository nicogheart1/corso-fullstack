const a = document.querySelector("a");
a.addEventListener("click", event => {
    event.preventDefault();
    console.log("abbiamo evitato di aprire il link");
})

const inputEmail = document.querySelector("input[name='email']");
const inputPassword = document.querySelector("input[name='password']");

console.log(inputEmail);
console.log(inputPassword);

inputEmail.addEventListener("change", event => {
    console.log("input email cambiato", event);
})

inputPassword.addEventListener("keydown", event => {
    console.log("tasto premuto", event);
    if (event.keyCode === 81) {
        alert("hai premuto la lettera Q");
    }
});

const h1 = document.getElementById("title");
h1.addEventListener('mouseover', event => {
    console.log("sei passato sopra il titolo", event);
})

const btn = document.getElementById("my-btn");
btn.addEventListener("click", (event) => {
    event.preventDefault();
    if (!inputPassword.value) {
        alert("Non hai inserito la password");
        return;
    }
    console.log(`Email: ${inputEmail.value}, Password: ${inputPassword.value}`);
});