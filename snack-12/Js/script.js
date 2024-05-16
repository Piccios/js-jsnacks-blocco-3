const word1 = prompt("Enter a word");
const word2 = prompt("Enter another word");



function sameLength(word1, word2) {
    if (word1.length === word2.length) {
        console.log(word1, word2);
    } else {
        if (word1.length > word2.length) {
            console.log(word1);
        } else {
            console.log(word2);
        }
    }
}