/**
 * @param {number[]} nums
 * @return {number[][]}
 */
let res = [];
var subsets = function (nums) {
  res = [];
  combineResult(nums, 0, []);
  return res;
};

const combineResult = (nums, start, c) => {
  res.push([...c]);

  for (let i = start; i < nums.length; i++) {
    c.push(nums[i]);
    combineResult(nums, i + 1, c);
    c.pop();
  }
};


console.log('combineResult', subsets([1,2,3]));