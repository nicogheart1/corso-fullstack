const inputEmail = document.querySelector("input[name='email']");
const inputPassword = document.querySelector("input[name='password']");

const btn = document.getElementById("my-btn");
btn.addEventListener("click", (event) => {
    event.preventDefault();
    console.log(`Email: ${inputEmail.value}, Password: ${inputPassword.value}`);

    localStorage.setItem('email', inputEmail.value);
    sessionStorage.setItem('password', inputPassword.value);
});

const email = localStorage.getItem('email');
console.log("email:", email);
inputEmail.value = email;

const password = sessionStorage.getItem('password');
console.log("password:", password);