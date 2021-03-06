const { assert } = require("chai");
const BinarySearch = require("../../src/Binary-Search/Binary-Search-method/binarySearch");
const BST = require("../../src/Binary-Search/BST/bst");

describe("二分查找法", () => {
  it("基本二分查找法", () => {
    const binarySearch = new BinarySearch.default();
    const arr = [1, 2, 3, 4, 5, 6, 7, 8];
    assert.equal(binarySearch.search(arr, 4), 3);
    assert.equal(binarySearch.search(arr, 8), 7);
    assert.equal(binarySearch.search(arr, 3), 2);
    assert.equal(binarySearch.search(arr, 6), 5);
    assert.equal(binarySearch.search(arr, 99), -1);
  });
  it("递归二分查找法", () => {
    const binarySearch = new BinarySearch.default();
    const arr = [10, 11, 12, 13, 14, 15, 16];
    assert.equal(binarySearch.searchRecursive(arr, 12, 0, arr.length - 1), 2);
    assert.equal(binarySearch.searchRecursive(arr, 10, 0, arr.length - 1), 0);
    assert.equal(binarySearch.searchRecursive(arr, 13, 0, arr.length - 1), 3);
    assert.equal(binarySearch.searchRecursive(arr, 15, 0, arr.length - 1), 5);
    assert.equal(binarySearch.searchRecursive(arr, 88, 0, arr.length - 1), -1);
  });
});

describe("二分搜索树", () => {
  it("二分搜索树递归创建", () => {
    const bst = new BST.default();
    const arr = [34, 23, 89, 10, 5];
    for (const bstEle of arr) {
      bst.insert(bstEle, bstEle);
    }
    assert.deepEqual(bst.root, {
      key: 34,
      value: 34,
      left: {
        key: 23,
        value: 23,
        left: {
          key: 10,
          value: 10,
          left: { key: 5, value: 5, left: null, right: null },
          right: null,
        },
        right: null,
      },
      right: { key: 89, value: 89, left: null, right: null },
    });
  });

  it("二分搜索树循环创建", () => {
    const bst = new BST.default();
    const arr = [34, 23, 89, 10, 5];
    for (const bstEle of arr) {
      bst.insertByLoop(bstEle, bstEle);
    }
    assert.deepEqual(bst.root, {
      key: 34,
      value: 34,
      left: {
        key: 23,
        value: 23,
        left: {
          key: 10,
          value: 10,
          left: { key: 5, value: 5, left: null, right: null },
          right: null,
        },
        right: null,
      },
      right: { key: 89, value: 89, left: null, right: null },
    });
  });
  it("二分搜索树深度优先遍历", () => {
    const bst = new BST.default();
    const arr = [34, 23, 89, 10, 5];
    for (const bstEle of arr) {
      bst.insert(bstEle, bstEle);
    }
    bst.preOrder();
    assert.deepEqual(bst.loopElement, [34, 23, 10, 5, 89]);
    bst.inOrder();
    assert.deepEqual(bst.loopElement, [5, 10, 23, 34, 89]);
    bst.postOrder();
    assert.deepEqual(bst.loopElement, [5, 10, 23, 89, 34]);
  });

  it("二分搜索树广度优先遍历", () => {
    const bst = new BST.default();
    const arr = [16, 32, 28, 11, 19, 40, 24];
    for (const bstEle of arr) {
      bst.insert(bstEle, bstEle);
    }
    bst.levelOrder();
    assert.deepEqual(bst.loopElement, [16, 11, 32, 28, 40, 19, 24]);
  });

  it("二分搜索树获取最大值", () => {
    const bst = new BST.default();
    const arr = [16, 32, 28, 11, 19, 40, 24];
    for (const bstEle of arr) {
      bst.insert(bstEle, bstEle);
    }
    assert.equal(bst.getMinimum(), 11);
    assert.equal(bst.getMaxmun(), 40);
  });

  it("删除二分搜素树中的最小节点", () => {
    const bst = new BST.default();
    const arr = [28, 18, 32, 16, 26, 35, 29, 10,11];
    for (const bstEle of arr) {
      bst.insert(bstEle, bstEle);
    }
    bst.deleteMinmum();
    // bst.deleteMinmum();
    // console.log("logggggg", JSON.stringify(bst.root));
    // assert.equal(deepEqual)
  });
  it("删除二分搜素树中的最大节点", () => {
    const bst = new BST.default();
    const arr = [28, 18, 32, 16, 26, 35, 29, 10,11];
    for (const bstEle of arr) {
      bst.insert(bstEle, bstEle);
    }
    bst.deleteMaxmum();
    // bst.deleteMinmum();
    // assert.equal(deepEqual)
  });
  it('删除二分搜索树中的任意节点',() => {
    const bst = new BST.default();
    const arr = [28,24,32,22,26,36,31,30,33,38]
    for (const bstEle of arr) {
      bst.insert(bstEle, bstEle);
    } 
    const node = bst.deleteNode(24);
    // console.log('nodeDelete',node);
  })
});
