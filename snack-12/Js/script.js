const userWord1 = prompt("Enter a word");
const userWord2 = prompt("Enter another word");

if (sameLength(userWord1, userWord2)) {
    console.log(userWord1, userWord2);
} else {
    if (userWord1.length > userWord2.length) {
        console.log(userWord1);
    } else {
        console.log(userWord2);
    };
}

function sameLength(word1, word2) {
    if (word1.length === word2.length) {
        return true;
    } else {
        return false;
    }
}