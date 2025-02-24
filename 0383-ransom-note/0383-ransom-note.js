/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
  const magMap = magazine.split('').reduce((accu, char) => {
    accu[char] = (accu[char] || 0) + 1
    return accu
  }, {})
  for (let char of ransomNote) {
    if (!magMap[char]) return false
    magMap[char]--
  }
  return true
};