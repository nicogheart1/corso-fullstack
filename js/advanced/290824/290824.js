function print(item) {
  console.log(item);
}

function qualcosaltro() {
  console.log("qualcosaltro");
}

function somma(a, b, callback) {
  let result = a + b;
  if (callback) {
    callback(result);
  }
  return result;
}

somma(1, 2);

somma(5, 6, print);

somma(10, 24, qualcosaltro);



setTimeout(qualcosaltro, 2000);

setTimeout(() => {
  console.log("callback anonima");
}, 2000);

setTimeout(() => {
  print("che bella giornata");
}, 2000);
