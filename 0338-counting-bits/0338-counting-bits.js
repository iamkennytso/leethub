/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
  const ans = []
  for (let i = 0; i < n + 1; i++) {
    ans.push(i.toString(2).split('').filter(num => num == 1).length)
  }
  return ans
};