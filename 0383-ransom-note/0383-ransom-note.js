/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
  const dictionary = {}
  for (let letter of magazine) {
    dictionary[letter] ? dictionary[letter]++ : dictionary[letter] = 1
  }
  for (let letter of ransomNote) {
    if (!dictionary[letter]) {
      return false
    } else {
      dictionary[letter]--
    }
  }
  return true
};