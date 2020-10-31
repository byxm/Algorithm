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
 * @return {number[][]}
 */
// 这道题先遍历生成路径再对每个路径求和
var pathSum = function (root, sum) {
    if (root == null) {
      return [];
    }
    const paths = computePaths(root);
    return paths.filter((arr) => {
      const subSum = arr.reduce((pre, next) => {
        return pre + next;
      }, 0);
      if (subSum === sum) {
        return true;
      } else {
        false;
      }
    });
  };
  
  var computePaths = function (root) {
    if (root == null) {
      return [];
    }
  
    const res = [];
    if (root.left == null && root.right == null) {
      res.push([root.val]);
      return res;
    }
    const leftPaths = computePaths(root.left);
    for (let i = 0; i < leftPaths.length; i++) {
      res.push([root.val].concat(leftPaths[i]));
    }
    const rightPaths = computePaths(root.right);
    for (let j = 0; j < rightPaths.length; j++) {
      res.push([root.val].concat(rightPaths[j]));
    }
    return res;
  };