/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  const charMap = {}
  for (let char of s) {
    charMap[char] = (charMap[char] || 0) + 1
  }
  for (let char of t) {
    if (!(char in charMap)) return false
    charMap[char]--
  }
  return Object.values(charMap).every(count => count === 0)
};