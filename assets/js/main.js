/* 
CONSEGNA
Mail
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.
*/

//Chiedi all’utente la sua email
const mail_utente = prompt('Inserisci la tua mail');

//Creo una lista di mail
const mail_autorizzate = ['mario@hotmail.it', 'giuseppe@libero.it', 'alessandro@gmail.com']

//Creo variabile per stampare messaggio
let text;

//estrapolo i dati dall'array
for (let i = 0; i < mail_autorizzate.length; i++) {

    //Assegno alla variabile i valori dell'array
    const mail_autorizzata = mail_autorizzate[i];

    //Controllo se la mail inserite corrisponde ad una mail della lista
    if (mail_utente == mail_autorizzata) {

        //esito positivo
        text = 'OK sei autorizzato';
    } else {

        //esito negativo
        text = 'Non puoi entrare';
    }

}

//stampo la risposta
console.log(text);

/* 
CONSEGNA 
Gioco dei dadi
Generare un numero random da 1 a 6, 
sia per il giocatore sia per il computer. 
Stabilire il vincitore, in base a chi fa il punteggio più alto.
Prima di partire a scrivere codice poniamoci qualche domanda: 
Che ci sia un array da qualche parte? 
Se dobbiamo confrontare qualcosa che "cosa" ci serve?
*/

//Genero numero random per l'utente e lo mostro
const num_utente = Math.floor(Math.random() * 6) + 1;
console.log(num_utente);

//Genero numero random per il computer e lo mostro
const num_computer = Math.floor(Math.random() * 6) + 1;
console.log(num_computer);

//stabilisco vincitore
if (num_utente > num_computer) {
    console.log('Sei il vincitore');
} else if (num_utente == num_computer) {
    console.log('Avete pareggiato');
} else {
    console.log('Hai perso');
}