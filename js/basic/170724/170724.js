let variabile1 = 1;

console.log("cast", Boolean(variabile1));
console.log("variabile1", variabile1);

Boolean(variabile1);
variabile1 = String(variabile1);

let variabile2 = 1;

console.log("variabile1", variabile1);
console.log("variabile2", variabile2);


console.log("confronto minore/maggiore", Number(variabile1) <= Number(variabile2));

console.log("confronto uguaglianza/non uguaglianza", Number(variabile1) == variabile2);


let var1 = 43;
console.log("var1", var1);
var1 = Boolean(var1);
console.log("var1", var1);
var1 = Number(var1);
console.log("var1", var1);


console.log("test uguaglianza 1", "ciao" == "Ciao");
console.log("test uguaglianza 2", 2 != 4);
console.log("test uguaglianza 3", 5 != "ciao");

console.log("confronto uguaglianza stretta/non uguaglianza stretta", 1 !== 1);



