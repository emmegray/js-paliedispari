/* Palidroma
1 - Chiedere all'utente di inserire una parola nel campo di input
2 - Creare funzione per controllare se la parola inserita è palindroma
*/

// Versione senza inserimento input dall'utente
const parola = 'anna';
const parolaInversa = invertiParola(parola);

console.log(parola, parolaInversa);
if (parola == parolaInversa){
    console.log('la parola è palindroma');
} else {
    console.log('la parola non è palindroma')
}

//Versione con inserimento input dall'utente
const input = document.querySelector('#input');
const output = document.querySelector('#output');

input.addEventListener("change", function (event) {
    const testoInput = event.target.value;

    const parolaInversa = invertiParola(testoInput);

    if (testoInput == parolaInversa){
        output.textContent = "è palindromo";
    } else {
        output.textContent = "non è palindromo";
    }
});

/**
 * Reverse stringa passata
 * @param {string} str 
 * @returns 
 */
function invertiParola(str) {
    const arrCaratteri = str.split("");
    const arrCaratteriInversi = arrCaratteri.reverse();
    const strInversa = arrCaratteriInversi.join("");
    return strInversa;    
}