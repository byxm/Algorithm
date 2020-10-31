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
 * @return {number}
 */
// 这道题的思路是先分别求出以一个节点为根节点的左右子树里面符合条件的和，然后在找除了这个根节点的左右子树里面符合条件的值的和
var pathSum = function (root, sum) {
  if (root == null) {
    return 0;
  }
  let res = findCurrentNodeResult(root, sum);
  res += pathSum(root.left, sum);
  res += pathSum(root.right, sum);
  return res;
};

var findCurrentNodeResult = (root, sum) => {
  if (root == null) {
    return 0;
  }
  let res = 0;
  // 这里因为题目中节点值会存在负数，所以当找到相等的值以后不能马上返回而是应该继续向下找
  if (root.val === sum) {
    res += 1;
  }
  res += findCurrentNodeResult(root.left, sum - root.val);
  res += findCurrentNodeResult(root.right, sum - root.val);
  return res;
};
