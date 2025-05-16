function addDays(date, days) {
    const nextDays = days * (24 * 60 * 60 * 1000);
    return new Date(date.getTime() + nextDays);
}

const currentDate = new Date();
console.log(addDays(currentDate, 5));