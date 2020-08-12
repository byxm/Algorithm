/*
 * @Description: 生成测试随机数
 * @Author:
 * @Date: 2020-01-22 17:54:45
 */
var SortTestHelper = (function () {
    function SortTestHelper() {
    }
    SortTestHelper.generateRandomArray = function (n, rangeL, rangeR) {
        var arr = [];
        for (var i = 0; i < n; i++) {
            arr.push(Math.floor(Math.random() * (rangeR - rangeL + 1) + rangeL));
        }
        return arr;
    };
    /**
     * @description: 生成近乎有序的数组
     */
    SortTestHelper.generateNealyOrderArray = function (n, swapTime) {
        if (swapTime === void 0) { swapTime = 0; }
        var arr = [];
        // 先生成一组有序数组
        for (var i = 0; i < n; i++) {
            arr.push(i);
        }
        // 在根据无序程度swapTime确定无需的程度,随机对swaptTime对元素交换位置
        for (var i = 0; i < swapTime; i++) {
            var a = Math.floor(Math.random() * i);
            var b = Math.floor(Math.random() * i);
            _a = [arr[b], arr[a]], arr[a] = _a[0], arr[b] = _a[1];
        }
        return arr;
        var _a;
    };
    SortTestHelper.printArr = function (arr) {
        for (var i = 0; i < arr.length; i++) {
            console.log(arr[i]);
            console.log(' ');
        }
    };
    return SortTestHelper;
})();
exports["default"] = SortTestHelper;
