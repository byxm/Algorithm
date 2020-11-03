/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
let res = [];
var combine = function (n, k) {
  res = [];
  if (n <= 0 || k <= 0 || n < k) {
    return res;
  }
  generalCombineResult(n, k, 1, []);
  return res;
};

const generalCombineResult = (n, k, start, c) => {
  if (c.length === k) {
    res.push([...c]);
    return;
  }

  /**
   *@description 回溯法剪支优化，对于这个问题来说当i = n的时候其实已经就不能再继续向下取出元素了
   * 那么我们就要尝试将多余的分支去掉减少遍历的次数
   */
  // 由于这道题的组合特性，c里面的剩余元素个数应该始终是 k - c.length，在[i...n]中就至少要有k - c.length个元素 
  // i最多为 n - (k - c.length) + 1
  // 经过这步优化在leetcode上的运行效率超过了99%的提交
  for (let i = start; i <= n - (k - c.length) + 1; i++) {
    c.push(i);
    generalCombineResult(n, k, i + 1, c);
    c.pop();
  }

  //   for (let i = start; i <= n; i++) {
  //     c.push(i);
  //     generalCombineResult(n, k, i + 1, c);
  //     c.pop();
  //   }
};
