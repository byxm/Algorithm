// 以斐波那契数列的求和函数来验证使用动态规划的思想解决问题

/**
 * 记忆化搜索优化
 * 这个问题直接这样递归求解，n的数目不能太大，即便是40函数的执行次数也是相当的多了
 * 原因在于里面包含了太多重复的递归运算。所以需要对已经运算过得项做一个记忆，当下次运算到相同的递归项的时候直接取值即可
 * */

const arr = {};
function FibonacciSequence(n) {
  if (arr[n]) {
    return arr[n];
  }
  if (n === 1) {
    return 0;
  }
  if (n === 2) {
    return 1;
  }
  const currN = FibonacciSequence(n - 1) + FibonacciSequence(n - 2);
  arr[n] = currN;
  return currN;
}

// console.time("FibonacciTime");
// const res = FibonacciSequence(1000);
// console.log("resl", res);
// console.timeEnd("FibonacciTime");

// 以动态规划的思想来解决这个问题
/**
 * 递归的思路是自上而下的，比如我要求数列的第n项的值，那么我是假设n - 1和n - 2项是求出来了的然后再求n - 1和n - 2项。
 * 而动态规划则是自底向上，我们要求第n项，那么可以求出第0，1，2，3，4.....n - 2, n -2项
 */

function fib(n) {
  const fibMap = new Map();

  fibMap.set(0, 0);
  fibMap.set(1, 1);

  if (n === 1 || n === 2) {
    return fibMap.get(n - 1);
  }

  for (let i = 2; i < n; i++) {
    fibMap.set(i, fibMap.get(i - 1) + fibMap.get(i - 2));
  }

  return fibMap.get(n - 1);
}

console.time('timeFib')
console.log('fib', fib(1000))
console.timeEnd('timeFib')