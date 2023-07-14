// Write a function that takes a string, and returns a new string with any duplicate consecutive letters removed.
// Notes:
//   - Final strings won't include words with double letters (e.g. "passing", "lottery").

module.exports = (word) => {
    let result = '';

    for (let i = 0; i < word.length; i++) {
        if (word[i] !== word[i + 1]) {
            result += word[i];
        }
    }

    return result;
}