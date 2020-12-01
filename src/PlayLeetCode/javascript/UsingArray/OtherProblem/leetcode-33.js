/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let l = 0;
  let r = nums.length - 1;
  let mid = 0;

  while (l <= r) {
    mid = Math.floor((r + l) / 2);
    if (nums[mid] === target) {
      return mid;
    }
    if (nums[0] <= nums[mid]) {// 此时说明左半部分有序
      // 虽然旋转过后的数组整体不在有序，但是每次二分都能找到部分有序的数组，并根据条件查找
      if (nums[0] <= target && target <= nums[mid]) {
        r = mid - 1;
      } else {
        l = mid + 1;
      }
    }else { // 此时说明右半部分有序
        if(nums[mid] <= target && target <= nums[r]) {
            l = mid + 1;
        }else {
            r = mid - 1
        }
    }
  }

  return -1;
};

console.log('searchResult', search([3,1], 1));