// Create a function that performs an even-odd transform to an array, n times. 
// Each even-odd transformation:
//   1. Adds two (+2) to each odd integer.
//   2. Subtracts two (-2) to each even integer.
module.exports = (arr, n) => {
    /*     for (let i = 0; i < n; i++) {
            arr = arr.map(num => {
                if (num % 2 === 0) {
                    return num - 2; // Subtract 2 from even number
                } else {
                    return num + 2; // Add 2 to odd number
                }
            });
        }
    
        return arr;
     */
    /*     const transformedArray = arr.map(num => {
            if (num % 2 === 0) {
                return num - (2 * n); // Subtract 2n from even number
            } else {
                return num + (2 * n); // Add 2n to odd number
            }
        });
    
        return transformedArray;
     */

    const transformedArray = arr.map(num => {
        if (num & 1) {
            return num + (n << 1); // Add 2n to odd number
        } else {
            return num - (n << 1); // Subtract 2n from even number
        }
    });

    return transformedArray;
}