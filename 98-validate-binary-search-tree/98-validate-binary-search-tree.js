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

//    3
//  1   5
// 0 2 4 6
var isValidBST = function(root, lowerLimit = null, upperLimit = null) {
  if (!root) return true
  if (lowerLimit !== null && root.val <= lowerLimit) {
    return false
  }
  if (upperLimit !== null && root.val >= upperLimit) {
    return false
  }

  return isValidBST(root.left, lowerLimit, root.val) && isValidBST(root.right, root.val, upperLimit)
};
