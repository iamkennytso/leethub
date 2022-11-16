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
var isSubtree = function(root, subRoot) {
  const helper = (p, q) => {
    if (!p && !q) return true
    if (!p || !q || p.val !== q.val) return false
    return helper(p.left, q.left) && helper(p.right, q.right)
  }

  const queue = [root]

  while (queue.length) {
    const node = queue.shift()
    if (node.val === subRoot.val) {
     if (helper(node, subRoot)) return true
    }
    if (node.left) queue.push(node.left)
    if (node.right) queue.push(node.right)
  }

  return false
};