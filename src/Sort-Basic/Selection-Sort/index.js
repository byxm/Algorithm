/*
 * @Description:
 * @Author:
 * @Date: 2020-01-21 23:05:55
 */
/**
 * TODO: 关于sort排序的使用，我试着去实现v8提供的sort方法，遇到的难点是自定义的比较
 * javascript不像java那样有重载的comparable方法去重新实现自己的比较方式。那么sort方法究竟是如何做到的呢
 * v8源码在这里 https://github.com/v8/v8/blob/ad82a40509c5b5b4680d4299c8f08d6c6d31af3c/src/js/array.js
 * 这里先不纠结了，下来有空在研究，先把这个课程的算法学完
 */
var SortHelper = require('./sortTestHelper');
var SelectionSort = (function () {
    function SelectionSort() {
    }
    SelectionSort.sort = function (args, sortWay) {
        if (sortWay === void 0) { sortWay = 1; }
        if (args.length < 2) {
            throw new Error("the length of array is less than two");
        }
        if (sortWay && sortWay === 1) {
            this.positiveSort(args);
        }
        if (sortWay && sortWay === -1) {
            this.negativeSort(args);
        }
    };
    SelectionSort.positiveSort = function (args) {
        for (var i = 0; i < args.length; i++) {
            var minIndex = i;
            for (var j = i + 1; j < args.length; j++) {
                if (args[minIndex] > args[j]) {
                    minIndex = j;
                }
            }
            this.swap(args, minIndex, i);
        }
    };
    SelectionSort.negativeSort = function (args) {
        for (var i = 0; i < args.length; i++) {
            var minIndex = i;
            for (var j = i + 1; j < args.length; j++) {
                if (args[minIndex] < args[j]) {
                    minIndex = j;
                }
            }
            this.swap(args, minIndex, i);
        }
    };
    SelectionSort.swap = function (args, minIndex, index) {
        _a = [args[index], args[minIndex]], args[minIndex] = _a[0], args[index] = _a[1];
        var _a;
    };
    return SelectionSort;
})();
var n = 100000;
const arr = SortHelper.default.generateRandomArray(n, 0, 100000);
// var arr = sortTestHelper_1["default"].generateNealyOrderArray(n, 5);
console.time('Selection-sort');
SelectionSort.sort(arr);
console.timeEnd('Selection-sort');
// SortHelper.default.printArr(arr);
