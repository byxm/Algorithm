/**
 * @param {number[]} height
 * @return {number}
 */
// var maxArea = function (height) {
//     let maxArea = 0
//     for(let i = 0; i < height.length; i++) {
//       for(let j = i + 1; j < height.length; j++) {
//           maxArea = Math.max(maxArea, Math.min(height[i], height[j]) * (j - i) )
//       }
//     }
//     return maxArea
// };

/**
 * @description 双指针优化解法，思路见：
 * https://leetcode-cn.com/problems/container-with-most-water/solution/sheng-zui-duo-shui-de-rong-qi-by-leetcode-solution/
 * 这个思路就需要一个严格的数学推导
 */

var maxArea = function (height) {
  let maxArea = 0;
  let left = 0;
  let right = height.length - 1;
  while (left < right) {
    const x = right - left;
    const minY = Math.min(height[left], height[right]);

    console.log("x,y", x, minY, height[left], height[right]);
    maxArea = Math.max(maxArea, x * minY);
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }

  }
  return maxArea;
};

console.log("maxArea", maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
