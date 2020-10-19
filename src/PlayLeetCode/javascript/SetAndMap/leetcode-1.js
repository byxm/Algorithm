/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const numsMap = new Map();
  for (let i = 0; i < nums.length; i++) {
    numsMap.set(nums[i], i);
  }

  for (let i = 0; i < nums.length; i++) {
    const restNum = target - nums[i];
    if (numsMap.has(restNum) && numsMap.get(restNum) !== i) {
      return [i, numsMap.get(restNum)];
    }
  }
};

// console.log("twoNum", twoSum([3, 2, 4], 6));

var twoSum2 = function (nums, target) {
  const numsMap = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (numsMap.has(nums[i])) {
      return [i, numsMap.get(nums[i])];
    } else {
      numsMap.set(target - nums[i], i);
    }
  }
};

console.log("twoNum2", twoSum2([3,3], 6));
