function getDaysBeforeBirthday(nextBirthdayDate) {
    const currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0);
    const currentYear = currentDate.getFullYear();

    const nextBirthday = new Date(nextBirthdayDate);
    nextBirthday.setFullYear(currentYear);
    nextBirthday.setHours(0, 0, 0, 0);

    if (nextBirthday < currentDate) {
        nextBirthday.setFullYear(currentYear + 1);
    }

    const timeDifference = nextBirthday.getTime() - currentDate.getTime();

    return convertMsToDays(timeDifference);
}

function convertMsToDays(ms) {
    return Math.round(ms / (1000 * 60 * 60 * 24));
}

const birthday = new Date(1991, 7, 2);
console.log(getDaysBeforeBirthday(birthday));