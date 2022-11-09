/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  const obj = {}
  for (let num of nums) {
    if (num in obj) {
      obj[num] = false
    } else {
      obj[num] = true
    }
  }
  return Object.keys(obj).find(key => obj[key] === true)
};