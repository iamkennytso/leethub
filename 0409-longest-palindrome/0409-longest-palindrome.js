/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
  let count = 0
  const counts = {}
  for (let char of s) {
    counts[char] = (counts[char] || 0) + 1
    if (counts[char] % 2 === 0) count += 2
  }
  return count === s.length ? count : count + 1
};