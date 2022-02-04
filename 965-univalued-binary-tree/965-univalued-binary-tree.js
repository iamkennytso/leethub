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
var isUnivalTree = function(root, val = root.val) {
  // let helper = (node, val) => {
    if (!root) return true
    if (root.val !== val) return false
    return isUnivalTree(root.left, val) && isUnivalTree(root.right, val)
  // }
  // return isUnivalTree(root, root.val)
};