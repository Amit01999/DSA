/* Sort Array
Given an array of integers nums, sort the array in ascending order and return it.

You must solve the problem without using any built-in functions in O(nlog(n)) time complexity and with the smallest space complexity possible.

 

Example 1:

Input: nums = [5,2,3,1]
Output: [1,2,3,5]
Explanation: After sorting the array, the positions of some numbers are not changed (for example, 2 and 3), while the positions of other numbers are changed (for example, 1 and 5).
Example 2:

Input: nums = [5,1,1,2,0,0]
Output: [0,0,1,1,2,5]
Explanation: Note that the values of nums are not necessarily unique.
 

Constraints:

1 <= nums.length <= 5 * 104
-5 * 104 <= nums[i] <= 5 * 104
*/

// Sort Array
function sortArray(nums) {
  if (!Array.isArray(nums)) {
    return false; // Return false for non-array inputs
  };

  if (nums.length === 0) {
    return []; // Return an empty array for empty input
  }

// Validate that all elements are finite numbers
  for (let i = 0; i < nums.length; i++) {
    if (typeof nums[i] !== 'number' || !Number.isFinite(nums[i])) {
      return false; // Return false for non-number or non-finite values
    }
  }

  // Implementing Merge Sort
  function mergeSort(arr) {
    if (arr.length <= 1) {
      return arr; // Base case: an array of length 0 or 1 is already sorted
    }

    const mid = Math.floor(arr.length / 2); // Find the middle index
    const left = mergeSort(arr.slice(0, mid)); // Recursively sort the left half
    const right = mergeSort(arr.slice(mid)); // Recursively sort the right half
    return merge(left, right); // Merge the sorted halves
  }

  function merge(left, right) {
    const result = [];
    let i = 0;
    let j = 0;  

    while (i < left.length && j < right.length) {
      if (left[i] < right[j]) {
        result.push(left[i]); // If the left element is smaller, add it to the result
        i++;
      } else {
        result.push(right[j]); // If the right element is smaller or equal, add it to the result
        j++;
      }
    }
    // Push any remaining elements from either array
    return result.concat(left.slice(i)).concat(right.slice(j));
  }

  return mergeSort(nums);
}



