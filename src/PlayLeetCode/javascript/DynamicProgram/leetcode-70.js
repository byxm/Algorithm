/**
 * @param {number} n
 * @return {number}
 */
// 解法一 递归自上而下的解法, 将每一层阶梯到达顶点的方法看成从n - 1到n - 2的走法
// var climbStairs = function (n) {
//   var memoMap = new Map();
//   const res = recursionClimb(n, memoMap);
//   return res;
// };

// var recursionClimb = (n, memoMap) => {
//   if (memoMap.has(n)) {
//     return memoMap.get(n);
//   }
//   if (n === 1) {
//     memoMap.set(1, 1);
//     return 1;
//   }
//   if (n === 2) {
//     memoMap.set(2, 2);
//     return 2;
//   }

//   const memo = recursionClimb(n - 1, memoMap) + recursionClimb(n - 2, memoMap);
//   memoMap.set(n, memo);
//   return memo;
// };

// console.log("climbStairs", climbStairs(44));

// 解法二 自底向上的动态规划解法
var climbStairs = function (n) {
  const memoMap = {
    1: 1,
    2: 2,
  };
  for (let i = 3; i <= n; i++) {
    memoMap[i] = memoMap[i - 1] + memoMap[i - 2];
  }
  return memoMap[n];
};

console.log('climbStairs', climbStairs(44));
