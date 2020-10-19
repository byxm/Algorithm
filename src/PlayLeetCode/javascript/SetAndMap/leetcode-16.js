/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  let diff = 1000000;
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    let L = i + 1;
    let R = nums.length - 1;

    while (L < R) {
      const sum = nums[i] + nums[L] + nums[R];

      if (Math.abs(sum - target) < Math.abs(diff)) {
        diff = sum - target;
      }
      if (sum > target) {
        // 如果三元组的和大于target，说明更靠近就要小一点，此时右指针移动
        R--;
      } else {
        L++;
      }
    }
  }
  return target + diff;
};

console.log("threeSumCloset", threeSumClosest([1, 2, 5, 10, 11], 12));
