/*
Crea una funzione chiamata "contoAllaRovescia" che diminuirà il conto alla rovescia di 1 unità e visualizzerà il tempo rimanente in console.
Utilizza setInterval per chiamare la funzione contoAllaRovescia ogni secondo.
Visualizza il messaggio "Conto alla rovescia in corso..." all'inizio.
Quando il conto alla rovescia raggiunge 0, visualizza un messaggio che indica che il conto alla rovescia è terminato.
*/

let tempo = 10;

function contoAllaRovescia() {
    tempo = tempo - 1;
    console.log("il tempo rimanente è", tempo);
    if (tempo === 0) {
        console.log("il conto alla rovescia è terminato");
        clearInterval(intervalId);
    }
};

console.log("Conto alla rovescia in corso...");

const intervalId = setInterval(contoAllaRovescia, 1000);


