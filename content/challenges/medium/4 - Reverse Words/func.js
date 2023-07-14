// Write a function that takes a string of one or more words as an argument and returns the same string, 
// but with all five or more letter words reversed. Strings passed in will consist of only letters and spaces. 
// Spaces will be included only when more than one word is present.
// Notes:
//   - You can expect a valid string to be provided for each test case.
module.exports = (str) => {
    // Split the string into an array of words
    let words = str.split(' ');

    // Iterate through each word
    for (let i = 0; i < words.length; i++) {
        // Check if the word has five or more letters
        if (words[i].length >= 5) {
            // Reverse the word
            words[i] = words[i].split('').reverse().join('');
        }
    }

    // Join the words back into a string with spaces
    return words.join(' ');
}