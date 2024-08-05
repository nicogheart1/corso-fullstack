function Car (model, brand, color, price) {
    this.brand = brand;
    this.model = model;
    this.color = color;
    this.price = price;
    this.isNew = false;
    this.printCar = function () {
        console.log(this.brand + " " +this.model);
    }
}

const car1 = new Car("500", "Fiat", "red", 12500);
const car2 = new Car("Panda", "Fiat", "white", 9800);

const car3 = {
    color: "blue",
    model: "Punto",
    brand: "Fiat",
    price: 11500,
    printColor: function () {
        console.log(this.color);
    }
};

/*console.log(car1);
console.log(car2);
console.log(car3);*/

/*car1.printCar();
car2.printCar();
car3.printColor();*/

console.log("keys", Object.keys(car3));
console.log("values", Object.values(car3));
console.log("entries", Object.entries(car3));
