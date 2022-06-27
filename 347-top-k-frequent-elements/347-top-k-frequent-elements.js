/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const obj = {}
    for (let num of nums) {
      obj[num] ? obj[num]++ : obj[num] = 1
    }
    return Object.keys(obj).sort((a,b) =>  obj[b] - obj[a]).slice(0,k)
}