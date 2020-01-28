/*
 * @Description: 插入排序法
 * @Author:
 * @Date: 2020-01-26 11:12:13
 */
var sortTestHelper_1 = require('../Selection-Sort/sortTestHelper');
var InsertSort = (function () {
    function InsertSort() {
    }
    /**
     * @description: 插入排序法，思路就像是整理手中的扑克牌一样，每次拿到一个新的数据就往前进行比较如果不符合条件就交换位置
     * 这种方式的优点就在于，内层循环的逻辑并不会执行n次，当满足条件后就退出了。所以如果对于一个近乎有序的数据来说插入排序法
     * 的时间复杂度接近于O(n)
     */
    InsertSort.sort = function (arr) {
        for (var i = 1; i < arr.length; i++) {
            // 写法一：
            // for(let j = i; j > 0 && arr[j] < arr[j - 1]; j--) {
            //     /**
            //      * 这里印证了我的一个猜想，因为我使用的是js的解构赋值，看起来也只有一次赋值操作，实际上解构赋值
            //      * 只是将那三次操作简化了写法而已，实际上肯定还是没有一次赋值快的
            //     */
            //         this.swap(arr, j, j - 1);
            // }
            // 写法二：
            var e = arr[i];
            var j = i;
            for (; j > 0 && e < arr[j - 1]; j--) {
                arr[j] = arr[j - 1];
            }
            arr[j] = e;
        }
    };
    InsertSort.swap = function (args, minIndex, index) {
        _a = [args[index], args[minIndex]], args[minIndex] = _a[0], args[index] = _a[1];
        var _a;
    };
    return InsertSort;
})();
var n = 100000;
const arr = sortTestHelper_1["default"].generateRandomArray(n, 0, 100000);
// var arr = sortTestHelper_1["default"].generateNealyOrderArray(n, 5);
console.time('Insert-sort');
InsertSort.sort(arr);
console.timeEnd('Insert-sort');
// SortHelper.printArr(arr); 
