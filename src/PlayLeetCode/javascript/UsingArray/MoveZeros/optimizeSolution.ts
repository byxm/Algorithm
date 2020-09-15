/**
 * @description 移动零元素优化解法,将空间复杂度降低为O(1)
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
