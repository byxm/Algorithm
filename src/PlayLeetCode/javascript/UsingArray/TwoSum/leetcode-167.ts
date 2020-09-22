/**
 * @description leetcode第167题
 */

import { start } from "repl";

// 暴力解法，时间复杂度O(n*2)
// function twoSum(numbers: number[], target: number): number[] {
//     for(let i = 0; i < numbers.length; i++) {
//         const firstEle = numbers[i]
//         for(let j = 1; j < numbers.length; j++) {
//             const secondEle = numbers[j]
//             if(firstEle + secondEle === target) {
//                 i++
//                 j++
//                 return [i,j]
//             }
//         }
//     }
// };

// 结合二分查找时间复杂度O(nlogn)
// 先找到第一个位置的元素，然后对剩余有序数组进行二分查找匹配
function twoSum(numbers: number[], target: number): number[] {
  for (let i = 0; i < numbers.length; i++) {
    const addFirst = numbers[i];
    const addSecond = target - addFirst;

    let res = BinarySearch(numbers, i + 1, numbers.length, addSecond);
    console.log('res', res);
    if (res > -1) {
      i += 1;
      return [i, res];
    }
  }
}

function BinarySearch(arr, startIndex, endIndex, target) {
//   console.log('searchArr', startIndex, endIndex, target);
  
  let mid = Math.floor((startIndex + endIndex) / 2);
  if (arr[mid] === target) {
    mid += 1;
    return mid;
  }
  if(startIndex === endIndex) {
    return -1;
  }
  if (arr[mid] > target) {
    return BinarySearch(arr, startIndex, mid - 1, target);
  }
  if (arr[mid] < target) {
    return BinarySearch(arr, mid + 1, endIndex, target);
  }

}

const result = twoSum([3, 24, 50, 79, 88, 150, 345], 200);
console.log("result", result);
