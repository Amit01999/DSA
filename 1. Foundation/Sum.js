/* Design a function sum that can take any number of arguments and return their total. The function should work for both fixed an variable number of arguments using JavaScript features. Only numerical arguments will be provided.

Example Inputs & Outputs
sum(1, 2, 3) -> 6
sum(10) -> 10
sum() -> 0
sum(5,-5,10,20) -> 30
sum(100, 200, 300, 400) -> 1000

Constraints & Edge Cases
. Inputs will always be numbers (integers or floats).
. No arguments -> should return 0.
. Function must handle a variable number of arguments.
.Negative numbers should be handled correctly.
. Must not use built-in eval() or Function() constructor. */

function sum(...args) {
  console.log(args); // This will log the array of arguments passed to the function
  let total = 0;

  for (let num of args) {
    total += num;
  }

  return total;
}

let result1 = sum(1, 2, 3);
console.log(result1);

/*
Time Complexity
O(n), where n is the number of arguments.
Space Complexity
O(n) for the args array created by the rest parameter (excluding that, the extra working space is O(1)).
*/
