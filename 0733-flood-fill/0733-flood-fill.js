/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, color) {
  const visited = new Set()
  const ogColor = image[sr][sc]
  const traverse = (x, y) => {
    const str = `${x},${y}`
    if (!image[x] || image[x][y] === undefined || image[x][y] !== ogColor || visited.has(str)) return
    visited.add(str)
    image[x][y] = color
    traverse(x+1, y)
    traverse(x-1, y)
    traverse(x, y+1)
    traverse(x, y-1)
  }

  traverse(sr, sc)
  return image
};