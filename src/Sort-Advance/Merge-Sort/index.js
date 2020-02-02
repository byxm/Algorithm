/*
 * @Description: 归并排序
 * @Author:
 * @Date: 2020-01-29 11:25:22
 */
var sortTestHelper_1 = require('../../Sort-Basic/Selection-Sort/sortTestHelper');
var MergeSort = (function () {
    function MergeSort() {
    }
    /**
     * @description: 归并操作：在这一步的排序里面需要要维持三个索引，存放排序数组的索引，左半部分当前元素索引和右半部分当前元素索引
     */
    MergeSort.merge = function (arr, l, mid, r) {
        var aux = [];
        // 根据当前元素的左右位置拷贝到新的数组里面
        for (var i_1 = l; i_1 < r + 1; i_1++) {
            aux.push(arr[i_1]);
        }
        var i = l, j = mid + 1;
        for (var k = i; k <= r; k++) {
            if (i > mid) {
                arr[k] = aux[j - l];
                j++;
            }
            else if (j > r) {
                arr[k] = aux[i - l];
                i++;
            }
            else if (aux[i - l] < aux[j - l]) {
                arr[k] = aux[i - l];
                i++;
            }
            else {
                arr[k] = aux[j - l];
                j++;
            }
        }
    };
    /**
     * @description: 思路：归并排序是利用二分法先将一组数据不停地左右划分，直到每个部分只剩下一个元素，那么它必然是有序。
     * 然后在反向左右合并两边的元素。这种分离的方式类似于一颗完全二叉树，完全二叉树的二分操作时间复杂度是logn，合并排序是n
     * 所以能够达到nlogn的时间复杂度
     */
    MergeSort.sort = function (arr, l, r) {
        // 终止条件，左边界不能超过右边界
        if (l >= r) {
            return;
        }
        // 左右二分递归，将一组元素二分成单个元素
        var mid = Math.floor((l + r) / 2);
        this.sort(arr, l, mid);
        this.sort(arr, mid + 1, r);
        this.merge(arr, l, mid, r);
    };
    return MergeSort;
})();
var n = 10;
var arr = sortTestHelper_1["default"].generateRandomArray(n, 0, 10);
// const arr = SortHelper.generateNealyOrderArray(n, 5);
console.time('Merge-sort');
MergeSort.sort(arr, 0, arr.length - 1);
console.timeEnd('Merge-sort');
sortTestHelper_1["default"].printArr(arr); 
