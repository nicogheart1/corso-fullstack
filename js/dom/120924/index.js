console.log("ciao vengo dal file javascript");

//const h1 = document.getElementsByTagName('h1')[0]
const h1 = document.getElementById('title');

console.log(h1.innerHTML);

h1.innerText = "Sono il nuovo titolo";
h1.innerHTML = "<i>Sono un altro titolo<i>";

h1.style.color = "red";
h1.style.fontSize = "30px";


const body = document.getElementsByTagName('body')[0];
const paragraph = document.createElement('p');
paragraph.innerText = "Sono il paragrafo appena creato";

body.appendChild(paragraph);
body.removeChild(h1);


const form = document.getElementsByTagName('form')[0];
form.appendChild(h1);

form.name = "form-name";
form.setAttribute("id", "form-id");

form.classList.add("nuova-classe");
form.classList.remove("classe-da-rimuovere");
console.log("form classList", form.classList);

console.log("questo è il paragrafo appena creato", paragraph);

