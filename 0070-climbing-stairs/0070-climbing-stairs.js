/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n, memo = {}) {
  // 0 = 0
  // 1 = 1
  // 2 = 2
  // 3 = 3
  // 4 = 5
  if (n <= 3) return n
  if (n in memo) return memo[n]
  memo[n] = climbStairs(n-1, memo) + climbStairs(n-2, memo)
  return memo[n]
};