const { assert } = require('chai');
const MaxHeap = require('../../src/Heap/MaxHeap');

describe('test MaxHeap', () => {
    it('should return correct max heap',() => {
        const maxHeap = new MaxHeap.default();
        const arr = [2,55,23,90,0,12];
        for(let i = 0; i < arr.length; i++) {
            maxHeap.insert(arr[i])
        }
        assert.deepEqual(maxHeap.heapData, [undefined,90, 55, 23, 2, 0, 12])
    })
})