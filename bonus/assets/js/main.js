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
let text, element_risposta;
text = 'Non sei autorizzato'

//Seleziono il container dove andrò a mettere il risultato
element_container = document.querySelector('.container')

//selezioniamo il bottone e il form
const element_button_control = document.querySelector('.control')
const element_button_reset = document.querySelector('.reset')
const element_form = document.querySelector('form')

//al click del bottone facciamogli fare qualcosa
element_form.addEventListener("submit", function(event) {

    //non fa ricaricare la pagina
    event.preventDefault()

    //disabilitiamo il bottone dopo il click
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
        }
    }
    //creo la risposta
    element_risposta = `<div class="risposta">${text}</div>`;

    //stampo a schermo la risposta
    element_container.insertAdjacentHTML("beforeend", element_risposta)
})

//facciamogli fare qualcosa anche a reset
element_button_reset.addEventListener('click', function() {

    //riabilito il bottone control
    element_button_control.removeAttribute('disabled', 'disabled')

    //cancello la risposta
    let element_reset = document.querySelector('.risposta');
    element_reset.remove();

    //ripristino il testo della risposta
    text = 'Non sei autorizzato'

})