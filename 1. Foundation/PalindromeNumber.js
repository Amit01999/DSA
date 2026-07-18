/* Palindrome Number 
Given an integer x, return true if x is a palindrome, and false otherwise.

 

Example 1:

Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.
Example 2:

Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
Example 3:

Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
 

Constraints:

-231 <= x <= 231 - 1
*/

function isPalindrome(x) {
  if (x < 0) {
    return false; // Negative numbers are not palindromes
  }
  const original = x;
  let reversed = 0;
  while (x > 0) {
    const digit = x % 10; // Get the last digit of x
    reversed = reversed * 10 + digit;
    // x = Math.floor(x / 10);
    x = Math.trunc(x / 10);
    // Math.trunc(-4.9) cuts off the decimal to return -4.
    // Math.floor(-4.9) rounds down to the next lower whole number, returning -5.
    // Remove the last digit from x math.floor is used to round down the result of the division
  }
  return original === reversed;
}
const result1 = isPalindrome(121); // true
console.log(result1); // Output: true
const result2 = isPalindrome(-121);
// false
console.log(result2); // Output: false
const result3 = isPalindrome(10);
console.log(result3); // Output: false
