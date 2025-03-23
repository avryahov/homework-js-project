const peopleWaiting = ['Кристина', 'Олег', 'Кирилл', 'Мария', 'Светлана', 'Артем', 'Глеб'];

function giveParcel() {
    const removedPerson = peopleWaiting.shift();
    if (removedPerson) {
        alert(`${removedPerson} получил(а) посылку. В очереди осталось ${peopleWaiting.length} человек.`);
    }
}

function leaveQueueWithoutParcel() {
    const removedPerson = peopleWaiting.pop();
    if (removedPerson) {
        alert(`${removedPerson} не получил(а) посылку и ушел(ла) из очереди`);
    }
}

giveParcel();
giveParcel();
giveParcel();

while (peopleWaiting.length > 0) {
    leaveQueueWithoutParcel();
}