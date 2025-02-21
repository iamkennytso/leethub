/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const map = {
    "(": ")",
    "{": "}",
    "[": "]"
  }
  const stack = []
  const openers = Object.keys(map)
  for (let char of s) {
    if (openers.includes(char)) {
      stack.push(char)
    } else {
      const opener = stack.pop()
      if (map[opener] !== char) return false
    }
  }
  return stack.length === 0
};