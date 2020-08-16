"use strict";
exports.__esModule = true;
/**
 * 二分搜索树节点类
 */
var TreeNode = /** @class */ (function () {
    function TreeNode(key, value) {
        this.key = key;
        this.value = value;
        this.left = this.right = null;
    }
    return TreeNode;
}());
/**
 * 二分搜索树：每个根节点具有左右两个子节点的树形结构，根节点总是大于左子树，小于右子树
 */
var BST = /** @class */ (function () {
    function BST() {
        this.root = null;
        this.nodeCount = 0;
    }
    BST.prototype.insert = function (key, value) {
        this.root = this.insertElement(this.root, key, value);
    };
    BST.prototype.insertByLoop = function (key, value) {
        this.root = this.insertElementByLoop(this.root, key, value);
    };
    /**
     * 二分搜索树递归插入元素：按照元素插入的键值对左右子树进行比较，依次向下递归，当遇到空节点时就插入元素，
     * 当键值相等时则对元素进行修改
     */
    BST.prototype.insertElement = function (node, key, value) {
        if (node == null) {
            this.nodeCount++;
            return new TreeNode(key, value);
        }
        if (node.key === key) {
            node.value = value;
        }
        if (node.key > key) {
            node.left = this.insertElement(node.left, key, value);
        }
        else if (node.key < key) {
            node.right = this.insertElement(node.right, key, value);
        }
        return node;
    };
    /**
     * 插入元素非递归实现：利用对象引用的特点，使用通过循环先找到元素要插入的节点位置，在对这个位置进行插入操作，由于
     * 引用的原因它会改变原来节点的值
     */
    BST.prototype.insertElementByLoop = function (node, key, value) {
        if (node == null) {
            this.nodeCount++;
            return new TreeNode(key, value);
        }
        var parentNode = node; // 最终在节点位置修改的引用
        var currentNode = node; // 用于查找修改位置的引用
        while (currentNode != null) {
            if (currentNode.key === key) {
                parentNode = currentNode;
                break;
            }
            parentNode = currentNode;
            if (node.key > key) {
                currentNode = currentNode.left;
            }
            else {
                currentNode = currentNode.right;
            }
        }
        if (parentNode.key === key) {
            parentNode.value = value;
        }
        else if (parentNode.key > key) {
            parentNode.left = new TreeNode(key, value);
        }
        else if (parentNode.key < key) {
            parentNode.right = new TreeNode(key, value);
        }
        return node;
    };
    BST.prototype.contains = function (key) {
        return this.containsKey(this.root, key);
    };
    /**
     * 判断二分搜索树中是否存在这个key
     */
    BST.prototype.containsKey = function (node, key) {
        if (node.key === key) {
            return true;
        }
        if (node == null) {
            return false;
        }
        if (node.key > key) {
            return this.containsKey(node.left, key);
        }
        else {
            return this.containsKey(node.right, key);
        }
    };
    BST.prototype.search = function (key) {
        return this.searchKey(this.root, key);
    };
    BST.prototype.searchKey = function (node, key) {
        if (node == null) {
            return null;
        }
        if (node.key === key) {
            return node.value;
        }
        if (node.key > key) {
            return this.searchKey(node.left, key);
        }
        else {
            return this.searchKey(node.right, key);
        }
    };
    BST.prototype.isEmpty = function () {
        return this.nodeCount === 0;
    };
    BST.prototype.getNodeSize = function () {
        return this.nodeCount;
    };
    return BST;
}());
exports["default"] = BST;
