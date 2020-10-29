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
 * @param {number} sum
 * @return {boolean}
 */
// 这道题的问题拆解思路就是从根节点root的值开始，可以看成是sum减去根节点的值之后以当前节点为根节点是否具有
// sum - root.val的值得叶子节点
var hasPathSum = function (root, sum) {
  if (root == null) {
    return false;
  }
  if (root.left == null && root.right == null) {
    if (root.val === sum) {
      return true;
    } else {
      return false;
    }
  }
  const nextSum = sum - root.val;

  const leftHasResult = hasPathSum(root.left, nextSum);
  const rightHasResult = hasPathSum(root.right, nextSum);
  return leftHasResult || rightHasResult;
};
