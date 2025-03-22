let userName = getPromptValueLowerCase('Как вас зовут?');
throwError(userName, `Вы не указали имя`);

let userAge = getPromptNumberValue('Сколько вам лет?');
throwError(userAge, `Вы не указали возраст`);

alert(`Вас зовут ${userName} и вам ${userAge} лет`);

function getPromptValueLowerCase(input) {
    let value = prompt(input);
    if (value) {
        return value.trim().toLowerCase();
    }
    return NaN;
}

function getPromptNumberValue(input) {
    let value = getPromptValueLowerCase(input);
    try {
        if (value) {
            return Number(value);
        }
        return NaN;
    } catch (e) {
        throwWithAlertError("Вы неправильно указали число");
    }
}

function throwError(value, msg) {
    if (!value) {
        throwWithAlertError(msg);
    }
}

function throwWithAlertError(msg) {
    alert(msg);
    throw (msg);
}