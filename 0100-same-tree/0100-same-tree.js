/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
  const pArr = []
  const qArr = []
  const helper = (node, arr) => {
    arr.push(node ? node.val : null)
    if (!node) return
    if (node.left !== null || node.right !== null) {
      helper(node.left, arr)
      helper(node.right, arr)
    }
  }
  helper(p, pArr)
  helper(q, qArr)
  if (pArr.length !== qArr.length) {
    return false
  }
  for (let i = 0; i < pArr.length; i++) {
    if (pArr[i] !== qArr[i]) {
      console.log(pArr[i], qArr[i])
      return false
    }
  }
  return true
};