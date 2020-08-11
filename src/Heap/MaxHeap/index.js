"use strict";
exports.__esModule = true;
/**
 * @description 构造最大堆，还是使用数组实现满二叉树。满二叉树起始索引从1开始，
 * 左子树节点索引为根节点索引的2倍，右子树节点为根节点索引的2倍加1
 * 如果根节点索引从0开始，则左子节点为2*i + 1, 又子节点为2*i + 2
 */
var MaxHeap = /** @class */ (function () {
    function MaxHeap() {
        this.heapData = new Array();
    }
    MaxHeap.prototype.insert = function (el) {
        this.heapData.push(el);
        this.shiftUp(this.heapData.length - 1);
    };
    /**
     * 使用添加的元素和他的父节点的元素判断如果比他大就和父节点元素交换位置,注意JS的除法是带小数的
     */
    MaxHeap.prototype.shiftUp = function (newElementIndex) {
        var _a;
        while (this.heapData.length > 1 &&
            this.heapData[newElementIndex] >
                this.heapData[Math.floor((newElementIndex - 1) / 2)]) {
            var parentIndex = Math.floor((newElementIndex - 1) / 2);
            _a = [
                this.heapData[newElementIndex],
                this.heapData[parentIndex],
            ], this.heapData[parentIndex] = _a[0], this.heapData[newElementIndex] = _a[1];
            newElementIndex = Math.floor((newElementIndex - 1) / 2);
        }
    };
    /**
     * 取出堆中最大的元素，将根节点的元素取出，然后将最后一个元素放置到根节点位置，再依次调整根节点元素的位置
     */
    MaxHeap.prototype.extractMax = function () {
        var ret = this.heapData[0];
        this.heapData[0] = this.heapData[this.heapData.length - 1];
        // this.size--;
        this.heapData.pop(); // 将最后一个元素移动到首位后就不用考虑它了
        this.shiftDown(0);
        return ret;
    };
    /**
     * 使用根元素进行shiftDown操作，用根元素和左右两个子节点元素中最大的那个值相比较，如果小于它就交换位置，依次往下不断比较
     * 当这个元素比左右子节点都大或者下沉到没有左右子节点，这个过程结束
     */
    MaxHeap.prototype.shiftDown = function (initIndex) {
        // 注释部分是我最开始不正确的思路，我从索引里面取了值来比较。这样就加大了变量维护的复杂度
        // const leftChildIndex = this.getLeftChildIndex(initIndex);
        // const rightChildIndex = this.getRightChildIndex(initIndex);
        // const maxBetweenLeftChildAndRightChild = Math.max(
        //   this.heapData[leftChildIndex],
        //   this.heapData[rightChildIndex]
        // );  这里用两个索引，并且比较左右节点的大小就绕进去了，这样写下去会变得复杂,应该遵照规律，使用一个索引来代替
        var _a;
        // shiftDown终止条件1：当shiftDown左节点索引大于堆的长度说明越界
        while (this.getLeftChildIndex(initIndex) <= this.heapData.length - 1) {
            var dynamicLeftOrRightChild = this.getLeftChildIndex(initIndex);
            if (this.heapData[dynamicLeftOrRightChild + 1] >
                this.heapData[dynamicLeftOrRightChild]) {
                dynamicLeftOrRightChild += 1;
            }
            if (this.heapData[initIndex] > this.heapData[dynamicLeftOrRightChild])
                break;
            _a = [
                this.heapData[dynamicLeftOrRightChild],
                this.heapData[initIndex],
            ], this.heapData[initIndex] = _a[0], this.heapData[dynamicLeftOrRightChild] = _a[1];
            initIndex = dynamicLeftOrRightChild;
        }
    };
    MaxHeap.prototype.getLeftChildIndex = function (parentIndex) {
        return 2 * parentIndex + 1;
    };
    MaxHeap.prototype.getRightChildIndex = function (parentIndex) {
        return 2 * parentIndex + 2;
    };
    MaxHeap.prototype.getSize = function () {
        return this.heapData.length;
    };
    MaxHeap.prototype.isEmpty = function () {
        return this.heapData.length === 0;
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
