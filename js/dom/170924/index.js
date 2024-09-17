const inputEmail = document.querySelector("input[name='email']");
const inputPassword = document.querySelector("input[name='password']");

const btn = document.getElementById("my-btn");
btn.addEventListener("click", (event) => {
  event.preventDefault();
  console.log(`Email: ${inputEmail.value}, Password: ${inputPassword.value}`);

  const data = JSON.stringify({
    email: inputEmail.value,
    password: inputPassword.value,
  });

  console.log("stringify", data);

  localStorage.setItem("credenziali", data);
});

const credenziali = JSON.parse(localStorage.getItem("credenziali"));
console.log("credenziali", credenziali);

console.log("email:", credenziali.email);
inputEmail.value = credenziali.email;

console.log("password:", credenziali.password);
