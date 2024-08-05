let var1 = 4;

let sottrazione = (num1, num2) => {
    console.log("sottrazione", num1 - num2);
    return num1 - num2;
}

const somma = (num1, num2) => {
    let var2 = "sono var 2";
    console.log("somma", num1 + num2);
    console.log("var1", var1)
    console.log("var2", var2)
    return var2;
}

function calcolo(num1, num2, fn) {
    return fn(num1, num2);
}

let risultato1 = calcolo(3,5, somma);
let risultato2 = calcolo(3,5, sottrazione);

console.log("risultato 1", risultato1);
console.log("risultato 2", risultato2);
console.log(somma(1,2))