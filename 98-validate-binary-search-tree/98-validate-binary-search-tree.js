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
    console.log(root.val, lowerLimit, upperLimit)
  if (lowerLimit !== null && root.val <= lowerLimit) {
    console.log('hit')
    return false
  }
  if (upperLimit !== null && root.val >= upperLimit) {
    console.log('qwer')
    return false
  }

  return isValidBST(root.left, lowerLimit, root.val) && isValidBST(root.right, root.val, upperLimit)
};


// [0,null,-1] null null
// null null 0
// [-1] 0 null
// null 0 -1
// null -1 null