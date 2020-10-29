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
var sumOfLeftLeaves = function (root) {
  if (root == null) {
    return 0;
  }
  const res = countSum(root, 0);
  return res;
};

var countSum = function (root, sum, isLeft) {
  if (root == null) {
    return sum;
  }
  if (root.left == null && root.right == null) {
    if (isLeft) {
      return sum + root.val;
    } else {
      return sum;
    }
  }
  const leftCount = countSum(root.left, sum, true);
  const rightCount = countSum(root.right, leftCount, false);
  return rightCount;
};
