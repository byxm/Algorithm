// leetcode https://leetcode.com/problems/remove-element/ 第27题
// function removeElement(nums: number[], val: number): number {
//     for(let i = 0; i < nums.length; i++) {
//         if(nums[i] === val) {
//             nums.splice(i, 1)
//             i--
//         }
//     }
//     return nums.length
// };
// 优化解法
/**
 * @description 根据题目的需求可以做个优化，上面那个解法时间复杂度要高些，另外还使用了js底层的api
 * 题目要求只是返回去除指定元素后剩余元素的个数，但并不要求之前的数组长度等于去除value后的长度
 * 所以优化思路如下：
 * 迭代数组元素，并初始化一个索引用于记录不为指定元素的索引
*/
function removeElement(nums, val) {
    var i = 0;
    for (var j = 0; j < nums.length; j++) {
        if (nums[j] === val) {
            _a = [nums[i], nums[j]], nums[j] = _a[0], nums[i] = _a[1];
            i++;
        }
    }
    return i;
    var _a;
}
;
var len = removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2);
console.log('len', len);
