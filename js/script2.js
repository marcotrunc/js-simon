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

// ! Funzione che mi restituisce un array generico
let randomNumbersPage = '';
const getRandomArray = () => {
    const randomNumbers = [];
    do {
        number = getRandomNumber(100, 1);
        if (!(randomNumbers.includes(number))) {
            randomNumbers.push(number);
            randomNumbersPage += number + ' '
        }
    } while (randomNumbers.length !== 5);

    console.log(randomNumbers);
    return randomNumbers
}
const storedNumber = document.getElementById('numbers-stored');

// ** Recupero elementi btn dalla pagina
const generate = document.getElementById('button-start');
const button = document.getElementById('button-start-game');
const submit = document.getElementById('submit');

// ** Recupero elemento input dalla pagina

const input = document.getElementById('input-part');
const messageField = document.getElementById('message');
const requestField = document.getElementById('request');





messageField.innerHTML = `<h3> Premi il tasto Genera per randomizzare 5 numeri che dovrai memorizzare <h3>`;

generate.addEventListener('click', () => {
    // ** Nascono il primo pulstante e faccio comparire il secondo
    generate.classList.add('d-none');
    button.classList.remove('d-none');
    //    ** Generare un array di  numeri casuali
    const randomNumbers = getRandomArray();
    storedNumber.innerHTML = `${randomNumbers}`;
    messageField.innerHTML = `<h3>Memorizza i 5 numeri, quando sarai pronto premi inizia per verificare</h3>`;


    button.addEventListener('click', () => {
        messageField.innerHTML = `<h3>Aspetta 30 secondi, dopodiché inserisci i numeri che hai memorizzato e premi invia</h3>`;
        storedNumber.innerHTML = ` `;
        button.classList.add('d-none');


        const time = setTimeout(() => {
            input.classList.remove('d-none');

            const matchedNumbers = [];

            const userNumbers = [];

            submit.addEventListener('click', () => {
                const request = parseInt(requestField.value);

                // ? Verifica dei se due numeri sono stati scelti due volte
                if (userNumbers.includes(request)) {
                    alert('Hai inserito due numeri uguali');
                    return
                }

                // ? Se il numero scelto risulta incluso nell' randomNumber inseriscilo nel matchedNumbers
                if (randomNumbers.includes(request)) {
                    matchedNumbers.push(request);
                }

                // ? inserisci il numero nell'userNumber per una successiva verifica
                userNumbers.push(request);

                console.log(matchedNumbers);
                console.log(userNumbers);
                // ? 
                if (userNumbers.length === 5) {
                    input.classList.add('d-none');
                    if (matchedNumbers.length > 0) messageField.innerHTML = `<h3>Complimenti hai indovinato i seguenti numeri ${matchedNumbers}</h3>`;
                }


                requestField.value = '';
            })



        }, 1000)
    })
});
// ** 4 Dichiaro un array vuoto che andrò a riempire se l'utente avrà indovinato il numero







