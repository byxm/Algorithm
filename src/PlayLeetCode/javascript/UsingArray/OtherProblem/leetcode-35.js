/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// var searchInsert = function (nums, target) {
//   for (let i = 0; i < nums.length; i++) {
//     const curNum = nums[i];
//     if (curNum >= target) {
//       return i;
//     }
//   }
//   return nums.length;
// };

// 二分查找
var searchInsert = function (nums, target) {
    let l = 0
    let r = nums.length - 1;
    let mid = 0
    while (l <= r) {
        mid = Math.floor((l + r) / 2)
        if(nums[mid] === target) {
            return mid 
        }
        if(nums[mid] > target) {
            r = mid - 1
        }
        if(nums[mid] < target) {
            l = mid + 1
        }
    }
    return nums[mid] > target ? mid : mid + 1
};

console.log(searchInsert([1,3,5,6], 5));
