// Write a function that returns the greatest common divisor (GCD) of two integers.
// Notes: 
//   - Both values will be positive.
//   - The GCD is the largest factor that divides both numbers.
module.exports = (int1, int2) => {
  // Ensure both numbers are positive
  int1 = Math.abs(int1);
  int2 = Math.abs(int2);

  // Handle edge cases
  if (int1 === 0) {
    return int2;
  }
  if (int2 === 0) {
    return int1;
  }

  // Calculate the GCD using Euclidean algorithm
  while (int2 !== 0) {
    let temp = int2;
    int2 = int1 % int2;
    int1 = temp;
  }

  return int1;
}