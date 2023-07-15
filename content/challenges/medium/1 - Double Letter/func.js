// Create a function that takes a word and returns true if the word has two consecutive identical letters.
module.exports = (word) => {
    /*     for (let i = 0; i < word.length; ++i) {
            if (word[i] === word[i + 1]) {
                return true;
            }
        }
        return false;
     */

    /*     function hasConsecutiveLetters(word) {
            const wordLength = word.length;
            if (wordLength < 2) {
                return false; // Words with less than 2 characters cannot have consecutive identical letters
            }
    
            const firstLetter = word[0];
            const secondLetter = word[1];
            if (firstLetter === secondLetter) {
                return true; // Found consecutive identical letters at the beginning of the word
            }
    
            const lastLetter = word[wordLength - 1];
            const secondToLastLetter = word[wordLength - 2];
            if (lastLetter === secondToLastLetter) {
                return true; // Found consecutive identical letters at the end of the word
            }
    
            return hasConsecutiveLetters(word.slice(1, wordLength - 1));
        }
     */

    /*     if (word.length < 2) {
            return false;
        }
    
        return word.split('').some((letter, index) => letter === word[index + 1]);
     */
    
    return /(\w)\1/.test(word);

}