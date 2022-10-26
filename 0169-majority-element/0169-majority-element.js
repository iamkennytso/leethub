/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  const length = nums.length
  const threshold = Math.floor(nums.length / 2) + 1
  let most = 0
  const obj = {}
  for (let num of nums) {
    obj[num] = (obj[num] || 0) + 1
    most = Math.max(most, obj[num])
    if (most === threshold) {
      return num
    }
  }
};