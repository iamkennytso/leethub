/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const obj = {
    '}' :'{',
    ')': '(',
    ']': '[' 
  }
  const stack = []
  for (let char of s) {
    if (char in obj) {
      const comp = stack.pop()
      if (comp !== obj[char]) {
        return false
      }
    } else {
      stack.push(char)
    }
  }
  return stack.length === 0
};