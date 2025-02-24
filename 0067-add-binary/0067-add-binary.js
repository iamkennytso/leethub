/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  let hold = 0, ans = []
  a = String(a).split('').map(num => Number(num))
  b = String(b).split('').map(num => Number(num))
  while (a.length || b.length || hold) {
    const sum = hold + (a.pop() || 0) + (b.pop() || 0)
    if (sum === 0) {
      ans.push(0)
      hold = 0
    } else if (sum === 1) {
      ans.push(1)
      hold = 0
    } else if (sum === 2) {
      ans.push(0)
      hold = 1
    } else if (sum === 3) {
      ans.push(1)
      hold = 1
    }
  }
  return ans.reverse().join('')
};