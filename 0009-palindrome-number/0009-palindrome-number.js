/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  const str = JSON.stringify(x)
  let left =  0
  let right = str.length - 1
  while (left < right) {
    if (str[left] !== str[right]) {
      return false
    }
    left++
    right--
  }
  return true
};