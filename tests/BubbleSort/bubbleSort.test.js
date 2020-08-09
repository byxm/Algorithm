const { assert } = require('chai');
const BubbleSort = require('../../src/Sort-Basic/Bubble-Sort/index.js');

describe('test bubbleSort',() => {
    it('should return correct sort array',() => {
        const arr = [2,3,1,4,0];
        console.log('arrResult', BubbleSort.default.sort(arr));
        assert.deepEqual(BubbleSort.default.sort(arr), [0,1,2,3,4])
    })
})