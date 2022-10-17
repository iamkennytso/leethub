/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, newColor, targetColor = image[sr][sc], visited = {}) {
  const key = sr + ',' + sc
  if(!image[sr] || image[sr][sc] === undefined || image[sr][sc] !== targetColor || visited[key]) {
    return image
  }
  image[sr][sc] = newColor
  visited[key] = true
  floodFill(image, sr+1, sc, newColor, targetColor,visited)
  floodFill(image, sr-1, sc, newColor, targetColor,visited)
  floodFill(image, sr, sc+1, newColor, targetColor,visited)
  floodFill(image, sr, sc-1, newColor, targetColor,visited)
  return image
};