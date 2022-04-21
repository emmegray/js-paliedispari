/*Pari e Dispari
1 - Utente sceglie pari o dispari
2 - Utente inserisce un numero da 1 a 5
3 - Con una funzione generiamo un numero random (tra 1 a 5) per il computer
4 - Sommiamo i due numeri
5 - Con una funzione stabiliamo se la somma dei due numeri è pari o dispari
6 - Dichiarimao il vincitore
Bonus - Inserimento dati con campo di input*/

const numeroUtente = document.querySelector('.numeroUtente');
const sceltaUtente = document.querySelector('.sceltaUtente');
const sceltaUtenteInput = document.querySelector('.sceltaUtenteInput');
const numeroUtenteInput = document.querySelector('.numeroUtenteInput');
const numeroComputer = document.querySelector('.numeroComputer');
const risultato = document.querySelector('.risultato');

numeroUtente.addEventListener('change', sceltaDelNumero);

/**
 * Scelta del numero casuale e controllo risultato
 * @param {event} event 
 */
function sceltaDelNumero (event){
    const numeroDelComputer = Math.floor(numeroCasuale() * 5 + 1);

    sceltaUtenteInput.textContent = 'Hai scelto: '+sceltaUtente.value;
    numeroUtenteInput.textContent = 'Numero Scelto: '+event.target.value;
    numeroComputer.textContent = 'Numero scelto dal computer: '+numeroDelComputer;

    const sommaNumeri = Number(event.target.value) + numeroDelComputer;

    if (sceltaUtente.value === "pari" && pari(sommaNumeri)){
        risultato.textContent = sommaNumeri + ": Hai vinto"
    } 
    
    if (sceltaUtente.value === "pari" && pari(sommaNumeri) === false){
        risultato.textContent = sommaNumeri + ": Hai perso"
    }
    
    if (sceltaUtente.value === "dispari" && pari(sommaNumeri)){
        risultato.textContent = sommaNumeri + ": Hai perso"
    }

    if (sceltaUtente.value === "dispari" && pari(sommaNumeri) === false){
        risultato.textContent = sommaNumeri + ": Hai vinto"
    }
}

function numeroCasuale() {
    return Math.random();
}

function pari(numero) {
    return Number.isInteger(numero / 2);
}