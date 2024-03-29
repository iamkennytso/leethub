/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let max = 0
    let min = Infinity
    for (let price of prices) {
      min = Math.min(price, min)
      max = Math.max(price - min, max)
    }
  return max
};