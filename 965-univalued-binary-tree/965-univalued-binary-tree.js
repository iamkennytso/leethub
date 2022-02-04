/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isUnivalTree = function(root) {
  let helper = (node, val) => {
    if (!node) return true
    if (node.val !== val) return false
    return helper(node.left, val) && helper(node.right, val)
  }
  return helper(root, root.val)
};