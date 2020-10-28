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
var isSameTree = function (p, q) {
  if (p == null && q == null) {
    return true;
  }
  if (p == null || q == null) {
    return false;
  }
  if (p.val !== q.val) {
    return false;
  }
  var leftVal = isSameTree(p.left, q.left);
  var rightVal = isSameTree(p.right, q.right);
  return leftVal && rightVal;
};
