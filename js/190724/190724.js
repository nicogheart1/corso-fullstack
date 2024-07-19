let carModel = "500";
let carBrand = "Fiat";
let carColor = "red";
let carPrice = 18000;

/*
    altro codice
 */

let carType = carPrice >= 10000 && carPrice < 25000 ? "city car" : "compatta";

/*if (carPrice < 10000) {
    carType = "compatta";
} else if (carPrice >= 10000 && carPrice < 25000) {
    carType = "city car";
}*/

console.log("La macchina " + carModel + " è una " + carType);

carColor === "red" ? console.log("Che bella macchina") : console.log("io l'avrei comprata rossa");


console.log("Uppercase", carBrand.toUpperCase());
console.log("Lowercase", carBrand.toLowerCase());
console.log("carBrand", carBrand);


switch (carBrand.toUpperCase()) {
    case "FORD": {
        console.log("l'auto è affidabile");
        break;
    }
    case "AUDI": {
        console.log("l'auto è veloce");
        break;
    }
    case "SEAT": {
        console.log("l'auto è seat");
        break;
    }
    case "FIAT": {
        console.log("l'auto è italiana");
        break;
    }
    default: {
        console.log("non conosco questo brand");
        break;
    }
}