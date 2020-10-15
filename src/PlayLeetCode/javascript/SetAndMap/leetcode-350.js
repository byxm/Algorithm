/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  const numsMap = new Map();
  const res = []
  for (let i = 0; i < nums1.length; i++) {
    numsMap.set(
      nums1[i],
      numsMap.has(nums1[i]) ? numsMap.get(nums1[i]) + 1 : 1
    );
  }
  for (let i = 0; i < nums2.length; i++) {
    if (numsMap.has(nums2[i])) {
        res.push(nums2[i]);
        numsMap.set(nums2[i], numsMap.get(nums2[i]) - 1)
        if(numsMap.get(nums2[i]) === 0) {
            numsMap.delete(nums2[i]);
        }
    }
  }
  return res;
};

console.log("intersect", intersect([4, 9, 5], [9, 4, 9, 8, 4]));
