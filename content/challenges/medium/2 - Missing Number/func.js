// Create a function that takes an array of numbers between 1 and 10 (excluding one number) and returns the missing number.
// Notes:
//   - The array of numbers will be unsorted (not in order).
//   - Only one number will be missing.
module.exports = (arr) => {
    // Calculate the sum of all numbers from 1 to 10
    const expectedSum = 55;

    // Calculate the actual sum of the given array
    const actualSum = arr.reduce((sum, num) => sum + num, 0);

    // The missing number is the difference between the expected sum and the actual sum
    const missingNumber = expectedSum - actualSum;

    return missingNumber;
}