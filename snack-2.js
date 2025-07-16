// snack 1

// function somma(primoNumero, secondoNumero) {
//     return primoNumero + secondoNumero;
// }

// console.log(somma(1,4));


// const somma = function(a, b) {
//     return a + b;
// }

// console.log(somma(1, 4));


const somma = (a, b) => a+b;

console.log(somma(1, 4));



// snack 2

const quadrato = (numero) => numero*numero;

console.log(quadrato(4));



//  snack 3

function eseguiOperazione(a, b, operatore) {
    return operatore (a, b);
}

function moltiplica (x, y) {
    return x*y;
}

console.log(eseguiOperazione(5, 7, moltiplica));