/**
 * @param {number} n
 * @return {number}
 */


// 1 = 1
// 2 = 2
// 3 = 3
// 4 = 5
var climbStairs = function(n, memo = [0, 1, 2]) {
  if (n in memo) {
    return memo[n]
  }
  memo[n] = climbStairs(n-1, memo) + climbStairs(n-2, memo)
  return memo[n]
};