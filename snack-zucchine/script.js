// Crea un array di 10 oggetti che rappresentano una zucchina, indicando per ognuna varietà, peso e lunghezza.



const zucchine = [
    {
        varietà: "Zucchina Nera di Milano",
        peso: 150,
        lunghezza: 18
    },
    {
        varietà: "Zucchina Fiorentina",
        peso: 130,
        lunghezza: 16
    },
    {
        varietà: "Zucchina Romanesca",
        peso: 200,
        lunghezza: 20
    },
    {
        varietà: "Zucchina Bianca",
        peso: 120,
        lunghezza: 15
    },
    {
        varietà: "Zucchina Gialla",
        peso: 170,
        lunghezza: 19
    },
    {
        varietà: "Zucchina Tonda di Nizza",
        peso: 220,
        lunghezza: 12
    },
    {
        varietà: "Zucchina Rugosa Friulana",
        peso: 140,
        lunghezza: 17
    },
    {
        varietà: "Zucchina Patissone",
        peso: 210,
        lunghezza: 14
    },
    {
        varietà: "Zucchina Trombetta d'Albenga",
        peso: 190,
        lunghezza: 22
    },
    {
        varietà: "Zucchina Striata di Napoli",
        peso: 160,
        lunghezza: 18
    }
];


// Calcola quanto pesano tutte le zucchine.


let pesoTotale = 0;
for(let i= 0; i < zucchine.length; i++){
    pesoTotale += zucchine[i].peso;
}

console.log("Peso totale: " + pesoTotale);


// Dividi in due array separati le zucchine che misurano meno o più di 8cm.

let zucchine8cm = zucchine.filter(zucchina => zucchina.lunghezza > 8);

console.log(zucchine8cm);

let zucchineunder8 = zucchine.filter(zucchina => zucchina.lunghezza < 8);

console.log(zucchineunder8);


// Infine stampa separatamente quanto pesano i due gruppi di zucchine.

let peso8cm = 0;
for(let i=0; i<zucchine8cm.length; i++) {
    pesoTotaleZucchine8 += zucchine8cm[i].peso;
}

console.log