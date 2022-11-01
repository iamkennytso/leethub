/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  const arr = []
  const length = Math.max(a.length, b.length)
  console.log(length)
  let carry = false
  for (let i = 0; i < length; i++) {
    const sum = Number(a[a.length - 1 - i] || 0) + Number(b[b.length - 1 - i] || 0)
    console.log(i, sum)
    if (carry) {
      if (sum === 2) {
        arr.push(1)
        carry = true
      } else if (sum === 1) {
        arr.push(0)
        carry = true
      } else {
        arr.push(1)
        carry = false
      }
    } else {
      if (sum === 2) {
        arr.push(0)
        carry = true
      } else {
        arr.push(sum)
      }
    }
  }
  if (carry) {
    arr.push(1)
  }
  return arr.reverse().join('')
};