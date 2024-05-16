const word1 = prompt("Enter a word");
const word2 = prompt("Enter another word");


// Verificare tramite una funzione che le due parole abbiano la stessa lunghezza. Se hanno la stessa lunghezza, stamparle entrambe altrimenti stampare la più lunga delle due.

function sameLength(word1, word2) {
    if (word1.length === word2.length) {
        console.log(word1, word2);
    } else {
        if (word1.length > word2.length) {
            console.log(word1);
        } else {
            console.log(word2);
        }
    }
}