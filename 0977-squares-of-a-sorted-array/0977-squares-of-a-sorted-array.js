/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
  const ans = []
  let left = 0
  let right = nums.length - 1
  let cur = right
  while (left <= right) {
    if (nums[left] ** 2 < nums[right] ** 2) {
      ans[cur] = nums[right] ** 2
      right--
    } else {
      ans[cur] = nums[left] ** 2
      left++
    }
    cur--
  }
  return ans
};