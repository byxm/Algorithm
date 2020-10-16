/**
 * @param {number} n
 * @return {boolean}
 */
/**
 * @description 思路误区
 * 这道题我的一个思路误区就是无限循环为空这个终止条件怎么判断，一开始就想到递归，但是无法找到这个数不符合happyNum的终止条件
 * 因为传入的数是循环的，所以当这个数出现第二次的时候说明进入了新一轮的死循环，这个时候就需要终止
 */
var isHappy = function (n) {
  const numSet = new Set();
  while (!numSet.has(n)) {
    let happySum = 0;
    numSet.add(n);
    const strHappy = n.toString();
    for (let i = 0; i < strHappy.length; i++) {
      happySum += Math.pow(+strHappy[i], 2);
    }
    if (happySum === 1) {
      return true;
    }
    n = happySum;
  }
  return false;
};

console.log(isHappy(19));
