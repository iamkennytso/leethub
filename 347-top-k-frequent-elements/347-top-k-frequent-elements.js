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
    let arr = Object.keys(obj)
    console.log(obj)
    console.log(arr)
    arr.sort((a,b) =>  obj[b] - obj[a] )
    console.log(arr)

    return arr.slice(0,k)
}