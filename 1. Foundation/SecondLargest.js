/*  Second Largest Digit in a String:
Given an alphanumeric string s, return the second largest numerical digit that appears in s, or -1 if it does not exist.
An alphanumeric string is a string consisting of lowercase English letters and digits.

Example 1:
Input: s = "dfa12321afd"
Output: 2
Explanation: The digits that appear in s are [1, 2, 3]. The second largest digit is 2.
Example 2:
Input: s = "abc1111"
Output: -1
Explanation: The digits that appear in s are [1]. There is no second largest digit. 

Constraints:

1 <= s.length <= 500
s consists of only lowercase English letters and digits.
*/

function secondHighest(s) {
  let largest = -Infinity;
  let secondLargest = -Infinity;

  for (const ch of s) {
    if (ch >= '0' && ch <= '9') {
      let digit = Number(ch);

      if (digit > largest) {
        secondLargest = largest;
        largest = digit;
      } else if (digit > secondLargest && digit !== largest) {
        secondLargest = digit;
      }
    }
  }

  return secondLargest;
}
const result1 = secondHighest('dfa12321afd');
console.log(result1); // Output: 2

const result2 = secondHighest('abc1111');
console.log(result2); // Output: -1
