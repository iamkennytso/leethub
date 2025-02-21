/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const complimentMap = {}
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i] // 2
    if (num in complimentMap) {
      return [i, complimentMap[num]]
    } else {
      const comp = target - num  // 7
      complimentMap[comp] = i
    }
  }
};