// Create a function that takes a string as an argument and converts the first character of each word to uppercase. 
// Return the newly formatted string.
// Notes: 
//   - You can expect a valid string for each test case.
module.exports = (str) => {
/*     // Split the string into an array of words
    const words = str.split(" ");

    // Iterate over each word and capitalize the first character
    const capitalizedWords = words.map(word => {
        const firstChar = word.charAt(0).toUpperCase();
        const restOfWord = word.slice(1);
        return firstChar + restOfWord;
    });

    // Join the capitalized words back into a string
    const capitalizedStr = capitalizedWords.join(" ");

    return capitalizedStr;
 */
    const capitalizedStr = str.replace(/\b\w/g, char => char.toUpperCase());

    return capitalizedStr;
}