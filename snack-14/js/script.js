// ! Chiedi all'utente un numero di secondi da attendere 
// il numero inserito dall'utente sara' il timer che setteremo

function countDown(time) {
    let timer = parseInt(prompt("Inserisci il numero di secondi da attende:")) * 1000;
    setTimeout(function() {
        alert("Timer scaduto");
    }, timer);
}

countDown();

