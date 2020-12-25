/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    const retArray = new Array(nums.length)
    let positionLeft = 0;
    let positionRight = n;
    for(let i = 0; i < retArray.length; i++) {
        if(i % 2 === 0) {
            retArray[i] = nums[positionLeft]
            positionLeft++;
        }else {
            retArray[i] = nums[positionRight]
            positionRight++;
        }
    }
    return retArray;
};

console.log(shuffle([1,1,2,2], 2));

