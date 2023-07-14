// Create a function that takes in a two-dimensional array and returns the number of sub-arrays with identical elements.
// e.g. [['#', '#'],[2,2,2]], both sub-arrays contain identical elements so this would return 2.
// Notes: 
//   - Single-element arrays count as (trivially) having identical elements.
module.exports = (arr) => {
    // Helper function to check if all elements in an array are the same
    const allElementsSame = (array) => array.every((element) => element === array[0]);

    // Function composition to count subarrays with identical elements
    const count = arr
        .map(allElementsSame) // Map each subarray to a boolean indicating if all elements are the same
        .filter(Boolean) // Filter out subarrays where all elements are not the same
        .length; // Count the number of remaining subarrays

    return count;
}