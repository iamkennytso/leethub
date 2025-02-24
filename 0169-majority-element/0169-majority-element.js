/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  let ans = nums[0]
  const counts = {}
  for (let num of nums) {
    counts[num] = (counts[num] || 0 ) + 1
    if (counts[num] > counts[ans]) ans = num
  }
  return ans
};