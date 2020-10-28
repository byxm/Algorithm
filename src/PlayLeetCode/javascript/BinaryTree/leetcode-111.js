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
var minDepth = function (root) {
  if (root == null) {
    return 0;
  }
  var leftDepath;
  var rightDepath;
  if (root.left == null) {
    leftDepath = rightDepath = minDepth(root.right);
  } else if (root.right == null) {
    leftDepath = rightDepath = minDepth(root.left);
  } else {
    leftDepath = minDepth(root.left);
    rightDepath = minDepth(root.right);
  }
  return Math.min(leftDepath, rightDepath) + 1;
};
