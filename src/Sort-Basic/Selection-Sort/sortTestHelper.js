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
    SortTestHelper.printArr = function (arr) {
        for (var i = 0; i < arr.length; i++) {
            console.log(arr[i]);
            console.log(' ');
        }
    };
    return SortTestHelper;
})();
exports["default"] = SortTestHelper;
