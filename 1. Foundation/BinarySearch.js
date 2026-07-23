/* Binary Search
Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

You must write an algorithm with O(log n) runtime complexity.

Example 1:

Input: nums = [-1,0,3,5,9,12], target = 9
Output: 4
Explanation: 9 exists in nums and its index is 4
Example 2:

Input: nums = [-1,0,3,5,9,12], target = 2
Output: -1
Explanation: 2 does not exist in nums so return -1
 

Constraints:

1 <= nums.length <= 104
-104 < nums[i], target < 104
All the integers in nums are unique.
nums is sorted in ascending order.
 
*/

function binarySearch(nums, target) {
  let left = 0; // Initialize left pointer to the start of the array
  let right = nums.length - 1; // Initialize right pointer to the end of the array

  while (left <= right) {
    const mid = Math.floor((left + right) / 2); // Calculate the middle index
    if (nums[mid] === target) {
      return mid; // If the middle element is the target, return its index
    } else if (nums[mid] < target) {
      left = mid + 1; // If the middle element is less than the target, move the left pointer to mid + 1
    } else {
      right = mid - 1; // If the middle element is greater than the target, move the right pointer to mid - 1
    }
  }
  return -1; // If the target is not found, return -1
}

/* Time Complexity: O(log n) - The search space is halved with each iteration, leading to logarithmic time complexity.
Proof:

n elements
After the 1st iteration, Binary Search removes half.
Remaining:
n / 2

Step 2: After the 2nd iteration
Again, remove half.
Remaining:
(n / 2) / 2
= n / 4
Step 3: After the 3rd iteration

Remaining:
n / 8

You can see the pattern.

Iteration	Remaining elements
0	n
1	n / 2
2	n / 4
3	n / 8
4	n / 16

Notice:

2
4 = 2²
8 = 2³
16 = 2⁴

So after k iterations:

Remaining = n / 2ᵏ

Step 4: When does Binary Search stop?

It stops when only 1 element is left.

So set

n / 2ᵏ = 1

Multiply both sides by 2ᵏ

n = 2ᵏ

Take log base 2 on both sides.

log₂(n) = log₂(2ᵏ)

Using the logarithm rule:

log₂(2ᵏ) = k

Therefore,

k = log₂(n)

This means Binary Search performs about log₂(n) iterations.

Hence,

Time Complexity = O(log n)
Example: n = 16

Start:

16

Iteration 1

16 / 2 = 8

Iteration 2

8 / 2 = 4

Iteration 3

4 / 2 = 2

Iteration 4

2 / 2 = 1

Stopped after 4 iterations.

Now check:

log₂(16)

= 4

Exactly the same.

Example: n = 32
32
16
8
4
2
1

There are 5 divisions.

Because

log₂(32) = 5
Example: n = 1024
1024
512
256
128
64
32
16
8
4
2
1

There are 10 divisions.

Because

2¹⁰ = 1024

log₂(1024) = 10
General Proof

After k iterations:

Remaining = n / 2ᵏ

Stop when:

n / 2ᵏ = 1

Rearrange:

2ᵏ = n

Take log:

k = log₂(n)

Therefore, the number of iterations grows logarithmically with the input size, so Binary Search has a time complexity of O(log n).

Compare with Linear Search

For n = 1,000,000:

Linear Search: Up to 1,000,000 comparisons → O(n)
Binary Search: About log₂(1,000,000) ≈ 20 comparisons → O(log n)

That's why Binary Search is dramatically faster on large sorted arrays.*/
