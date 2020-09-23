// 结合二分查找时间复杂度O(nlogn)
// 先找到第一个位置的元素，然后对剩余有序数组进行二分查找匹配
function twoSumII(numbers, target) {
    for (var i = 0; i < numbers.length; i++) {
        var addFirst = numbers[i];
        var addSecond = target - addFirst;
        var res = BinarySearch(numbers, i + 1, numbers.length - 1, addSecond);
        if (res > -1) {
            i += 1;
            return [i, res];
        }
    }
}
function BinarySearch(arr, startIndex, endIndex, target) {
    var mid = Math.floor((startIndex + endIndex) / 2);
    if (arr[mid] === target) {
        mid += 1;
        return mid;
    }
    if (startIndex >= endIndex) { // 当元素处于右边界的时候，查询到最后左边的索引值会大于右边的索引值
        return -1;
    }
    if (arr[mid] > target) {
        return BinarySearch(arr, startIndex, mid - 1, target);
    }
    if (arr[mid] < target) {
        return BinarySearch(arr, mid + 1, endIndex, target);
    }
}
