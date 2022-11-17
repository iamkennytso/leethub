/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
  if (!nums || !nums.length) return null
  const midIdx = Math.floor(nums.length / 2)
  const node = new TreeNode(nums[midIdx])
  node.left = sortedArrayToBST(nums.slice(0, midIdx))
  node.right = sortedArrayToBST(nums.slice(midIdx + 1))
  return node
};