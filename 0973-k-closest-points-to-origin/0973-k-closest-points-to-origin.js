/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function(points, k) {
  return points.map(point => {
    const [x, y] = point
    return [point, Math.sqrt((x*x) + (y * y))]
  }).sort((a, b) => a[1] - b[1]).slice(0, k).map(tuple => tuple[0])
};