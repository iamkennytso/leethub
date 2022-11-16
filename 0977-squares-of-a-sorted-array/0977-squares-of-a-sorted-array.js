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
    const leftNum = nums[left] ** 2
    const rightNum = nums[right] ** 2
    if (leftNum < rightNum) {
      ans[cur] = rightNum
      right--
    } else {
      ans[cur] = leftNum
      left++
    }
    cur--
  }
  return ans
};