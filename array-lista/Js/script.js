// creo un array che rappresentera' il frigorifero con la frutta che ho a disposizione


const frigorifero =['banana', 'mela', 'pera', 'ciliegia', 'arancia', 'mandarino', 'cocomero', 'limone', 'fragola']
console.log(frigorifero)

// aggiungo l'elementio 'pesca' al frigorifero

frigorifero.push('pesca')
console.log("ho messo la pesca in frigorifero, adesso la frutta disponibile e' questa:  " + frigorifero)

// verifico se all'interno del frigorifero c'e' il cocomero, senza utilizzare le funzioni includes() o indexOf()

let cocomeroPresente = false

if (frigorifero.length > 0) {
    for (let i = 0; i < frigorifero.length; i++) {
        if (frigorifero[i] === 'cocomero') {
            cocomeroPresente = true;
            break
            }
    }}

    if (cocomeroPresente) {
        console.log("Trovato! Devo solo preparare il coctail")
    } else {
        console.log("Oh no, devo uscire a comprare il cocomero!")
    }
