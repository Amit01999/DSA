/* Find Smallest
 Given an array arr of numbers, return the smallest number in the array. If the array is empty, return
null.

Examples

Input: arr = [3, 1, 2]
Output: 1

Input: arr = [-5, 2, -3, 4]
Output: -5

Input: arr = [0, 2, 3]
Output: 0

Input: arr = []
Output: null

Constraints

. Input must be an array of finite numbers
. Return false for non-array inputs
. Return false for arrays containing non-number values
. Return false for arrays containing NaN, Infinity, or -Infinity
. For an empty array, return null
*/
function findSmallest(arr) {
  if (!Array.isArray(arr)) {
    return false;
  }

  if (arr.length === 0) {
    return null;
  }

  // Validate first element
  if (typeof arr[0] !== 'number' || !Number.isFinite(arr[0])) {
    return false;
  }

  let smallest = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (typeof arr[i] !== 'number' || !Number.isFinite(arr[i])) {
      return false; // Check if each element is a number and finite
    }

    if (arr[i] < smallest) {
      smallest = arr[i];
    }
  }

  return smallest;
}
