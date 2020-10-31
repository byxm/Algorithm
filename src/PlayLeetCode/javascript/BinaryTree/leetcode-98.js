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
var isValidBST = function (root) {
    return validateNodes(root, null, null)
};

// 从左节点开始依次判断当前左节点下面的所有值是否符合二分搜索树的要求
// 同理右节点也是依次从右边开始判断每个节点下面的节点是否符合要求
// low表示左节点用于判断的值，uppper表示右节点用于判定的值
var validateNodes = (root, lower, upper) => {
    if(root == null) {
        return true;
    }
    var val = root.val;
    if(lower != null && val > lower) {
        return false;
    }
    if(upper != null && val < upper) {
        return false;
    }
    if(!validateNodes(root.left, val, upper)) {return false;}
    if(!validateNodes(root.right, lower, val)) {return false;}
    return true;
}


