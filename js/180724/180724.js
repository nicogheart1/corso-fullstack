let lezioneInCorso = true;
let tempoFinito = false;
let studentiPresenti = true;
let giornoDiFesta = "lunedi";

console.log(lezioneInCorso && tempoFinito);

/*
    true && true = true;
    true && false = false;
    false && true = false;
    false && false = false;
*/

console.log("test AND 1", 1 && 11);
console.log("test AND 2", "ciao" && "come stai");
console.log("test AND 3", 3 && "ciao");
console.log("test AND 4", "true" && false);


console.log("Adesso c'è lezione?", !tempoFinito || !giornoDiFesta);

/*
    true || true = true;
    true || false = true;
    false || true = true;
    false || false = false;
*/

console.log("test OR 1", 0 || 11);
console.log("test OR 2", "c" || "come stai");
console.log("test OR 3", 3 || "ciao");
console.log("test OR 4", "true" || false);
console.log("test OR 5", 0 || false);


console.log("valore opposto 1", !true);
console.log("valore opposto 2", !1);
console.log("valore opposto 3", !"ciao");
console.log("valore opposto 4", !"");

console.log("valore assoluto 1", !!1, Boolean(1));
console.log("valore assoluto 2", !!0, Boolean(0));
console.log("valore assoluto 3", !!"ciao", Boolean("ciao"));
console.log("valore assoluto 4", !!"", Boolean(""));

if (!tempoFinito || giornoDiFesta) {
    console.log("C'è lezione");
    console.log("C'è lezione");
    console.log("C'è lezione");
    console.log("C'è lezione");
    console.log("C'è lezione");
}

if ((!tempoFinito || !!giornoDiFesta) && studentiPresenti && giornoDiFesta !== "domenica") {
    console.log("passa operatori multipli");
}


if (1 == 2) {
    console.log("entriamo qui");
} else if (1 == 1) {
    console.log("entra else if");
} else if (1 == 3) {
    console.log("altro");
} else {
    console.log("caso else");
}

if (1 == 1) {
    console.log("entro qui 2");
}

console.log("passa qui");