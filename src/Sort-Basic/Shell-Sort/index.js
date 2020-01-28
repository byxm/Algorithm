/*
 * @Description: 希尔排序
 * @Author:
 * @Date: 2020-01-27 18:48:50
 */
var sortTestHelper_1 = require('../Selection-Sort/sortTestHelper');
var ShellSort = (function () {
    function ShellSort() {
    }
    /**
     * @description: 按照希尔增量将一组元素分组，然后再分别对每组进行插入排序，当元素间隔足够小之后达到排序的目的
     */
    ShellSort.sort = function (arr) {
        var n = arr.length;
        for (var gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) {
            // 进行插入排序
            for (var i = gap; i < n; i++) {
                var temp = arr[i];
                var j = i;
                for (; j >= gap && temp < arr[j - gap]; j -= gap) {
                    arr[j] = arr[j - gap];
                }
                arr[j] = temp;
            }
        }
    };
    return ShellSort;
})();
var n = 1000000;
var arr = sortTestHelper_1["default"].generateRandomArray(n, 0, 1000000);
// const arr = SortHelper.generateNealyOrderArray(n, 5);
console.time("Shell-sort");
ShellSort.sort(arr);
console.timeEnd("Shell-sort");
// sortTestHelper_1["default"].printArr(arr);
