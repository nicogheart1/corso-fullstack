try {
  console.log(pippo);
} catch (error) {
  console.log("mi trovo nel catch", error);
} finally {
  console.log("sono nel finally");
}

// Functions
function calcolo(a, b) {
  try {
    return a + b + c;
  } catch (err) {
    console.log("il calcolo è fallito", err);
    return "sono un errore";
  }
}

console.log(calcolo(1, 2));

// Promises
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    try {
      console.log(pippo);
      resolve(1);
    } catch (err) {
      reject(err);
    }
  }, 2000);
});

promise
  .then((response) => {
    console.log("resolved", response);
  })
  .catch((rejection) => {
    console.log("rejected", rejection);
  }).finally(() => {
    console.log("sono il finally della promise")
  });

console.log("che bel codice");
