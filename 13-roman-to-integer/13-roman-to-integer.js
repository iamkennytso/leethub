/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = (s)  => {
  const obj = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
    IV: 4,
    IX: 9,
    XL: 40,
    XC: 90,
    CD: 400,
    CM: 900
  }

  let sum = 0

  for (let i = 0; i < s.length; i++) {
    const cur = s[i]
    const next = s[i+1]
    const curAndNext = `${cur}${next}`

    if (curAndNext in obj) {
      sum += obj[curAndNext]
      i++
    } else {
      sum += obj[cur]
    }

  }

  return sum
};