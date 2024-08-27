function somma(a, b, ...numbers) {
  //console.log(a, b, numbers);
  const sommaParziale = numbers.reduce((acc, num) => acc + num, 0);
  return a + b + sommaParziale;
}

console.log(somma(2, 3));
console.log(somma(2, 3, 5));
console.log(somma(2, 3, 5, 7));
console.log(somma(2, 3, 5, 7, 9));

const mySum = somma(2, 3, 5, 7, 9, 11);

// tutto quello che mi pare

console.log("mySum", mySum);




