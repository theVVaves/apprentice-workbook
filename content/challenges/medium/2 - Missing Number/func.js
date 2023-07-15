// Create a function that takes an array of numbers between 1 and 10 (excluding one number) and returns the missing number.
// Notes:
//   - The array of numbers will be unsorted (not in order).
//   - Only one number will be missing.
module.exports = (arr) => {
    /*     const numberSet = new Set(arr); // Create a Set from the array
    
        // Iterate through the numbers from 1 to 10
        for (let i = 1; i <= 10; i++) {
            if (!numberSet.has(i)) {
                return i; // Found the missing number
            }
        }
    
        return -1; // Return -1 if no missing number is found
     */

    /*     let missingNumber = 0;
      
        // XOR all the numbers from 1 to 10
        for (let i = 1; i <= 10; i++) {
          missingNumber ^= i;
        }
        
        // XOR all the numbers in the array
        for (let num of arr) {
          missingNumber ^= num;
        }
        
        return missingNumber;
     */

    const n = 10; // Total numbers from 1 to 10
    const expectedSum = (n * (n + 1)) / 2; // Sum of consecutive numbers from 1 to 10

    // Calculate the actual sum of the given array
    const actualSum = arr.reduce((sum, num) => sum + num, 0);

    // The missing number is the difference between the expected sum and the actual sum
    const missingNumber = expectedSum - actualSum;

    return missingNumber;

}