const StackBasic = require("./basicStack").default;

// 二叉树前序遍历使用栈来实现
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

// 此解法为教程里面的解法，经典教科书中的解法还需要多复习
var Command = function (command, node) {
  this.command = command;
  this.node = node;
};

var preorderTraversal = function (root) {
  const res = [];
  if(root == null) {
      return res;
  }
  const Stack = new StackBasic();
  Stack.push(new Command("go", root));
  while (!Stack.isEmpty()) {
    const topEle = Stack.pop();
    if (topEle.command === "print") {
      res.push(topEle.node.val);
    } else {
      if (topEle.node.right) {
        Stack.push(new Command("go", topEle.node.right));
      }
      Stack.push(new Command("print", topEle.node));// 通过这个二叉树的指令控制后改变顺序就能很好的调整前中后三种顺序的遍历方式
      if (topEle.node.left) {
        Stack.push(new Command("go", topEle.node.left));
      }
    }
  }
  return res;
};
