/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
  // return nums.map(num => num * num).sort((a,b) => a - b)
  const squared = nums.map(num => num*num)
  const ans = []
  let left = 0
  let right = squared.length - 1
  while(left <= right) {
    if (squared[left] > squared[right]) {
      ans.push(squared[left])
      left++
    } else {
      ans.push(squared[right])
      right--
    }
  }
  return ans.reverse()
};