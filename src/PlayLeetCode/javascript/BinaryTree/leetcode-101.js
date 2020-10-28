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
 * @return {boolean}
 */
var isSymmetric = function(root) {
    return computeSymmetric(root, root) 
 };
 
 
 var computeSymmetric = function(rootL, rootR) {
     if(rootL == null && rootR == null) {
         return true;
     }
     if(rootL == null || rootR == null) {
         return false
     }
     if(rootL.val != rootR.val) {
         return false;
     }
     const sysmL = computeSymmetric(rootL.left, rootR.right);
     const sysmR = computeSymmetric(rootL.right, rootR.left);
     return sysmL && sysmR
 }