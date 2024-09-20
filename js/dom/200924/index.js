const firstName = document.getElementById("firstName").value;
const lastName = document.getElementById("lastName").value;
const inputAge = document.getElementById("age").value;

const person = {
    firstName,
    lastName,
    age: inputAge
};

console.log(person);

const form = document.querySelector("form");
form.setAttribute("data-person", JSON.stringify(person));

localStorage.setItem("person", JSON.stringify(person));

const res = localStorage.getItem("person");
console.log("res", res);

const obj = JSON.parse(res);
console.log("obj", obj);


