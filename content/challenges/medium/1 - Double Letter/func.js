// Create a function that takes a word and returns true if the word has two consecutive identical letters.
module.exports = (word) => {
    for (let i = 0; i < word.length; ++i) {
        if (word[i] === word[i + 1]) {
            return true;
        }
    }
    return false;
}