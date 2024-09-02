/*
Crea una funzione che accetta due numeri come argomenti e una funzione di callback.
La funzione dovrebbe eseguire un'operazione matematica sui numeri e passare il risultato alla funzione di callback.
Ad esempio, puoi creare una funzione per aggiungere due numeri e passare una funzione di callback che visualizza il risultato.
*/

/*
Partendo dall'esercizio Le Callback - 5, includi la gestione degli errori. Se la funzione di callback genera un errore, catturalo e gestiscilo.
Modificare la funzione performOperation per gestire l'errore e registrare un messaggio di errore.
*/

function performOperation(a, b, callback) {
  const result = a + b;
  if (!!result) {
    callback(result);
  } else {
    return new Error("Non è stato possibile operare la somma");
  }
}

function displayResult(result) {
  console.log("displayResult", result);
}

performOperation(5, 3, displayResult);

const test = performOperation(5, undefined, displayResult);
console.log("Mi trovo qui", test);

console.log("il codice prosegue");
