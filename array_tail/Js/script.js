let N = parseInt(prompt("Quanti elementi vuoi che l'array contenga?"))

array = [];

for(let i = 0; i < N; i++) {
    array.push(Math.floor(Math.random() * 100) + 1);
}

console.log(array.slice(-5));

let choice = parseInt(prompt("Quannti elementi vuoi stampare?"));

for(let i=0; i<choice; i++){
    console.log(array[array.length-choice+i]);
}


