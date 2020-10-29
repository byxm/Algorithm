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
 * @return {string[]}
 */
// 求二叉树的路径，和自己之前做的求对象路径那个很类似
var binaryTreePaths = function (root) {
  if (root == null) {
    return [];
  }
  const res = [];
  if (root.left == null && root.right == null) {
    res.push(root.val.toString());
    return res;
  }

  const leftTreePaths = binaryTreePaths(root.left);
  for (let i = 0; i < leftTreePaths.length; i++) {
    res.push(`${root.val}->${leftTreePaths[i]}`);
  }
  const rightTreePaths = binaryTreePaths(root.right);
  for (let j = 0; j < rightTreePaths.length; j++) {
    res.push(`${root.val}->${rightTreePaths[j]}`);
  }
  return res;
};
