/* Remove Duplicates from Sorted Array

Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same.

Consider the number of unique elements in nums to be k​​​​​​​​​​​​​​. After removing duplicates, return the number of unique elements k.

The first k elements of nums should contain the unique numbers in sorted order. The remaining elements beyond index k - 1 can be ignored.

Custom Judge:

The judge will test your solution with the following code:

int[] nums = [...]; // Input array
int[] expectedNums = [...]; // The expected answer with correct length

int k = removeDuplicates(nums); // Calls your implementation

assert k == expectedNums.length;
for (int i = 0; i < k; i++) {
    assert nums[i] == expectedNums[i];
}
If all assertions pass, then your solution will be accepted.

 

Example 1:

Input: nums = [1,1,2]
Output: 2, nums = [1,2,_]
Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).
Example 2:

Input: nums = [0,0,1,1,1,2,2,3,3,4]
Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
Explanation: Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).
 

Constraints:

1 <= nums.length <= 3 * 104
-100 <= nums[i] <= 100
nums is sorted in non-decreasing order.
*/

function RemoveDuplicates(nums) {
  if (nums.length === 0) return 0; // Handle empty array case

  let k = 1; // Initialize k to 1 since the first element is always unique
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      nums[k] = nums[i]; // Place the unique element at index k
      k = k + 1; // Increment k for the next unique element
    }
  }
  return k; // Return the count of unique elements
}

var removeDuplicates = function (nums) {
  let x = 0; // Initialize a pointer for the position of unique elements
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > nums[x]) {
      // Compare current element with the last unique element
      x = x + 1; // Move the pointer to the next position for unique elements
      nums[x] = nums[i]; // Place the unique element at the new position
    }
  }
  return x + 1; //  Return the count of unique elements (x is zero-based, so add 1)
};
