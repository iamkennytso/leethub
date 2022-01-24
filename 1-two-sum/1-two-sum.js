/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {
  const obj = {}

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i]
    if (num in obj) {
      return [obj[num], i]
    } else {
      const comp = target - num
      obj[comp] = i
    }
  }
};