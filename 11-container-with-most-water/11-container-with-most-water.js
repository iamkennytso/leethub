/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  let max = -Infinity
  let left = 0
  let right = height.length - 1
  while (left < right) {
    const leftHeight = height[left]
    const rightHeight = height[right]
    const attempt = Math.min(leftHeight, rightHeight) * (right - left)
    max = Math.max(max, attempt)
    if (height[left] < height[right]) {
      left++
    } else {
      right--
    }
  }
  return max
};