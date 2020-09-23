/**
 * @description leetcode第167题
 */

// 暴力解法，时间复杂度O(n*2)
function twoSumI(numbers: number[], target: number): number[] {
    for(let i = 0; i < numbers.length; i++) {
        const firstEle = numbers[i]
        for(let j = 1; j < numbers.length; j++) {
            const secondEle = numbers[j]
            if(firstEle + secondEle === target) {
                i++
                j++
                return [i,j]
            }
        }
    }
};


