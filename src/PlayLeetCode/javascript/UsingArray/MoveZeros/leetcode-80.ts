/**
 * @description leetcode 第80号题解 https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/submissions/
 * 解法一
 */

function removeDuplicates(nums: number[]) {
  let count = 0; // 用于统计重复项的元素是否大于2个

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) {
      // 相邻两个元素相等就要记录等量元素的个数
      count++;
      if (count >= 2) {
        nums.splice(i, 1);
        i--;
      }
    } else {
      count = 0;
    }
  }
  return nums.length;
}

// /**
//  * @description 解法二，通过双指针覆盖多余2的元素
//  */
// function removeDuplicates(nums: number[]) {
//   let j = 1;
//   let count = 1;

//   for (let i = 1; i < nums.length; i++) {
//     if (nums[i] === nums[i - 1]) {
//       count++;
//     } else {
//       count = 1;
//     }
//     if (count <= 2) {
//       nums[j] = nums[i];
//       j++;
//     }
//   }
//   console.log('numssss', nums);
//   return j;
// }

const count = removeDuplicates([1, 1, 1, 2, 2, 3]);

console.log("count", count);
