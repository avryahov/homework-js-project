function getDateFormat(date, separator = '.') {
    const formatNumber = number => number < 10 ? `0${number}` : number.toString();

    const dayFormated = formatNumber(date.getDate());
    const monthFormated = formatNumber(date.getMonth() + 1);
    const year = date.getFullYear();

    return `${dayFormated}${separator}${monthFormated}${separator}${year}`;
}

let date = new Date(2001, 4, 5);
console.log(getDateFormat(date));
console.log(getDateFormat(date, '-'));

console.log("--------------------------------")

date = new Date();
console.log(getDateFormat(date));
console.log(getDateFormat(date, '-'));