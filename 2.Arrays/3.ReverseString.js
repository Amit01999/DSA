/* Reverse String
Write a function that reverses a string. The input string is given as an array of characters s.
You must do this by modifying the input array in-place with O(1) extra memory.

Example 1:

Input: s = ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]
Example 2:

Input: s = ["H","a","n","n","a","h"]
Output: ["h","a","n","n","a","H"]
 

Constraints:
1 <= s.length <= 105
s[i] is a printable ascii character.

*/

function reverseString(s) {
  let i = 0; // Initialize a pointer at the start of the array
  let j = s.length - 1; // Initialize a pointer at the end of the array
  while (i < j) {
    // Continue swapping until the two pointers meet in the middle
    let temp = s[j];
    s[j] = s[i];
    s[i] = temp;
    i = i + 1;
    j = j - 1;
  }
  return s;
}

function reverseString(s) {
  let n = s.length; // Get the length of the array
  let m = Math.floor(n / 2); // Calculate the midpoint of the array
  for (let i = 0; i < m; i++) {
    // Loop from the start to the midpoint
    let tem = s[i];
    s[i] = s[n - i - 1]; // Swap the current element with its corresponding element from the end
    s[n - i - 1] = tem;
  }
  return s;
}
