/**
 * @description LeetCode 第282号问题，基本解法
 * 思路：先将非0元素拿出来，然后将非0元素缺少的部分补充为0
 * https://leetcode.com/problems/move-zeroes/
 */
function moveZeroes(nums: number[]): void {
  const nonZerosArray = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i]) {
      nonZerosArray.push(nums[i]);
    }
  }

  for (let i = nonZerosArray.length; i < nums.length; i++) {
    nonZerosArray.push(0);
  }

  for (let i = 0; i < nonZerosArray.length; i++) {
    nums[i] = nonZerosArray[i];
  }
}

const arr = [0, 1, 0, 3, 12];

moveZeroes(arr);
