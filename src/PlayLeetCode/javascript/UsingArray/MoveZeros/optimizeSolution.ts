/**
 * @description 移动零元素优化解法,将空间复杂度降低为O(1)
 * 思路：无需再开辟新的存储空间，遍历元素的时候每次将非0元素和存储的下一个0元素位置索引的元素交换位置
 */
function moveZeroes(nums: number[]): void {
  let notZeroEleIndex: number = 0;

  for (let i = 0; i < nums.length; i++) {
    // 找到第一个为0的索引
    if (!nums[i]) {
      notZeroEleIndex = i;
    }
    break;
  }

  for (let i = 0; i < nums.length; i++) {
    if (nums[i]) {
      // 如果索引值不为0
      [nums[i], nums[notZeroEleIndex]] = [nums[notZeroEleIndex], nums[i]];
      notZeroEleIndex++;
    }
  }
}
