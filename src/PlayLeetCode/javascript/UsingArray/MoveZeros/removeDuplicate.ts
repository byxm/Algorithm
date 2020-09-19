/**
 * @description leetcode 26题 https://leetcode.com/problems/remove-duplicates-from-sorted-array/
 * 这道题要求去除已排序数组中的重复元素，同样的空间复杂度要求为O(1)，维护两个指针索引一个用于记录当前遍历的元素，
 * 一个用于记录当前不重复的指针元素
*/
function removeDuplicates(nums: number[]): number {
    let i = 0;
    for(let j = 0; j < nums.length; j++) {
        if(nums[j] !== nums[i]) { // 如果不相等将记录不同元素的指针往下移动一个位置
            i++
            nums[i] = nums[j] // 同时将之前位置的元素变为新的不重复元素
        }
    }
    return i + 1
};