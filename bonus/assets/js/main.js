/* 
CONSEGNA
Mail
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.
BONUS:
Usiamo un input e un bottone per inserire la mail e poi mostriamo i risultati in pagina
*/


//Creo una lista di mail
const mail_autorizzate = ['mario@hotmail.it', 'giuseppe@libero.it', 'alessandro@gmail.com']

//Creo variabile per stampare messaggio
let text;

//Seleziono il container dove andrò a mettere il risultato
element_container = document.querySelector('.container')

//selezioniamo il bottone
const element_button_control = document.querySelector('.control')

//al click del bottone facciamogli fare qualcosa
element_button_control.addEventListener('click', function() {

    element_button_control.setAttribute('disabled', 'disabled')

    //prendi dall'input la email dell'utente
    const element_mail_utente = document.querySelector('.user_mail').value;

    //estrapolo i dati dall'array
    for (let i = 0; i < mail_autorizzate.length; i++) {

        //Assegno alla variabile i valori dell'array
        const mail_autorizzata = mail_autorizzate[i];

        //Controllo se la mail inserite corrisponde ad una mail della lista
        if (element_mail_utente == mail_autorizzata) {

            //esito positivo
            text = 'OK sei autorizzato';
        } else {

            //esito negativo
            text = 'Non puoi entrare';
        }

    }
    //stampo a schermo la risposta
    element_container.insertAdjacentHTML("beforeend", `<div class="risposta">${text}</div>`)
})