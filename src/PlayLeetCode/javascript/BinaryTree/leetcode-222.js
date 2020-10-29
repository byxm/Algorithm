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
var countNodes = function (root) {
  let count = 0;
  const res = excuteNodes(root, count);
  return res;
};

var excuteNodes = function (root, count) {
  if (root == null) {
    return count;
  }
  count++;
  const leftCount = excuteNodes(root.left, count);
  const rightCount = excuteNodes(root.right, leftCount);
  return Math.max(leftCount, rightCount);
};
