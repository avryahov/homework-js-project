const ordersArr = [4, 2, 1, 3];
const people = [
    {id: 1, name: "Максим"},
    {id: 2, name: "Николай"},
    {id: 3, name: "Ангелина"},
    {id: 4, name: "Виталий"},
];

function giveTalonsInOrder(patients, orders) {
    const clonedPatients = [...patients];
    const sortedPatients = [];

    for (const order of orders) {
        const index = clonedPatients.findIndex(patient => patient.id === order);
        if (index !== -1) {
            sortedPatients.push(clonedPatients[index]);
            clonedPatients.splice(index, 1);
        }
    }
    return sortedPatients;
}

const result = giveTalonsInOrder(people, ordersArr);
console.log('result', result);
/* Возвращает массив
[
   { id: 4, name: 'Виталий' },
   { id: 2, name: 'Николай' },
   { id: 1, name: 'Максим' },
   { id: 3, name: 'Ангелина' }
]
*/