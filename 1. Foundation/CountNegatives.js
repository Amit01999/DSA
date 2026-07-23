/* Count Negatives 
Given an array arr of numbers, return the count of elements strictly less
than 0.

Examples

Input: arr = [-1, 0, 1]
Output: 1

Input: arr = [-2, -5, -7]
Output: 3

Input: arr = [0, 2, 3]
Output: 0

Input: arr = []
Output: 0

Input: arr = []
Output: 0
countNegatives([-1, 0, 1]) // 1
countNegatives([-2, -5, -7]) // 3
countNegatives([0, 2, 3]) // 0
countNegatives([]) // 0
countNegatives (null)// false
countNegatives (undefined) // false 

Constraints

. If input is not an array, return false.
. If the array contains any non-number values or non-finite numbers
(NaN, Infinity, -Infinity), return false.
. An empty array is valid and should return 0.
*/
function countNegatives(arr) {
  if (!Array.isArray(arr)) {
    return false; // Array.isArray() is a built-in JavaScript method that checks whether a value is an array.
  }
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== 'number') {
      return false; // Check if each element is a number
    }
    if (!isFinite(arr[i])) {
      return false; // Check if each element is a finite number
    }
    if (arr[i] < 0) {
      count++;
    }
  }
  return count;
}
