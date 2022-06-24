/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  const obj = {}
  for (let word of strs) {
    const key = word.split('').sort().join()
    obj[key] ? obj[key].push(word) : obj[key] = [word]
  }
  return Object.values(obj)
};