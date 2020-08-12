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
    /**
     * 原地堆排序,只需要在原有堆的基础上进行排序即可，无需再开辟新的数组空间
     * 对于升序排序：最大堆的第一个元素是最大值，每次将第一个元素和最后一个元素交换位置，然后在从第一个元素的位置进行shiftDown的操作
     */
    MaxHeap.prototype.heapifySort = function (arr) {
        var _a;
        for (var i = 0; i < arr.length; i++) {
            this.heapData.push(arr[i]);
        }
        for (var i = Math.floor((this.heapData.length - 1) / 2); i >= 0; i--) {
            this.shiftDown(i);
        }
        for (var i = this.heapData.length - 1; i > 0; i--) {
            _a = [
                this.heapData[i],
                this.heapData[0],
            ], this.heapData[0] = _a[0], this.heapData[i] = _a[1];
            this.__shiftDown(0, i - 1);
        }
    };
    /**
     * 按照指定堆元素长度进行shiftDown操作
     */
    MaxHeap.prototype.__shiftDown = function (startIndex, endIndex) {
        var _a;
        while (this.getLeftChildIndex(startIndex) <= endIndex) {
            var dynamicLeftOrRightChild = this.getLeftChildIndex(startIndex);
            if (dynamicLeftOrRightChild + 1 < endIndex &&
                this.heapData[dynamicLeftOrRightChild] <
                    this.heapData[dynamicLeftOrRightChild + 1]) {
                dynamicLeftOrRightChild = dynamicLeftOrRightChild + 1;
            }
            if (this.heapData[startIndex] > this.heapData[dynamicLeftOrRightChild])
                break;
            _a = [
                this.heapData[dynamicLeftOrRightChild],
                this.heapData[startIndex],
            ], this.heapData[startIndex] = _a[0], this.heapData[dynamicLeftOrRightChild] = _a[1];
            startIndex = dynamicLeftOrRightChild;
        }
    };
    /**
     * heapify的过程是将一个数组转换成堆，思路是找到完全二叉树中最后一个不是叶子节点的根节点，从这个
     * 节点开始对每个根节点做shiftDown操作
     * tip: 这个会有两种情况，完全二叉树索引是从0开始还是从1开始，如果是从1开始最后一个根节点的索引是this.heapData.length / 2
     * 如果从0开始this.heapData的长度就需要减1
     */
    MaxHeap.prototype.heapify = function (arr) {
        for (var i = 0; i < arr.length; i++) {
            this.heapData.push(arr[i]);
        }
        for (var i = Math.floor((this.heapData.length - 1) / 2); i >= 0; i--) {
            this.shiftDown(i);
        }
    };
    MaxHeap.prototype.insert = function (el) {
        this.heapData.push(el);
        this.shiftUp(this.heapData.length - 1);
    };
    /**
     * 使用添加的元素和他的父节点的元素判断如果比他大就和父节点元素交换位置,注意JS的除法是带小数的
     * 以0开头的最大堆的父节点索引的位置是 (index - 1) / 2
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
var maxHeap = new MaxHeap();
var arr = [45, 2, 12, 56, 0, 23, 1, 10];
maxHeap.heapifySort(arr);
console.log("heapifySOr", maxHeap.heapData);
// const arr = SortHelper.generateRandomArray(50, 0, 100);
// for (let i = 0; i < arr.length; i++) {
//   maxHeap.insert(arr[i]);
// }
// console.log(maxHeap.heapData);
exports["default"] = MaxHeap;
