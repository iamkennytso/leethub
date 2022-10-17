/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  const clean = '0123456789qwertyuiopasdfghjklzxcvbnm'
  const sanitized = s.toLowerCase().split('').filter(letter => clean.indexOf(letter) !== -1)
  return sanitized.join('') === sanitized.reverse().join('')
};