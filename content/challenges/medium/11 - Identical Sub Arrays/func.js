// Create a function that takes in a two-dimensional array and returns the number of sub-arrays with identical elements.
// e.g. [['#', '#'],[2,2,2]], both sub-arrays contain identical elements so this would return 2.
// Notes: 
//   - Single-element arrays count as (trivially) having identical elements.
module.exports = (arr) => {
  
    /*     let count = 0;
    
        for (let subArray of arr) {
          let firstElement = subArray[0];
          let isIdentical = true;
      
          for (let i = 1; i < subArray.length; i++) {
            if (subArray[i] !== firstElement) {
              isIdentical = false;
              break;
            }
          }
      
          if (isIdentical) {
            count++;
          }
        }
      
        return count;
     */

    /*     let count = 0;
       
           for (let subArray of arr) {
             const uniqueElements = new Set(subArray);
             if (uniqueElements.size === 1) {
               count++;
             }
           }
         
           return count;
           
    */
   
    /*      // Helper function to check if an array has identical elements
        function hasIdenticalElements(subarray) {
            return subarray.every(element => element === subarray[0]);
        }
    
        // Recursive function to count identical subarrays
        function countIdentical(arr) {
            if (arr.length === 0) {
                return 0;
            }
    
            const [first, ...rest] = arr;
            const countRest = countIdentical(rest);
    
            return hasIdenticalElements(first) ? countRest + 1 : countRest;
        }
    
        return countIdentical(arr);
     */

    // Helper function to check if all elements in an array are the same
    const allElementsSame = (array) => array.every((element) => element === array[0]);

    // Function composition to count subarrays with identical elements
    const count = arr
        .map(allElementsSame) // Map each subarray to a boolean indicating if all elements are the same
        .filter(Boolean) // Filter out subarrays where all elements are not the same
        .length; // Count the number of remaining subarrays

    return count;
}