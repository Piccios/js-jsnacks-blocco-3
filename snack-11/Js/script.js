// Crea un array vuoto e chiedi all'utente un numero da inserire nell'array. 
// Continua a chiedere i numeri all'utente e a inserirli nell'array fino a quando la somma degli elementi è minore di 50.


let array = [];

while (array < 50) {
    let number = parseInt(prompt('Inserisci un numero: '))
    array.push(number)
}

console.log(array)