/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// 思路见：https://leetcode-cn.com/problems/3sum/solution/pai-xu-shuang-zhi-zhen-zhu-xing-jie-shi-python3-by/
var threeSum = function (nums) {
  if (nums.length < 3) {
    return [];
  }
  nums.sort((a, b) => a - b);
  const triples = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      // 对于已排好序的数组，后续元素有大于0的值，说明之后的数相加都肯定不为0了
      return triples;
    }
    if (i > 0 && nums[i] === nums[i - 1]) {
      /**
       * 因为nums已经拍好了序，在左右指针和nums[i]移动的过程中如果相邻的下一个元素和之前的相等，那么说明
       * 会造成重复的解，因为之前已经使用过该元素进行计算
       */
      continue;
    }
    let L = i + 1;
    let R = nums.length - 1;
    while (L < R) {
      const sum = nums[i] + nums[L] + nums[R];
      if (sum === 0) {
        triples.push([nums[i], nums[L], nums[R]]);
        while (L < R && nums[L] === nums[L + 1]) {
          L = L + 1;
        }
        while (L < R && nums[R] === nums[R - 1]) {
          R = R - 1;
        }
        L++;
        R--;
      } else if (sum > 0) {
        // 如果和大于0就将右边大的数向前减一
        R--;
      } else {
        // 如果和小于0就将左边的小的数向前加1
        L++;
      }
    }
  }
  return triples;
};

console.log("triples", threeSum([0]));
