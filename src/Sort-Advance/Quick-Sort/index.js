"use strict";
/*
 * @Description:
 * @Author:
 * @Date: 2020-02-15 20:17:44
 */
exports.__esModule = true;
var sortTestHelper_1 = require("../../Sort-Basic/Selection-Sort/sortTestHelper");
/**
 * @description: 快速排序法
 * 思路是将每个元素每次都能排放到一个位置，在这个位置所有左边的元素小于该元素，所有右边的元素均大于该元素
 * 然后逐次的递归每个元素就能都被放置在这样的位置
 */
var QuickSort = /** @class */ (function () {
    function QuickSort() {
    }
    QuickSort.partition = function (arr, l, r) {
        var randomIndex = Math.floor((r - l + 1) * Math.random() + l);
        this.swap(arr, l, randomIndex);
        var v = arr[l];
        var j = l;
        for (var i = l; i <= r; i++) {
            if (arr[i] < v) {
                j++;
                this.swap(arr, j, i);
            }
        }
        this.swap(arr, l, j);
        return j;
    };
    QuickSort.sortArr = function (arr, l, r) {
        // if(r - l <= 15) {// 优化一：当元素长度小于15的时候采用插入排序
        //   InsertSort.sort(arr);
        //   return;
        // }
        if (l >= r) {
            return;
        }
        var p = this.partition(arr, l, r);
        this.sortArr(arr, l, p - 1);
        this.sortArr(arr, p + 1, r);
    };
    QuickSort.sort = function (arr) {
        var len = arr.length;
        this.sortArr(arr, 0, len - 1);
    };
    QuickSort.swap = function (arr, i, j) {
        var _a;
        _a = [arr[j], arr[i]], arr[i] = _a[0], arr[j] = _a[1];
    };
    return QuickSort;
}());
var n = 1000000;
var arr = sortTestHelper_1["default"].generateRandomArray(n, 0, 1000000);
// const arr = SortHelper.generateNealyOrderArray(n, 10);
// console.time('Merge-sort');
// MergeSort.sort(arr, 0, arr.length - 1);
// console.timeEnd('Merge-sort');
console.time('Quick-advanceSort');
QuickSort.sort(arr);
console.timeEnd('Quick-advanceSort');
// SortHelper.printArr(arr);
