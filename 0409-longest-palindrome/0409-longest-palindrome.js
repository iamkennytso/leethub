/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
  let count = 0
  const countsMap = {}
  for (let char of s) {
    countsMap[char] = (countsMap[char] || 0) + 1
    if (countsMap[char] % 2 === 0) count += 2
  }
  return count === s.length ? count : count + 1
};