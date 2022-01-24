console.log('JS OK');
/*Descrizione:
Generare 5 numeri casuali e mostrarli in un alert all'utente.
Dall'ok  parte un timer di 30 secondi. (ricordate che l'alert blocca il flusso.
il timer partirà a contare dopo che avete schiacciato ok.)
Dopo 30 secondi l'utente deve inserire, uno alla volta,
i numeri che ha visto precedentemente, tramite prompt().
Dopo che sono stati inseriti i 5 numeri,
il software dice quanti e quali dei numeri  sono stati indovinati dall'utente.
Bonus:
controllare che i numeri casuali siano diversi tra loro
controllare che l'utente non inserisca 2 volte lo stesso numero
Consigli del giorno: */

//  dichiaro due array, uno che conterrà i numeri random, l'altro che conterrà i numeri che l'utente ha indovinato
//  ho bisogno di un ciclo che mi chiede i numeri e che dopo pushi quelli corretti nel secondo array
//  ho bisgno di una funzione timer che faccia passare 30 secondi

// ! Funzione che mi genera numeri casuali
const getRandomNumber = ((max, min) => Math.floor(Math.random() * (max - min + 1)) + min);

// ** 1 Costruisco un array di 5 numeri casuali e diversi tra loro 
const randomNumbers = [];
do {
    number = getRandomNumber(100, 1);
    if (!(randomNumbers.includes(number))) randomNumbers.push(number);
} while (randomNumbers.length !== 5);

console.log(randomNumbers);
// ** 2 Faccio vedere l'array tramite un alert
alert(randomNumbers);


//  ** 4 Creo una Timing function che mi consentirà di far passare 30 secondi

const timeOut = setTimeout(() => {

    // ** 3 Dichiaro un array vuoto che andrò a riempire se l'utente avrà indovinato il numero
    const matchedNumbers = [];

    for (let i = 0; i < 5; i++) {
        const request = parseInt(prompt('Inserisci il numero').trim());
        if (randomNumbers.includes(request)) {
            matchedNumbers.push(request);
        }
    }
    console.log(matchedNumbers);
    // ** 5 Faccio vedere i  numeri che ho indivinato

    alert(`Hai indovinato i seguenti numeri ${matchedNumbers}`);
}, 10000);


