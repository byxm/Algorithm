"use strict";
exports.__esModule = true;
var queue_1 = require("./queue");
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
        this.loopElement = [];
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
    /**
     * 深度优先遍历：从左子树到右子树依次遍历二分搜索树每个节点的前中后三个位置
     * 前序遍历：当遍历到前位置的节点，对接点进行操作
     * 中序遍历：当遍历到中位置的节点，对接点进行操作
     * 后续遍历：当遍历到后位置的节点，对接点进行操作
     */
    BST.prototype.preOrder = function () {
        this.loopElement = [];
        this.preOrderRecursion(this.root);
    };
    BST.prototype.preOrderRecursion = function (node) {
        if (node != null) {
            this.loopElement.push(node.key);
            this.preOrderRecursion(node.left);
            this.preOrderRecursion(node.right);
        }
    };
    BST.prototype.inOrder = function () {
        this.loopElement = [];
        this.inOrderRecursion(this.root);
    };
    BST.prototype.inOrderRecursion = function (node) {
        if (node != null) {
            this.inOrderRecursion(node.left);
            this.loopElement.push(node.key);
            this.inOrderRecursion(node.right);
        }
    };
    BST.prototype.postOrder = function () {
        this.loopElement = [];
        this.postOrderRecursion(this.root);
    };
    BST.prototype.postOrderRecursion = function (node) {
        if (node != null) {
            this.postOrderRecursion(node.left);
            this.postOrderRecursion(node.right);
            this.loopElement.push(node.key);
        }
    };
    /**
     * 广度优先遍历（层序遍历）：对二叉树进行逐层遍历，实现方式借助队列
     * 根元素先入队，根元素出队时左右子树入队，当接下来的根元素出队时相应的左右子树入队
     *
     */
    BST.prototype.levelOrder = function () {
        this.loopElement = [];
        this.levelOrderOperate(this.root);
    };
    BST.prototype.levelOrderOperate = function (node) {
        var queue = new queue_1["default"]();
        queue.enqueue(node);
        while (!queue.isEmpty()) {
            var front = queue.dequeue();
            this.loopElement.push(front.key);
            if (front && front.left != null) {
                queue.enqueue(front.left);
            }
            if (front && front.right != null) {
                queue.enqueue(front.right);
            }
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
