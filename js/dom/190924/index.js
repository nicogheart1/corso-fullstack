const button = document.createElement("button");
button.innerText = "Aggiungi";

const div = document.querySelector("div");

div.classList.add("nuova-classe");
div.classList.remove("seconda-classe");
console.log("classi del div", div.classList);

div.appendChild(button);

const addProduct = () => {
  const input = document.querySelector("input");

  const ul = document.querySelector("ul");

  const checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");

  const li = document.createElement("li");
  li.innerText = input.value;

  li.appendChild(checkbox);

  ul.appendChild(li);

  input.value = "";
};

button.addEventListener("click", addProduct);
