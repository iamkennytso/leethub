/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  // const arr = new Array(nums.length)
  // arr[0] = nums[0]
  // for (let i = 1; i < nums.length; i++) {
  //   arr[i] = Math.max(nums[i], arr[i-1] + nums[i])
  // }
  // return Math.max(...arr)
  let max = nums[0]
  let prev = nums[0]
  for (let i = 1; i < nums.length; i++) {
    max = Math.max(max, nums[i], prev + nums[i])
    prev = Math.max(nums[i], prev + nums[i])
  }
  return max
};