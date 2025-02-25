/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function(mat) {
  const newGrid = mat.map(_ => [])
  const done = new Set()
  const queue = []

  const isInRange = (x, y) => {
    const str = `${x},${y}`
    const isGood =  mat[x] && mat[x][y] !== undefined && !done.has(str)
    if (isGood) {
      done.add(str)
      return true
    }
    return false
  }

  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[0].length; j++) {
      if (mat[i][j] === 0) {
        done.add(`${i},${j}`)
        queue.push([i, j, 0])
      }
    }
  }

  while (queue.length) {
    const [x, y, val] = queue.shift()
    const str = `${x},${y}`
    done.add(str)
    newGrid[x][y] = val
    if (isInRange(x + 1, y)) queue.push([x + 1, y, val + 1])
    if (isInRange(x - 1, y)) queue.push([x - 1, y, val + 1])
    if (isInRange(x, y + 1)) queue.push([x, y + 1, val + 1])
    if (isInRange(x, y - 1)) queue.push([x, y - 1, val + 1])
  }

  return newGrid
};