

function getReversedNumber(number) {
    const string = number.toString();
    let reversedString = '';

    for (let index = string.length - 1; index >= 0; index--) {
        reversedString += string[index];
    }
    return reversedString;
}