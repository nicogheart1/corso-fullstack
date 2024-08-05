// map, reduce, filter, find
const fruits = ["banana", "peach", "pear", "pineapple", "pear"];

let ricerca = fruits.find((value) => {
  if (value === "pear") {
    return true;
  } else {
    return false;
  }
});
let ricerca2 = fruits.find((value) => value === "pear");
console.log("ricerca", ricerca);
console.log("ricerca 2", ricerca2);

let filtro = fruits.filter((value) => {
  if (value.length <= 5) {
    return true;
  } else {
    return false;
  }
});
let filtro2 = fruits
  .filter((value) => value.length <= 5)
  .map((value) => value.toUpperCase());
console.log("filtro", filtro);
console.log("filtro 2", filtro2);

let result = fruits.map((value) => {
  return value.toUpperCase();
});
console.log("map", result);

let numbers = [1, 2, 3, 4, 5, 6];

let evenNumbers = numbers.filter((value) => value % 2 == 0);
console.log("evenNumbers", evenNumbers);

let sommatoria = numbers.reduce(
  (accumulatorValue, currentValue) => accumulatorValue + currentValue
);
console.log("sommatoria", sommatoria);

console.log("frutti", fruits);
