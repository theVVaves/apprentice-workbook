// Create a function that takes in an initial word and filters out an array to contain words that start with the same letters as the initial word.
// If none of the words match, return an empty array.
// Keep the filtered array in the same relative order as the original array of words.

module.exports = (initial, words) => {
    /*     const filteredArray = [];
    
        for (const word of words) {
            if (word.startsWith(initial)) {
                filteredArray.push(word);
            }
        }
    
        return filteredArray;
     */
    return words.filter(word => word.startsWith(initial));
}