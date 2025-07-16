// snack 1

// function somma(primoNumero, secondoNumero) {
//     return primoNumero + secondoNumero;
// }

// console.log(somma(1,4));


// const somma = function(a, b) {
//     return a + b;
// }

// console.log(somma(1, 4));


const somma = (a, b) => a + b;

console.log(somma(1, 4));



// snack 2

const quadrato = (n) => n ** 2;

console.log(quadrato(4));



//  snack 3

function eseguiOperazione(a, b, operatore) {
    return operatore(a, b);
}

function moltiplica(x, y) {
    return x * y;
}

console.log(eseguiOperazione(5, 7, moltiplica));



//  snack 4

// function creaTimer(tempo) {
//     return function() {
//         setTimeout(() => {
//             console.log("Tempo scaduto!");
//         }, tempo);
//     };
// }

// const timer4s = creaTimer(4000);
// timer4s();



// snack 5

// const stampaOgniSecondo = (messaggio) => {
//     return setInterval(() => {
//         console.log(messaggio);
//     }, 1000);
// }

// let mess = stampaOgniSecondo("Mi piace la pizza");

// setTimeout(() => {
//     clearInterval(mess);
//     console.log("Stop");
// }, 5000);



// snack 6

// const creaContatoreAutomatico = (tempo) => {
//     let contatore = 0;

//     return function () {
//         setInterval(() => {
//             contatore++;
//             console.log(`Il Counter è arrivato a ${contatore}`)
//         }, tempo);
//     }
// }

// const secondi = creaContatoreAutomatico(1000);
// secondi();



// snack 7

// prima versione

// const eseguiEferma = (messaggio) => {
//     return setInterval(() => {
//         console.log(messaggio);
//     }, 2000);
// }

// const messaggioRipetuto = eseguiEferma("Oggi è una brutta giornata");

// setTimeout(() =>{
//     clearInterval(messaggioRipetuto);
//     console.log("La giornata ha smesso di essere brutta");
// }, 10000);


// seconda versione

const eseguiEferma = (messaggio, tempoAvvio, tempoStop) => {
    const intervalId = setInterval(() => {
        console.log(messaggio);
    }, tempoAvvio);

    setTimeout(() => {
        clearInterval(intervalId);
        console.log("Stop")
    }, tempoStop)
}

const messaggioRipetuto = eseguiEferma("Oggi è una brutta giornata", 2000, 10000);