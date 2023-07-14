// Create a function that takes in an initial word and filters out an array to contain words that start with the same letters as the initial word.
// If none of the words match, return an empty array.
// Keep the filtered array in the same relative order as the original array of words.

module.exports = (initial, words) => {
    const startsWithInitial = (word) => word.startsWith(initial);
    const filterFn = (arr) => arr.filter(startsWithInitial);
    const result = filterFn(words);
  
    return result.length > 0 ? result : [];
}