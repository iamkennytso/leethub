/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  const obj = {}
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i]
    if (num in obj) {
      return [obj[num], i]
    }
    obj[target - num] = i
  }
};