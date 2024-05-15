// Crea due array che hanno un numero di elementi diversi. 
// Aggiungi elementi all'array che ha meno elementi fino a quando ne avrà tanti quanti l'altro.

let array1 = ["a", "b", "c", "d", "e"];
let array2 = ["a", "b", "c"];   

while (array1.length < array2.length) {
    array1.push(array2.pop())
}

console.log(array1 + array2)

