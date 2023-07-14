// Write a function that determines if a string is a palindrome.
// Notes: 
// An empty string counts as a palindrome.
module.exports = (str) => {
    // Remove non-alphanumeric characters and convert to lowercase
    const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

    // Reverse the string
    const reversedStr = cleanedStr.split("").reverse().join("");

    // Check if the original and reversed strings are equal
    return cleanedStr === reversedStr;
}