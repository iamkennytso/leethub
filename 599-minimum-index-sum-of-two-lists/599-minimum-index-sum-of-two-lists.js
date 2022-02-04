/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function(list1, list2) {
  const obj = {}
  let ans = []
  let sum = Infinity

  for (let i = 0; i < list1.length; i++) {
    obj[list1[i]] = i
  }
  for (let i = 0; i < list2.length; i++) {
    const item = list2[i]
    if (item in obj) {
      const curSum = i + obj[item]
      if (curSum < sum) {
        ans = [item]
        sum = i + obj[item]
      } else if (curSum === sum) {
        ans.push(item)
      }
    }
  }
  return ans
};