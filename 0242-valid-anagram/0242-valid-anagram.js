/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  const obj = {}
  for (let letter of s) {
    obj[letter] ? obj[letter]++ : obj[letter] = 1
  }
  for (let letter of t) {
    if (letter in obj) {
      obj[letter]--
    } else {
      return false
    }
  }
  return Object.values(obj).every(val => val === 0)
};