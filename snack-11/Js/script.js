// Crea un array vuoto e chiedi all'utente un numero da inserire nell'array. 
// Continua a chiedere i numeri all'utente e a inserirli nell'array fino a quando la somma degli elementi è minore di 50.


let array = [];
let somma = 0;
while (somma < 50) {
    let number = parseInt(prompt('Inserisci un numero: '))
    if (!Number.isNaN(number)) {
        array.push(number)
        somma += number;
    }
}


console.log(array)