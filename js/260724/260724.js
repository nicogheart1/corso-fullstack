let apple = "apple";
let randomFruit = "orange";

let fruits = ['banana', 'peach', 'pear', 'pineapple', apple, randomFruit];
let numbers = [0,1,2,3,4,5];
let mixedList = [0, "ciao", true, { name: "mario", age: 16}, fruits];

console.log("fruits", fruits);
console.log("numbers", numbers);
console.log("mixed", mixedList);

console.log("first fruit", fruits[0]);
console.log("first number", numbers[0]);
console.log("first mixedList", mixedList[0]);

console.log("list length", fruits.length);
console.log("last fruit", fruits[fruits.length - 1]);

for (let i = 0; i <= fruits.length - 1; i++) {
    console.log(fruits[i]);
}
