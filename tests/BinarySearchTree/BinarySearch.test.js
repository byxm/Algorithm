const { assert } = require("chai");
const BinarySearch = require("../../src/Binary-Search/binarySearch");

describe("二分查找法", () => {
  it("基本二分查找法", () => {
    const binarySearch = new BinarySearch.default();
    const arr = [1, 2, 3, 4, 5, 6, 7, 8];
    assert.equal(binarySearch.search(arr, 4), 3);
    assert.equal(binarySearch.search(arr, 8), 7);
    assert.equal(binarySearch.search(arr, 3), 2);
    assert.equal(binarySearch.search(arr, 6), 5);
  });
  it("递归二分查找法", () => {
    const binarySearch = new BinarySearch.default();
    const arr = [10, 11, 12, 13, 14, 15, 16];
    assert.equal(binarySearch.searchRecursive(arr, 12, 0, arr.length - 1), 2);
    assert.equal(binarySearch.searchRecursive(arr, 10, 0, arr.length - 1), 0);
    assert.equal(binarySearch.searchRecursive(arr, 13, 0, arr.length - 1), 3);
    assert.equal(binarySearch.searchRecursive(arr, 15, 0, arr.length - 1), 5);
  });
});
