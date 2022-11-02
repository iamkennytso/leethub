/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
  const sStack = []
  const tStack = []
  for (let char of s) {
    char === '#' ? sStack.pop() : sStack.push(char)
  }
  for (let char of t) {
    char === '#' ? tStack.pop() : tStack.push(char)
  }
  console.log(sStack)
  console.log(tStack)
  return sStack.join('') === tStack.join('')
};