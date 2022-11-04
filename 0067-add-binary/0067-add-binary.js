/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  let ans = ''
  const length = Math.max(a.length, b.length)
  let carry = false
  for (let i = 0; i < length; i++) {
    const sum = Number(a[a.length - 1 - i] || 0) + Number(b[b.length - 1 - i] || 0)

    if (carry) {
      if (sum === 2) {
        ans = 1 + ans
      } else if (sum === 1) {
        ans = 0 + ans
      } else {
        carry = false
        ans = 1 + ans
      }
    } else {
      if (sum === 2) {
        ans = 0 + ans
        carry = true
      } else {
        ans = sum + ans
      }
    }
  }
  if (carry) {
    ans = 1 + ans
  }
  return ans
};