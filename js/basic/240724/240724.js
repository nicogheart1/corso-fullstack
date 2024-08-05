let car = {
  color: "red",
  model: "500",
  brand: "fiat",
  price: 23423,
};
car.cilindrata = "999cc";
car.color = "white";

let obj1 = { value: 1 };
const obj2 = { value: 1 };

obj1.value = 2;
obj2.value = 3;

/*console.log("obj1", obj1);
console.log("obj2", obj2);*/

for (let key in car) {
  console.log("key", key);
  console.log("value", car[key]);
  console.log(key, car[key]);
}

console.log("car", car);

console.log("color", car["color"]);
console.log("model", car["model"]);
console.log("brand", car.brand);
console.log("price", car.price);
