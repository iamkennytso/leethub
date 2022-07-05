/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
  if (!nums.length) return 0
  const obj = {}
  const visited = {}
  let cur = 1
  let streak = 0
  for (let num of nums) {
    obj[num] = true
  }
  const keys = Object.keys(obj).sort((a,b) => Number(a) - Number(b))
  console.log(keys)
  for (let key of keys) {
    if (obj[Number(key) + 1]) {
      cur++
    } else {
      streak = Math.max(streak, cur)
      cur = 1
    }
  }
  streak = Math.max(streak, cur)

  return streak
};