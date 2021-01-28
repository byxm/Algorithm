// 求值最大的子序之和

// 解法参考：https://leetcode-cn.com/problems/maximum-subarray/solution/hua-jie-suan-fa-53-zui-da-zi-xu-he-by-guanpengchn/
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let sum = 0;
    let maxSub = nums[0];
    for(const num of nums) {
        if(sum > 0) {
            sum += num;
        }else {
            sum = num;
        }
        maxSub = Math.max(sum, maxSub);
    }
    return maxSub;
};





/**
 * 这道题最开始产生的误区就是我想去把所有的子序找出来求和，其实不用找出子序列，因为题目只要求你求和
 * 那么所有子序列无非就是在遍历整个nums的时候能够得到，而子序列要在哪里开始计算，从哪里终止，这是个关键
 * 序列里面的值有整数和负数，那么肯定是一段子序列求出来的和是正数对最后的结果的帮助大。一旦某一次的序列结果是负数
 * 那么它对后面总结果的计算肯定是减益的，因为加上一个负数值肯定是越小的
*/
