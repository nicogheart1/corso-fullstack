const fruits = ['banana', 'peach', 'pear', 'pineapple'];

console.log(fruits.length);
console.log(fruits[fruits.length - 1]);

fruits[2] = "apple";
//fruits[14] = "pear";
fruits.push("pear", "watermelon", "strawberry");
fruits.pop();

fruits.shift();
fruits.unshift("cocco", "banana");

console.log(fruits);

console.log("Gli ingredienti che ci servono sono:", fruits.join(", "));

fruits.forEach((fruit) => {
    console.log("il frutto è:",fruit);
});

fruits.forEach((value, index) => {
    if (index % 2 == 0) {
        console.log("Frutto posizione pari", value);
    }
});