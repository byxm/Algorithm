/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (s, nums) {
  const res = [];
  for (let i = 0; i < s.length; i++) {
    for (let j = i + 1; j < s.length; j++) {
      const subArr = s.slice(i, j + 1);
      const sum = subArr.reduce((prev, next) => prev + next, 0);
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