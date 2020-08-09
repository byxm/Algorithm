"use strict";
exports.__esModule = true;
/**
 * @description 构造最大堆，还是使用数组实现满二叉树。满二叉树起始索引从1开始，
 * 左子树节点索引为根节点索引的2倍，右子树节点为根节点索引的2倍加1
 */
var MaxHeap = /** @class */ (function () {
    function MaxHeap() {
        this.heapData = new Array();
        this.size = 0;
    }
    MaxHeap.prototype.insert = function (el) {
        this.heapData[this.size + 1] = el;
        this.size++;
        this.shiftUp(this.size);
    };
    /**
     * 使用添加的元素和他的父节点的元素判断如果比他大就和父节点元素交换位置,注意JS的除法是带小数的
     */
    MaxHeap.prototype.shiftUp = function (newElementIndex) {
        var _a;
        while (this.size > 1 &&
            this.heapData[newElementIndex] >
                this.heapData[Math.floor(newElementIndex / 2)]) {
            var parentIndex = Math.floor(newElementIndex / 2);
            _a = [
                this.heapData[newElementIndex],
                this.heapData[parentIndex],
            ], this.heapData[parentIndex] = _a[0], this.heapData[newElementIndex] = _a[1];
            newElementIndex = Math.floor(newElementIndex / 2);
        }
    };
    /**
     * 取出堆中最大的元素，将根节点的元素取出，然后将最后一个元素放置到根节点位置，再依次调整根节点元素的位置
     */
    MaxHeap.prototype.extractMax = function () {
        var ret = this.heapData[1];
        this.heapData[1] = this.heapData[this.size];
        this.size--;
        this.shiftDown(this.size);
        return ret;
    };
    /**
     * 使用根元素进行shiftDown操作，用根元素和左右两个子节点元素中最大的那个值相比较，如果小于它就交换位置，依次往下不断比较
     * 直到当前元素索引*2大于完全二叉树的最大索引size，
     */
    MaxHeap.prototype.shiftDown = function (size) { };
    MaxHeap.prototype.getSize = function () {
        return this.size;
    };
    MaxHeap.prototype.isEmpty = function () {
        return this.size === 0;
    };
    return MaxHeap;
}());
// const maxHeap: MaxHeap<number> = new MaxHeap();
// const arr = SortHelper.generateRandomArray(50, 0, 100);
// for (let i = 0; i < arr.length; i++) {
//   maxHeap.insert(arr[i]);
// }
// console.log(maxHeap.heapData);
exports["default"] = MaxHeap;
