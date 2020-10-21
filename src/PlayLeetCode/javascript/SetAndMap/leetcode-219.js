/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
  const numsSet = new Map();
  for (let i = 0; i < nums.length; i++) {
    if(numsSet.has(nums[i]) && i - numsSet.get(nums[i]) <= k) {
        return true
    }
    numsSet.set(nums[i], i) 
  }
  return false;
};

console.log('containsNear', containsNearbyDuplicate([1,2,3,1,2,3],2));