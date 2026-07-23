/*Find largest number
Given an array arr of numbers, return the largest number in the array. If the array is empty, return
null

Examples

Input: arr = [3, 1, 2]
Output: 3

Input: arr = [-5, 2, -3, 4]
Output: 4

Input: arr = [0, 2, 3]
Output: 3

Input: arr = []
Output: null

Constraints

. Input must be an array of finite numbers
. Return false for non-array inputs
. Return false for arrays containing non-number values
. Return false for arrays containing NaN, Infinity, or -Infinity
. For an empty array, return null

*/
function findLargest(arr) {
  if (!Array.isArray(arr)) {
    return false;
  }
  if (arr.length === 0) {
    return null;
  }
  let largest = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== "number" || !isFinite(arr[i])) {
      return false;
    }
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  return largest;
}   