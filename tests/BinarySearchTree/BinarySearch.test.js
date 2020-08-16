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
});
