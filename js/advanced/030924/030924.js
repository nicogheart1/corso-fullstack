/*function prova(callback) {
    console.log("Dentro la function");
    // altro codice
    console.log(pippo);
  
    let result = 1 + 5;
    if (result % 2 == 0) {
      callback(result);
    } else {
      //reject();
    }
}

prova(() => console.log("funziona"));*/

/*const promessa = new Promise((resolve, reject) => {
  console.log("Dentro la promise");
  // altro codice
  // console.log(pippo);

  let result = 2 + 5;
  if (result % 2 == 0) {
    resolve(result);
  } else {
    reject(result);
  }
});

promessa.then(
  (data) => {
    console.log("Promise risolta", data);
  },
  (value) => {
    console.log("Promise non risolta", value);

    console.log("altro codice");
  }
);

console.log("altro codice 2");*/

const nuovaPromessa = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("sono passati 4 secondi");
  }, 4000);
});

nuovaPromessa.then((arg) => {
  console.log("Promessa risolta", arg);
});

const nuovaPromessaFunction = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("sono passati 4 secondi");
    }, 4000);
  });

nuovaPromessaFunction().then((arg) => {
  console.log("Promessa risolta", arg);
});
