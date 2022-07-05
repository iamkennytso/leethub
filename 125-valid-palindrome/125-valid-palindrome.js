/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  const sanitized = s.toLowerCase().replace(/[^a-z0-9]/g, '')
  let left = 0
  let right = sanitized.length - 1
  while (left < right) {
    if (sanitized[left] !== sanitized[right]) {
      return false
    }
    left++
    right--
  }
  return true
    
};