/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
// 思路和三元组求和是一样的，就是需要多一个指针来遍历第二位的索引
var fourSum = function (nums, target) {
  const res = [];
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    // 确保前一位发生过变化
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    } // 确保前一位发生过变化
    for (let first = i + 1; first < nums.length; first++) {
      if (first > i + 1 && nums[first - 1] === nums[first]) {
        continue;
      }
      let L = first + 1;
      let R = nums.length - 1;
      while (L < R) {
        const sum = nums[i] + nums[first] + nums[L] + nums[R];
        if (sum === target) {
          res.push([nums[i], nums[first], nums[L], nums[R]]);
          while (L < R && nums[L] === nums[L + 1]) {
            L++;
          }
          while (L < R && nums[R] === nums[R - 1]) {
            R--;
          }
          L++;
          R--;
        } else if (sum > target) {
          R--;
        } else {
          L++;
        }
      }
    }
  }
  return res;
};

console.log("fourSum", fourSum([-2, -1, -1, 1, 1, 2, 2], 0));
