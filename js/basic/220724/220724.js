function nuovaFunzione(x, y) {
    console.log("calcolatrice somma", x + y);
}

nuovaFunzione(2, 8, 13);
nuovaFunzione();

function numeroPari(num, text = "prova") {
    if (num % 2 == 0) {
        console.log("funzione numero pari", num, text);
    }
}

for (let i = 0; i <= 15; i++) {
    //console.log("ciclo for", i);
    numeroPari(i, "ciao");
    /*if (i % 2 == 0) {
        //console.log("numero pari", i);
    } else if (i % 2 != 0) {
        //console.log("numero dispari", i);
    }*/
}

let i = 0;
while (i <= 20) {
    //console.log("ciclo while", i);
    i++;
}

nuovaFunzione(98, 12);


numeroPari(18);

let contatore = 0;
contatore++;
//contatore = contatore + 1
//console.log("contatore", contatore);
