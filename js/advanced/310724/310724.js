const persons = [
  { name: "Paul", age: 16 },
  { name: "George", age: 17 },
  { name: "Lucas", age: 21 },
  { name: "Marco", age: 32 },
  { name: "Peter", age: 18 },
  { name: "Carl", age: 13 },
  { name: "Simon", age: 24 },
  { name: "Mark", age: 15 },
  { name: "Sandra", age: 34 },
  { name: "Alice", age: 28 },
];

// caso ciclo for
for (let i = 0; i < persons.length; i++) {
  //qualcosa
}

// caso ciclo while
let y = 0;
while (y < persons.length) {
  //qualcosa
  y++;
}

// caso ciclo con reduce
/*let sommatoria = persons.reduce((accumulo, person) => {
    console.log("accumulo", accumulo);
    console.log("person", person);
    return (accumulo?.age || accumulo) + person.age
});
console.log("sommatoria", sommatoria);*/

function ageAverage(array) {
  let totale = 0;
  array.forEach((value) => {
    totale += value.age;
  });
  return Math.round(totale / array.length);
}

// caso ciclo forEach
/*let totale = 0;
persons.forEach((person) => {
  console.log("persoN", person.age);
  totale += person.age;
});
console.log("totale", totale);
console.log("La media è:", totale / persons.length);
console.log("La media arrotondata è:", Math.round(totale / persons.length));*/

console.log(ageAverage(persons));
