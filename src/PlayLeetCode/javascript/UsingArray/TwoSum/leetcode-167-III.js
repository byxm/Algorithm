/**
 * @description 对撞指针解法
 * 使用首尾双指针相加往中间靠拢得到相加为最终结果的值
 */

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  let right = numbers.length - 1;
  let left = 0
  while(left < right) {
    const sum = numbers[left] + numbers[right];
    console.log('sum', sum);
    if(sum === target) {
        return [left + 1, right + 1]
    }
    if(sum > target) {
        right--
    }
    if(sum < target) {
        left++
    }
  }

  return []
};