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
var isBalanced = function(root) {
  const helper = node => {
    if (!node) return 0
    const left = 1 + helper(node.left)
    const right = 1 + helper(node.right)
    if (Math.abs(left - right) > 1 || left === Infinity || right === Infinity) {
      return Infinity
    }
    return Math.max(left, right)
  }
  return helper(root) === Infinity ? false : true
};


// var isBalanced = function(root) {
    
//     let dfs = function(node) {
//         if (!node) return 0;
//         let left = 1 + dfs(node.left);
//         let right = 1 + dfs(node.right);
//         if (Math.abs(left - right) > 1) return Infinity;
//         return Math.max(left, right);
//     }
    
//     return dfs(root)==Infinity?false:true;
// };