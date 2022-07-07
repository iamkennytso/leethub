/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  const ans = []
  const seen = {}
  if (nums.length === 3) {
    return nums[0] + nums[1] + nums[2] === 0 ? [nums] : []
  }
  for (let i = 0; i < nums.length - 3; i++) {
    const first = nums[i]
    const target = 0 + first
    const obj = {}
    for (let j = i + 1; j < nums.length; j++) {
      const second = nums[j]
      const compliment = 0 - (first + second)
      if (compliment in obj) {
        const array = [first, second, compliment]
        const str = `${first}, ${second}`
        if (!seen[str]) {
          seen[str] = true
          seen[`${first}, ${compliment}`] = true
          seen[`${second}, ${first}`] = true
          seen[`${second}, ${compliment}`] = true
          seen[`${compliment}, ${first}`] = true
          seen[`${compliment}, ${second}`] = true
          ans.push(array)
        }
      } else {
        obj[second] = true
      }
    }
  }
  
  console.log(seen)
  
  return ans
};