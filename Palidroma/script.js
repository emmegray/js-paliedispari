/* Palidroma
1 - Chiedere all'utente di inserire una parola nel campo di input
2 - Creare funzione per controllare se la parola inserita è palindroma
*/

// Versione senza inserimento input dall'utente
// const parola = 'anna';
// const parolaDivisa = parola.split('');
// console.log(parolaDivisa);
// const parolaInversa = invertiParola(parola);

// if (parola == parolaInversa){
//     console.log('la parola è palindroma');
// } else {
//     console.log('la parola non è palindroma')
// }

// function invertiParola(str) {
//     const strInversa = str.split('').reverse().join('');
//     return strInversa;    
// }

//Versione con inserimento input dall'utente
const input = document.querySelector('input');
const parolaDivisa = input.slipt('');
const parolaInversa = invertiParola(input);

if (input == parolaInversa){
    output.textContent = e.target.value;
} else {
    output.textContent = ('no')
}

function invertiParola(str) {
    const strInversa = str.slipt('').reverse().join('');
    return strInversa;
}
