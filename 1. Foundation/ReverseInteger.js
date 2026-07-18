/* 7. Reverse Integer
Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

Example 1:

Input: x = 123
Output: 321
Example 2:

Input: x = -123
Output: -321
Example 3:

Input: x = 120
Output: 21
 
Constraints:
-231 <= x <= 231 - 1
*/

function reverse(x) {
  const INT_MAX = 2147483647; // 2^31 - 1
  const INT_MIN = -2147483648;
  let reversed = 0;
  while (x !== 0) {
    const digit = x % 10; // Get the last digit of x
    reversed = reversed * 10 + digit;
    // Check for overflow/underflow
    if (reversed > INT_MAX || reversed < INT_MIN) {
      return 0;
    }
    x = Math.trunc(x / 10); // Remove the last digit from x
  }
  return reversed;
}
