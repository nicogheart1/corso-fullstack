let numbers = [12, 3, 5, 5, 6, 7, 12, 3];
let singleNumbers = [];

// sviluppo
numbers.forEach((num) => {
  if (!singleNumbers.find((n) => n == num)) {
    singleNumbers.push(num);
  }
});

// obbiettivo: [12,3,5,6,7]
console.log(singleNumbers);
