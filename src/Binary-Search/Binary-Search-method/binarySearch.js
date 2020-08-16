"use strict";
exports.__esModule = true;
var BinarySearch = /** @class */ (function () {
    function BinarySearch() {
    }
    /**
     * 二分查找法，针对一个有序的数组，从中间对数组进行划分,分别从左右两边查找元素相应的位置，直到找到为止
     */
    BinarySearch.prototype.search = function (arr, target) {
        // 针对元素为止从[l....r];
        var l = 0;
        var r = arr.length - 1;
        // 二分到最后一个元素已经不能再划分左右子数组的时候二分终止
        while (l <= r) {
            // let mid = Math.floor((l + r) / 2);
            var mid = Math.floor(l + (r - l) / 2);
            if (arr[mid] === target) {
                return mid;
            }
            /**
             * 如果已经确定了中间元素不是查找的元素，再分别改变左右索引的话就需要忽略mid的索引，相应的加一位和减一位
             * */
            if (target > arr[mid]) {
                l = mid + 1;
            }
            else {
                r = mid - 1;
            }
        }
        return -1;
    };
    BinarySearch.prototype.searchRecursive = function (arr, target, l, r) {
        var mid = Math.floor(l + (r - l) / 2);
        if (arr[mid] === target) {
            return mid;
        }
        if (l === r) {
            return -1;
        }
        if (target > arr[mid]) {
            l = mid + 1;
        }
        else {
            r = mid - 1;
        }
        var res = this.searchRecursive(arr, target, l, r);
        return res;
    };
    return BinarySearch;
}());
exports["default"] = BinarySearch;
