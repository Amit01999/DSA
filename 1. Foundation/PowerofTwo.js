/* Power of Two
Given an integer n, return true if it is a power of two. Otherwise, return false.
An integer n is a power of two, if there exists an integer x such that n == 2^x.

Example 1:

Input: n = 1
Output: true
Explanation: 2^0 = 1
Example 2:

Input: n = 16
Output: true
Explanation: 2^4 = 16
Example 3:

Input: n = 3
Output: false
 

Constraints:

-231 <= n <= 231 - 1
*/
function isPowerOfTwo(n) {
  if (typeof n !== 'number' || !Number.isInteger(n)) {
    return false; // Return false for non-integer inputs
  }

  if (n <= 0) {
    return false; // Return false for non-positive integers
  }

  while (n > 1) {
    if (n % 2 !== 0) {
      return false; // If n is not divisible by 2, it is not a power of two
    }
    n = n / 2; // Divide n by 2
  }
  return true; // If we reach 1, n is a power of two
}
