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
var sumNumbers = function (root) {
    if (root == null) {
      return 0;
    }
    const res = computePahts(root);
    return res.reduce((prev, next) => prev + parseInt(next), 0);
  };
  
  var computePahts = function (root) {
    if (root == null) {
      return [];
    }
    const res = [];
    if (root.left == null && root.right == null) {
      res.push(root.val);
      return res;
    }
    const leftPaths = computePahts(root.left);
    for (let i = 0; i < leftPaths.length; i++) {
      res.push(`${root.val}${leftPaths[i]}`);
    }
    const rightPaths = computePahts(root.right);
    for (let j = 0; j < rightPaths.length; j++) {
      res.push(`${root.val}${rightPaths[j]}`);
    }
  
    return res;
  };