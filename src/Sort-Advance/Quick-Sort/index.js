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
        /**
         * 优化二：
         * 对于近乎有序的数组会存在一个问题，每次选择的用于比较的最左边元素都会比左边所有元素大比右边所有元素小，
         * 这样的话在二分递归树的时候就会导致快速排序的递归树退化成一个链表，时间复杂度降为O(n2)
         * 1 2 3 4 5 6 7 8 9
         *    \
         *    2 3 4 5 6 7 8 9
         *     \
         *     3 4 5 6 7 8 9
         *       \
         *     4 5 6 7 8 9
         * 解决这个问题的方案是不用数组的第一个元素作为比较值，而是随机获取一个和第一个交换位置再用它来做比较
         * 这样的话每次比较还会出现上述情况的概率就会大大降低近乎为零，第一次选中最小元素是1 / n - 1, 第二次 1 / n - 2....
         * 经过数学论证可以得到时间复杂度为nlogn,详细推导可以深入去了解一下
         */
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
var arr = sortTestHelper_1["default"].generateRandomArray(n, 0, 0);
// const arr = SortHelper.generateNealyOrderArray(n, 10);
// console.time('Merge-sort');
// MergeSort.sort(arr, 0, arr.length - 1);
// console.timeEnd('Merge-sort');
console.time('Quick-advanceSort');
QuickSort.sort(arr);
console.timeEnd('Quick-advanceSort');
// SortHelper.printArr(arr);
