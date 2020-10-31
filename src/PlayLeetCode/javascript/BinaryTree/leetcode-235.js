/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
// 当p,q节点分别在左右两边的时候大于p < node < q的node节点就是所求的解。当p,q都在左边的时候往左边递归查找
// 当p,q都在右边的时候往右边查找
var lowestCommonAncestor = function (root, p, q) {
  if (root == null) {
    return null;
  }
  if (root.val > q && root.val > p) {
    return lowestCommonAncestor(root.left, p, q);
  }
  if (root.val < q && root.val < p) {
   return lowestCommonAncestor(root.right, p, q);
  }
  return root; // 当前面的两种情况都在左边和都在右边的情况遍历完毕后，剩下的就是一个在做一个在右，并且，p,q都可能为父节点的情况
};
