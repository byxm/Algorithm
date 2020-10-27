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
// 把问题拆成最小的单元来看，就是要求一个
var maxDepth = function (root) {
  if (root == null) {
    return 0;
  }
  var leftDepath = maxDepth(root.left);
  var rightDepath = maxDepth(root.right);
  return Math.max(leftDepath, rightDepath) + 1;
};
