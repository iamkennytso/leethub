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
 * @return {number[][]}
 */
var levelOrder = function(root) {
  let ans = []
  const helper = (node, level) => {
    if (!node) {
      return
    }
    if (ans[level]) {
      ans[level].push(node.val)
    } else {
      ans[level] = [node.val]
    }
    helper(node.left, level + 1)
    helper(node.right, level + 1)
  }
  helper(root, 0)
  return ans
};
