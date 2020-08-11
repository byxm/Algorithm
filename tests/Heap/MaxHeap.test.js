const { assert } = require("chai");
const MaxHeap = require("../../src/Heap/MaxHeap");

describe("堆", () => {
  it("第一组创建堆，并取出堆顶元素（非越界情况）", () => {
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
  it("第二组创建堆，并取出堆顶元素（越界情况）", () => {
    const maxHeap = new MaxHeap.default();
    const arr = [45, 2, 12, 56, 0, 23, 1, 10];
    for (let i = 0; i < arr.length; i++) {
      maxHeap.insert(arr[i]);
    }
    assert.deepEqual(maxHeap.heapData, [56, 45, 23, 10, 0, 12, 1, 2]);
    const ret = maxHeap.extractMax();
    assert.equal(ret, 56);
    assert.deepEqual(maxHeap.heapData, [45, 10, 23, 2, 0, 12, 1]);
  });
  it("最大堆排序", () => {
    const maxHeap = new MaxHeap.default();
    const arr = [45, 2, 12, 56, 0, 23, 1, 10];
    for (let i = 0; i < arr.length; i++) {
      maxHeap.insert(arr[i]);
    }
    const sortArr = [];
    for (let i = 0; i < arr.length; i++) {
      sortArr.push(maxHeap.extractMax());
    }
    assert.deepEqual(sortArr, [56, 45, 23, 12, 10, 2, 1, 0]);
  });
});
