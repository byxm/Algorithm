/**
 * @param {number[]} nums
 * @return {number[][]}
 */
let res = [];
var permute = function (nums) {
  res = [];
  if (nums.length === 0) {
    return [];
  }
  generatePermutation(nums, 0, [], null);
  return res;
};

var generatePermutation = (nums, index, p, isPrev) => {
  if (index === nums.length) {
    res.push([...p]);
    return;
  }

  for (let i = 0; i < nums.length; i++) {
    if (!p.includes(nums[i]) || nums[i] === isPrev) {   
      p.push(nums[i]);
      generatePermutation(nums, index + 1, p, nums[i]);
      p.pop();
    }
  }
};


console.log('prerrrrr', permute([1,1,2]));