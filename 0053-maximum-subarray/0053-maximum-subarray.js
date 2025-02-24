/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let max = -Infinity
  let cur = 0
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i]
    cur = Math.max(num, cur + num)
    max = Math.max(max, cur)
  }  
  return max
};