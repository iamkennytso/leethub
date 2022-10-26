/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
  const obj = {}
  let count = 0
  for (let letter of s) {
    obj[letter] = (obj[letter] || 0) + 1
    if (obj[letter] % 2 === 0) {
      count += 2
    }
  }

  return count === s.length ? count : count + 1
};