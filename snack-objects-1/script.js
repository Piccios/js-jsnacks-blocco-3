// > Crea un array composto da 15 automobili.
// > Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).




// < Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.
// < Infine stampa separatamente i 3 array.


const cars = [
    {
        auto: 'auto 1',
        marca: 'bmw',
        modello: 'city-car',
        alimentazione: 'benzina',
    },
    {
        auto: 'auto 2',
        marca: 'mercedes',
        modello: 'sportiva',
        alimentazione: 'benzina',
    },
    {
        auto: 'auto 3',
        marca: 'bmw',
        modello: 'sportiva',
        alimentazione: 'diesel',
    },
    {
        auto: 'auto 4',
        marca: 'toyota',
        modello: 'sportiva',
        alimentazione: 'elettrico',
    },
    {
        auto: 'auto 5',
        marca: 'ford',
        modello: 'city-car',
        alimentazione: 'elettrico',
    },
    {
        auto: 'auto 6',
        marca: 'fiat',
        modello: 'sportiva',
        alimentazione: 'metano',
    },
    {
        auto: 'auto 7',
        marca: 'mercedes',
        modello: 'city-car',
        alimentazione: 'diesel',
    },
    {
        auto: 'auto 8',
        marca: 'bentley',
        modello: 'sportiva',
        alimentazione: 'metano',
    },
    {
        auto: 'auto 9',
        marca: 'bmw',
        modello: 'suv',
        alimentazione: 'diesel',
    },
    {
        auto: 'auto 10',
        marca: 'bentley',
        modello: 'city-car',
        alimentazione: 'elettrico',
    },
    {
        auto: 'auto 11',
        marca: 'fiat',
        modello: 'sportiva',
        alimentazione: 'diesel',
    },
    {
        auto: 'auto 12',
        marca: 'jeep',
        modello: 'suv',
        alimentazione: 'metano',
    },
    {
        auto: 'auto 13',
        marca: 'toyota',
        modello: 'city-car',
        alimentazione: 'metano',
    },
    {
        auto: 'auto 14',
        marca: 'fiat',
        modello: 'suv',
        alimentazione: 'metano',
    },
    {
        auto: 'auto 15',
        marca: 'fiat',
        modello: 'city-car',
        alimentazione: 'metano',
    }
]


const benzina = cars.filter(car => car.alimentazione === 'benzina');

const diesel = cars.filter(car => car.alimentazione === 'diesel');

const oterCars = cars.filter(car => car.alimentazione!== 'benzina' && car.alimentazione!== 'diesel');