"use strict";
exports.__esModule = true;
var utilHelper_1 = require("../../utilHelper");
/**
 * @description 二分查找法，针对有序的序列，将序列二分使用指定元素和中间元素进行比较
 */
var BinarySearchRecurve = function (targetArr, targetElement, left, right) {
    var l = left;
    var r = right; // 定义l，r这两个循环不变量指定了过程中，像现在这样定义就指定了范围区间是[l....r]
    var mid = Math.floor((l + r) / 2);
    if (targetElement === targetArr[mid]) {
        return mid;
    }
    if (l === r) {
        // 说明找到了最后一个还不满足条件就找不到了
        return -1;
    }
    if (targetElement > targetArr[mid]) {
        // 查找范围在右边
        return BinarySearchRecurve(targetArr, targetElement, mid + 1, targetArr.length - 1);
    }
    if (targetElement < targetArr[mid]) {
        return BinarySearchRecurve(targetArr, targetElement, 0, mid - 1);
    }
};
var arr = utilHelper_1["default"].generateNealyOrderArray(10000000);
// const index = BinarySearchRecurve(arr, 4, 0, arr.length - 1)
// console.log('二分查找缩影', index)
var BinarySearchByLoop = function (targetArr, targetElement) {
    var l = 0;
    // let r = targetArr.length - 1; // 解法一：定义的是[l.......r]这样一个左闭右闭的区间
    var r = targetArr.length; // 解法二：定义的是[l.......r)这样一个左闭右开的区间,当定义左闭右开的时候说明最右边元素索引大了一位
    // while (l <= r) { 
    while (l < r) { // 解法二 
        var mid = Math.floor((l + r) / 2);
        if (targetArr[mid] === targetElement) {
            return mid;
        }
        if (targetArr[mid] > targetElement) {
            r = mid;
        }
        if (targetArr[mid] < targetElement) {
            l = mid + 1;
        }
    }
    return -1;
};
console.time('二分查找循环');
var index = BinarySearchByLoop(arr, 3);
console.timeEnd('二分查找循环');
console.log('二分索引', index);
