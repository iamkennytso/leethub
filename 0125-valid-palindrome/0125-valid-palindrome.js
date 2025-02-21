/**
 * @param {string} s
 * @return {boolean}
 */
const lettersSet = new Set('qwertyuiopasdfghjklzxcvbnm1234567890'.split(''))
var isPalindrome = function(s) {
  const cleaned = s.toLowerCase().split('').filter(char => lettersSet.has(char)).join('')
  let left = 0
  let right = cleaned.length - 1
  while (left < right) {
    if (cleaned[left] !== cleaned[right]) {
      return false
    }
    left++
    right--
  }
  return true
};