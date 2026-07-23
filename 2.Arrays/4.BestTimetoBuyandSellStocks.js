/* Best Time to Buy and Sell Stock:

You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

 
Example 1:

Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
Example 2:

Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transactions are done and the max profit = 0.
 

Constraints:

1 <= prices.length <= 105
0 <= prices[i] <= 104

*/

function maxProfit(prices) {
  let minPrice = Infinity; // Initialize minPrice to a very large value
  let maxProfit = 0; // Initialize maxProfit to 0
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < minPrice) {
      minPrice = prices[i]; // Update minPrice if a lower price is found
    }
    let currentProfit = prices[i] - minPrice; // Calculate the profit if sold on the current day
    if (currentProfit > maxProfit) {
      maxProfit = currentProfit; // Update maxProfit if a higher profit is found
    }
  }
  return maxProfit; // Return the maximum profit achievable
}

var maxProfit = function (prices) {
  let maxprofit = 0; // Initialize maxprofit to 0
  for (let i = 0; i < prices.length; i++) {
    // Loop through each day as the buying day
    for (let j = i + 1; j < prices.length; j++) {
      // Loop through each subsequent day as the selling day
      if (prices[j] - prices[i] > maxprofit) {
        // Check if the profit from buying on day i and selling on day j is greater than the current maxprofit
        maxprofit = prices[j] - prices[i]; // Update maxprofit if a higher profit is found
      }
    }
  }
  return maxprofit;
};
