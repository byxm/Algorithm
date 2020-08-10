const { assert } = require("chai");
const MaxHeap = require("../../src/Heap/MaxHeap");

describe("test MaxHeap", () => {
  it("第一组堆元素测试", () => {
    const maxHeap = new MaxHeap.default();
    const arr = [2, 55, 23, 90, 0, 12, 55];
    for (let i = 0; i < arr.length; i++) {
      maxHeap.insert(arr[i]);
    }
    assert.deepEqual(maxHeap.heapData, [90, 55, 55, 2, 0, 12, 23]);
    const ret = maxHeap.extractMax();
    assert.equal(ret, 90);
    assert.deepEqual(maxHeap.heapData, [55, 23, 55, 2, 0, 12]);
  });
  it("第二组堆元素测试", () => {
    const maxHeap = new MaxHeap.default();
    const arr = [34, 12, 56, 78, 1, 987, 4, 10];
    for (let i = 0; i < arr.length; i++) {
      maxHeap.insert(arr[i]);
    }
    assert.deepEqual(maxHeap.heapData, [987, 56, 78, 12, 1, 34, 4, 10]);
    const ret = maxHeap.extractMax();
    assert.equal(ret, 987);
    assert.deepEqual(maxHeap.heapData, [78, 56, 34, 12, 1, 10, 4]);
  });
});
