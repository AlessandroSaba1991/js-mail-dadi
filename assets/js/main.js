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