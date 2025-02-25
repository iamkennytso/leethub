/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let cur = 0
  let max = -Infinity
  for (let num of nums) {
    cur = Math.max(num, cur + num)
    max = Math.max(max, cur)
  }
  return max
};