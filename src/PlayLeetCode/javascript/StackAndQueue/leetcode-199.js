const Queue = require("./basicQueue");

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
 * @return {number[]}
 */
var rightSideView = function (root) {
  const queue = new Queue();
  const res = [];
  const result = [];
  if (root == null) {
    return [];
  }
  queue.enqueue({ node: root, level: 0 });
  while (!queue.isEmpty()) {
    const firstEle = queue.dequeue();
    if (!res[firstEle.level]) {
      res.push([firstEle.node.val]);
    } else {
      res[firstEle.level].push(firstEle.node.val);
    }
    if (firstEle.node.left) {
      queue.enqueue({ node: firstEle.node.left, level: firstEle.level + 1 });
    }
    if (firstEle.node.right) {
      queue.enqueue({ node: firstEle.node.right, level: firstEle.level + 1 });
    }
  }

  for (let i = 0; i < res.length; i++) {
    result.push(res[i].pop());
  }
  return result;
};
