const people = [
    {
        nome: 'Marco',
        cognome: 'Rossi',
        eta: 25,
    },
    {
        nome: 'Paolo',
        cognome: 'Bianchi',
        eta: 19,
    },
    {
        nome: 'Gina',
        cognome: 'Ginetti',
        eta: 23,
    },
    {
        nome: 'Lorenzo',
        cognome: 'Rossi',
        eta: 32,
    },
    {
        nome: 'Christian',
        cognome: 'Andolfi',
        eta: 54,
    },
    {
        nome: 'Luca',
        cognome: 'Ruggiero',
        eta: 18,
    },
    {
        nome: 'Giuseppe',
        cognome: 'Gatto',
        eta: 28,
    },
    {
        nome: 'Alessia',
        cognome: 'Scafa',
        eta: 28,
    },
    {
        nome: 'Eleonora',
        cognome: 'Picchi',
        eta: 36,
    },
    {
        nome: 'Raffaella',
        cognome: 'Baglioni',
        eta: 39,
    }
]

const newPeopleList = people.map((person) => {
    return {
        name: person.nome,
        surname: person.cognome,
        age: person.eta,
        canDrive: person.eta >= 18,
    }
})