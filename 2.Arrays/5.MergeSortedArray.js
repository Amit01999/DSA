/* Merge Sorted Array:

You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

Merge nums1 and nums2 into a single array sorted in non-decreasing order.

The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

 
Example 1:

Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
Output: [1,2,2,3,5,6]
Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.
Example 2:

Input: nums1 = [1], m = 1, nums2 = [], n = 0
Output: [1]
Explanation: The arrays we are merging are [1] and [].
The result of the merge is [1].
Example 3:

Input: nums1 = [0], m = 0, nums2 = [1], n = 1
Output: [1]
Explanation: The arrays we are merging are [] and [1].
The result of the merge is [1].
Note that because m = 0, there are no elements in nums1. The 0 is only there to ensure the merge result can fit in nums1.
 

Constraints:

nums1.length == m + n
nums2.length == n
0 <= m, n <= 200
1 <= m + n <= 200
-109 <= nums1[i], nums2[j] <= 109
 

Follow up: Can you come up with an algorithm that runs in O(m + n) time?
*/

function merge(nums1, m, nums2, n) {
  let p1 = m - 1; // Pointer for the last element in nums1's initial part
  let p2 = n - 1; // Pointer for the last element in nums2
  let k = m + n - 1; // Pointer for the last position in nums1 where the merged elements will be placed

  while (p2 >= 0) {
    // Continue until all elements from nums2 have been merged

    if (p1 >= 0 && nums1[p1] > nums2[p2]) {
      // If the current element in nums1 is greater than the current element in nums2
      nums1[k] = nums1[p1]; // Place the larger element at the end of nums1
      p1--;
    } else {
      nums1[k] = nums2[p2]; // Place the current element from nums2 at the end of nums1
      p2--;
    }
    k--;
  }
}

//Another way
function mergeTwoArray(nums1, m, nums2, n) {
  let p1 = m - 1; // Pointer for the last element in nums1's initial part
  let p2 = n - 1; // Pointer for the last element in nums2
  for (let i = m + n - 1; i >= 0; i--) {
    if (p2 < 0) {
      break; // If all elements from nums2 have been merged, exit the loop
    }
    if (p1 >= 0 && nums1[p1] > nums2[p2]) {
      // If the current element in nums1 is greater than the current element in nums2
      nums1[i] = nums1[p1];
      p1--;
    } else {
      // If the current element in nums2 is greater than or equal to the current element in nums1
      nums1[i] = nums2[p2];
      p2--;
    }
  }
}

//dry run
array1 = [2, 3];
array2 = [2, 5, 6];
mergeTwoArray(array1, 3, array2, 3);
console.log(array1); // Output: [1, 2, 2, 3, 5, 6]

/* explanation: The function mergeTwoArray merges two sorted arrays nums1 and nums2 into nums1 in-place. It uses two pointers, p1 and p2, to track the last elements of the valid parts of nums1 and nums2, respectively. The loop iterates from the end of nums1, comparing elements from both arrays and placing the larger one at the current position. This continues until all elements from nums2 have been merged into nums1. The final result is a sorted array in nums1.
Example
nums1 = [1, 2, 3, 0, 0, 0]
m = 3
nums2 = [2, 5, 6]
n = 3

The first 3 elements of nums1 are valid (1, 2, 3).

The last 3 zeros are just empty spaces where we'll store the merged result.

Step 1: Initialize the pointers
p1 = m - 1 = 2
p2 = n - 1 = 2
i  = m + n - 1 = 5
nums1 = [1, 2, 3, 0, 0, 0]
              ↑           ↑
             p1           i

nums2 = [2, 5, 6]
              ↑
             p2
p1 points to the last valid element in nums1.
p2 points to the last element in nums2.
i points to the last position of nums1, where we'll place the largest value.

Step 2: Compare 3 and 6
nums1[p1] = 3
nums2[p2] = 6

Since 6 is larger, place it at index 5.

nums1 = [1, 2, 3, 0, 0, 6]

Move p2 and i one step left.

p1 = 2
p2 = 1
i = 4
Step 3: Compare 3 and 5
nums1[p1] = 3
nums2[p2] = 5

Since 5 is larger, place it at index 4.

nums1 = [1, 2, 3, 0, 5, 6]

Move p2 and i.

p1 = 2
p2 = 0
i = 3

Step 4: Compare 3 and 2
nums1[p1] = 3
nums2[p2] = 2

Since 3 is larger, place it at index 3.

nums1 = [1, 2, 3, 3, 5, 6]

Move p1 and i.

p1 = 1
p2 = 0
i = 2

Step 5: Compare 2 and 2
nums1[p1] = 2
nums2[p2] = 2

The condition in the code is:

nums1[p1] > nums2[p2]

Since 2 > 2 is false, copy from nums2.

nums1 = [1, 2, 2, 3, 5, 6]

Move p2 and i.

p1 = 1
p2 = -1
i = 1
Step 6: Stop

Now,

p2 < 0

which means every element from nums2 has already been copied.

So we stop the loop.

The remaining elements in nums1 (1 and 2) are already in the correct position, so no more work is needed.

Final Result
nums1 = [1, 2, 2, 3, 5, 6]
Pointer Movement Summary
Step	Compare  Put in nums1[i]	  nums1 after step
1	    3 vs 6	   6	                 [1,2,3,0,0,6]
2	    3 vs 5	   5	                 [1,2,3,0,5,6]
3	    3 vs 2	   3	                 [1,2,3,3,5,6]
4	    2 vs 2	   2 (from nums2)   	 [1,2,2,3,5,6]
5	    p2 = -1	   Stop	               Final Answer

Why do we start from the end?

If we started filling nums1 from the front, we would overwrite values that we still need to compare.

Example:

nums1 = [1,2,3,0,0,0]

If you immediately put 2 from nums2 at the beginning, you'd overwrite the original 1 or 2 before using it.

By filling from the end, the empty spaces (0s) are used first, so none of the original values are lost. This is why the algorithm works in O(m + n) time and O(1) extra space.*/
