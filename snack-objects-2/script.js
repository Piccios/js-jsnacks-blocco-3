const people = [
    {
        nome: 'Marco',
        cognome: 'Rossi',
        eta: 11,
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
        eta: 14,
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
        eta: 12,
    },
    {
        nome: 'Raffaella',
        cognome: 'Baglioni',
        eta: 39,
    }
]

const newPeopleList = people.map((person) => {
    return `${person.nome} ${person.cognome}, ${(person.eta >= 18) ? "puo guidare perche' maggiorenne" : "non puo guidare perche' minorenne"}`;
    }
)

console.log(newPeopleList);