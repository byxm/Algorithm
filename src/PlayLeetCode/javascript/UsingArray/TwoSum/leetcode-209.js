/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
// leetcode 209问题暴力解法
var minSubArrayLenForce = function (s, nums) {
  const res = [];
  for (let i = 0; i < s.length; i++) {
    for (let j = i + 1; j < s.length; j++) {
      const subArr = s.slice(i, j + 1);
      const sum = subArr.reduce((prev, next) => prev + next, 0); // 求和这里可以把复杂度简化为O(1)，每次使用求出来的前缀后相加即可
      if (sum >= nums) {
        res.push(subArr.length);
      }
    }
  }
  res.sort((a, b) => a - b);
  if (res.length) {
    return res.shift();
  } else {
    return 0;
  }
};

/**
 * @description 双索引指针优化解法
 * 暴力解法的问题在于做了过多重复的计算，比如对于遍历求和就对每个已经遍历过得子串再次进行了求和
 * 而双索引指针的优化解法巧妙地通过两个索引指定区间然后只在一次的遍历过程中求和，右指针移动则和加上移位的元素，左指针移动则和减去左指针移位
 */
var minSubArrayLen = function (s, nums) {
  var l = 0;
  var r = -1; // 右边界元素从-1指定开始，表示第一次取值取不到第一个元素
  var sum = 0;
  var len = nums.length - 1;
  var res = nums.length + 1; // 这里加个1主要用于判断求和的结果是否有变化如果没有则说明没有相应的结果值
  while (l < len) {
    if (sum < s && r <= len) {
      // 如果sum小于目标值，则将右指针元素右移一位相加求和
      r++;
      sum += nums[r];
    } else {
      sum -= nums[l];
      l++;
    }
    if (sum >= s) {
      res = Math.min(res, r - l + 1); // 这种在遍历过程中寻找最小值，我有个错误的思路总是要把所有值找出来后排序，但其实只要每次遍历的时候做一个小于比较就可以了
    }
  }
  if (res === nums.length + 1) {
    return 0;
  }
  return res;
};

console.log(minSubArrayLen(15, [1, 2, 3, 4, 5]));
