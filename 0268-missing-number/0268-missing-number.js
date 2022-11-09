/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  let sum = 0
  let ideal = 0
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i]
    ideal += (i + 1)
  }
  return ideal - sum
};