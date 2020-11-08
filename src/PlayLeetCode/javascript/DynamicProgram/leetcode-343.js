/**
 * @param {number} n
 * @return {number}
 */
let memoMap = {};
var integerBreak = function (n) {
  memoMap = {};
  return breakPoint(n);
};

var compareThree = function (first, second, third) {
  return Math.max(Math.max(first, second), third);
};

var breakPoint = function (n) {
  if (memoMap[n]) {
    return memoMap[n];
  }
  // 如果n为1说明不能继续往下分割这个整数
  if (n === 1) {
    memoMap[1] = 1;
    return 1;
  }
  let res = -1;
  for (let i = 1; i <= n - 1; i++) {
    res = compareThree(res, i * (n - i), i * breakPoint(n - i));

    memoMap[n] = res;
  }
  return res;
};

console.log("breakPoint", integerBreak(10));
