/*
 * @Description: 冒泡排序
 * @Author:
 * @Date: 2020-01-26 22:58:43
 */
var sortTestHelper_1 = require("../Selection-Sort/sortTestHelper");
var BubbleSort = (function () {
    function BubbleSort() {
    }
    BubbleSort.sort = function (arr) {
        var isSorted = true;
        for (var i = 0; i < arr.length - 1; i++) {
            for (var j = 0; j < arr.length - i - 1; j++) {
                if (arr[j] > arr[j + 1]) {
                    // 这种直接直接比较的方式需要三次赋值，不太优化，显然我们应该保存下每次要交换的索引值，待循环完成之后执行一次交换
                    _a = [arr[j + 1], arr[j]], arr[j] = _a[0], arr[j + 1] = _a[1];
                    isSorted = false;
                }
            }
            if (isSorted)
                break; // 如果没有发生任何一次元素交换说明这组数据就是有序的
        }
        var _a;
    };
    return BubbleSort;
})();
var n = 100000;
// const arr = SortHelper.generateRandomArray(n, 0, 100000);
var arr = sortTestHelper_1["default"].generateNealyOrderArray(n);
console.time("Bubble-sort");
BubbleSort.sort(arr);
console.timeEnd("Bubble-sort");
// SortHelper.printArr(arr);