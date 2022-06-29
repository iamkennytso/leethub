/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
  const arr = nums.map(() => 1)
  let prod = 1
  for (let i = 0; i < nums.length; i++) {
    arr[i] = arr[i] * prod
    prod = prod * nums[i]
  }
  prod = 1
  for (let i = nums.length - 1; i >= 0; i--) {
    arr[i] = arr[i] * prod
    prod = prod * nums[i]
  }
  
  return arr
    
};