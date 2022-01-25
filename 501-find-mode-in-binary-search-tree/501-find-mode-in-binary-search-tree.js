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
 * @return {number[]}
 */
var findMode = function(root) {
  const obj = {}

  const dig = node => {
    if (!node) return
    obj[node.val] ? obj[node.val]++ : obj[node.val] = 1
    dig(node.left)
    dig(node.right)
  }
  
  dig(root)
  
  // could be optimized so we don't loop over twice
  const largest = Math.max(...Object.values(obj))
  return Object.keys(obj).filter(key => obj[key] === largest)
};