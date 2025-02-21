/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

// [-1, 0, 3, 5, 9, 12]
// 0, 5, 3
// -1, 12, 9
var search = function(nums, target) {
  let left = 0, right = nums.length - 1
  while (left <= right) {
    const mid = Math.floor(right - left)
    if (nums[mid] === target) {
      return mid
    } else if (target < nums[mid]) {
      right = mid - 1
    } else {
      left = mid + 1
    }
  }
  return -1
};