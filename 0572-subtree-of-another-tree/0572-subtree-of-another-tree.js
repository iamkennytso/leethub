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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */

const helper = (p, q) => {
  if (!p && !q) return true
  if (!p || !q || p.val !== q.val) return false
  return helper(p.left, q.left) && helper(p.right, q.right)
}

var isSubtree = function(root, subRoot) {
  if (helper(root, subRoot)) return true
  if (!root) return false
  return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot)
};