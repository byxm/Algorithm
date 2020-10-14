/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    const setNums1 = new Set(nums1);
    const setNums2 = new Set(nums2);
    const saveSet = new Set()
    for(const value of setNums2) {
        if(setNums1.has(value)){
            saveSet.add(value);
        }
    }

    return Array.from(saveSet)
};


console.log(intersection([4,9,5], [9,4,9,8,4]));