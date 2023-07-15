// Write a function that determines if a string is a palindrome.
// Notes: 
// An empty string counts as a palindrome.
module.exports = (str) => {
    /*     const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    
        // Check if the string is empty or a single character
        if (cleanedStr.length <= 1) {
          return true;
        }
      
        // Check if the string is a palindrome
        for (let i = 0; i < cleanedStr.length / 2; i++) {
          if (cleanedStr[i] !== cleanedStr[cleanedStr.length - 1 - i]) {
            return false;
          }
        }
      
        return true;
     */
    
    // Remove non-alphanumeric characters and convert to lowercase
    const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

    // Reverse the string
    const reversedStr = cleanedStr.split("").reverse().join("");

    // Check if the original and reversed strings are equal
    return cleanedStr === reversedStr;
}