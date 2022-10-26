/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
  const obj = {}
  for (let letter of s) {
    obj[letter] = (obj[letter] || 0) + 1
  }
  const vals = Object.values(obj)
  let hasOdd = 0
  let count = 0
  for (let val of vals) {
    if (val % 2 === 0) {
      count += val
    } else {
      count += val - 1
      hasOdd = 1
    }
  }

  count += hasOdd
  return count
};