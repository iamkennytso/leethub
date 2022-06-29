/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
  const rows = {}
  const cols = {}
  const secs = {}
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      const val = board[i][j]
      if (val !== '.') {
        const sec = `${Math.floor(i/3)} ${Math.floor(j/3)}`
        if (secs[`${sec},${val}`] || cols[`${j},${val}`] || rows[`${i},${val}`]) {
          return false
        }
        
        rows[`${i},${val}`] = true
        cols[`${j},${val}`] = true
        secs[`${sec},${val}`] = true
      }
    }
  }
  
  return true
};

// /**
//  * @param {character[][]} board
//  * @return {boolean}
//  */
// var isValidSudoku = function(board) {
//   const rows = {}
//   const cols = {}
//   const secs = {}
//   for (let i = 0; i < board.length; i++) {
//     for (let j = 0; j < board[0].length; j++) {
//       const val = board[i][j]
//       if (val !== '.') {
//         const sec = `${Math.floor(i/3)}${Math.floor(j/3)}`
//         if (rows[`${i}${val}`] || cols[`${j}${val}`] || secs[`${sec}${val}`]) {
//           return false
//         }
//         rows[`${i}${val}`] = true
//         cols[`${j}${val}`]  = true
//         secs[`${sec}${val}`] = true
//       }
//     }
//   }

//   return true
// };