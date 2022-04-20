/*Pari e Dispari
1 - Utente sceglie pari o dispari
2 - Utente inserisce un numero da 1 a 5
3 - Con una funzione generiamo un numero random (tra 1 a 5) per il computer
4 - Sommiamo i due numeri
5 - Con una funzione stabiliamo se la somma dei due numeri è pari o dispari
6 - Dichiarimao il vincitore
Bonus - Inserimento dati con campo di input*/

const numeroUtente = document.querySelector('.numeroUtente');
console.log(numeroUtente);

numeroUtente.addEventListener('change', function (event){
    const numeroUtenteInput = event.target.value;
    numeroUtenteInput.textContent = 'Numero Scelto: ${event.target.value}';
});