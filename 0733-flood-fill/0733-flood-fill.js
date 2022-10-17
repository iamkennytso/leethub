/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, color, curColor = image[sr][sc], visited = {}) {
  const key = sr + ',' + sc
  if (!image[sr] || image[sr][sc] !== curColor || visited[key]) {
    return image
  }
  visited[key] = true
  image[sr][sc] = color
  floodFill(image, sr+1, sc, color, curColor, visited)
  floodFill(image, sr-1, sc, color, curColor, visited)
  floodFill(image, sr, sc+1, color, curColor, visited)
  floodFill(image, sr, sc-1, color, curColor, visited)
  return image
};