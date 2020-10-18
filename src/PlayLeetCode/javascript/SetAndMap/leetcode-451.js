/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function (s) {
  const sMap = new Map();
  const sArr = [];
  const genStr = [];
  for (let i = 0; i < s.length; i++) {
    if (sMap.has(s[i])) {
      sMap.set(s[i], sMap.get(s[i]) + 1);
    } else {
      sMap.set(s[i], 1);
    }
  }
  for (const [key, value] of sMap) {
    sArr.push({ key, value });
  }
  sArr.sort((a, b) => b.value - a.value);
  for (let i = 0; i < sArr.length; i++) {
    let { key, value } = sArr[i];
    while (value > 0) {
      genStr.push(key);
      value--;
    }
  }
  return genStr.join("");
};

// console.log(frequencySort("Aabb"));

// 字母charCode解法
var frequencySort1 = function (s) {
  const arr = [];
  for (let i = 0; i < s.length; i++) {
    arr[s[i].charCodeAt(0)] = (arr[s[i].charCodeAt(0)] || "") + s[i];
  }
  return arr.sort((a, b) => b.length - a.length).join('');
};
console.log('frequencySort', frequencySort1('tree'));

