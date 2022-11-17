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

const helper = (q, p) => {
  if (!q && !p) return true
  if (!q || !p) return false
  return q.val === p.val && helper(q.left, p.left) && helper(q.right, p.right)
}

var isSubtree = function(root, subRoot) {
  const dig = node => {
    if (!node) return false
    if (node.val === subRoot.val) {
      if(helper(node, subRoot)){
        return true
      }
    }
    return dig(node.left) || dig(node.right)
  }
  return dig(root)
};