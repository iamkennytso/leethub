/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  const obj = {}
  for (let num of nums) {
    obj[num] ? obj[num] = false : obj[num] = true
    // if (num in obj) {
    //   obj[num] = false
    // } else {
    //   obj[num] = true
    // }
  }
  return Object.keys(obj).find(key => obj[key] === true)
};