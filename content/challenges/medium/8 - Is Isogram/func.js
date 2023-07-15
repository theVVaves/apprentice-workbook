// An isogram is a word that has no repeating letters, consecutive or nonconsecutive. 
// Create a function that takes a string and returns either true or false depending
// on whether or not it's an "isogram".
// Notes: 
//   - Ignore letter case (should not be case sensitive).
//   - All test cases contain valid one word strings.
module.exports = (str) => {
    
    /*     const letters = new Set();
    
        for (let i = 0; i < str.length; i++) {
            const letter = str[i].toLowerCase();
    
            if (letters.has(letter)) {
                return false;
            }
    
            letters.add(letter);
        }
    
        return true;
     */

    str = str.toLowerCase();

    // Convert the string to an array of characters
    const characters = [...str];

    // Create a set to store unique characters
    const uniqueCharacters = new Set(characters);

    // If the size of the set is equal to the length of the string, it's an isogram
    return uniqueCharacters.size === str.length;
}
