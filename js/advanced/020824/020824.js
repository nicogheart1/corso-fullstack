const numbers = [1,2,3,4,5,6,7,8];
//console.log(numbers[0]);

const firstNumber = numbers[0];
const secondNumber = numbers[1];
// etc.
const [primoNumero, secondoNumero, terzoNumero, ...altriNumeri] = numbers;

console.log(primoNumero);
console.log(secondoNumero);
console.log(terzoNumero);
console.log(altriNumeri);

const num2 = [1,2, 6];
const [a,b = "ciao",c = "defualt"] = num2;
console.log(a,b,c);


const car = {
  color: "red",
  brand: "fiat",
  model: "500",
  price: 15000,

  nestedObject: {
    alfa: 1,
    beta:2,
    gamma: 3
  }
};

const { nestedObject: { alfa,beta,gamma } } = car;
//const { a, b, c } = nestedObject;

console.log(nestedObject);
console.log(alfa,beta,gamma);


const carPrice = car.price;
const carColor = car.color;
// etc.

const {
  color: coloreAuto = "pippo",
  price: prezzoAuto,
  brand = "ford",
  model,
  fuel = "gasoline",
} = car;

const { color } = car;

console.log(color);
console.log(coloreAuto);
console.log(prezzoAuto);
console.log(fuel);
console.log(brand);
