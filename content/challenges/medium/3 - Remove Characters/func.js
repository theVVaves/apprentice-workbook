// Create a function that takes a string, removes all "special" characters (e.g. !, @, #, $, %, ^, &, \, *, (, )) and 
// returns the new string. The only non-alphanumeric characters allowed are dashes -, underscores _ and spaces.
module.exports = (str) => {
/*     // List of allowed characters
    const allowedCharacters = /[a-zA-Z0-9-_ ]/;

    // Array to store the filtered characters
    const filteredChars = [];

    // Iterate over each character in the string
    for (let i = 0; i < str.length; i++) {
        const char = str[i];

        // Check if the character is allowed
        if (allowedCharacters.test(char)) {
            filteredChars.push(char);
        }
    }

    // Join the filtered characters and return the new string
    return filteredChars.join('');
 */
    const newStr = str.replace(/[^\w\s-]/g, '');

    return newStr;
}