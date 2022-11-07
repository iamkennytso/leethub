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
 * @return {number}
 */
var diameterOfBinaryTree = function(root) {
  let ans = 0
  const helper = node => {
    if (!node) return 0
    const left = helper(node.left)
    const right = helper(node.right)
    ans = Math.max(ans, left + right)
    return 1 + Math.max(left, right)
  }
  helper(root)
  return ans
};


//   const dig = root => {
//     if (!root) {
//       return 0;
//     }
//     const left = dig(root.left);
//     const right = dig(root.right);
//     ans = Math.max(ans, left + right)
//     return 1 + Math.max(left, right)
//   }

//   dig(root);
//   return ans