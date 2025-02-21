/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let lowest = Infinity
  let maxProf = 0
  for (let price of prices) {
    lowest = Math.min(price, lowest)
    maxProf = Math.max(price - lowest, maxProf)
  }
  return maxProf
};