let N = parseInt(prompt("Quanti elementi vuoi che l'array contenga?"))

array = [];
// N sara' il numero di numeri casuali da 1 a 100 che comporranno l'array

// stampo in console solo gli ultimi 5 numeri generati
for(let i = 0; i < N; i++) {
  array.push(Math.floor(Math.random() * 100) + 1);
}


console.log(array.slice(-5));