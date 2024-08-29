/* Timeout */
console.log("eseguito prima del timeout");

const timerId = setTimeout(() => {
    console.log("timeout 2s");
}, 2000);

//clearTimeout(timerId);

console.log("eseguito dopo il timeout");


/* Interval */
console.log("eseguito prima dell'ìnterval");

let i = 0;
let intervalId = setInterval(() => {
    console.log("interval", i);
    i++;
    if (i > 5) {
        clearInterval(intervalId);
    }
}, 1000);

console.log("eseguito dopo dell'ìnterval");