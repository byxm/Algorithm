/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */

 // 这个答案思路正确，但是写的相当繁琐。原因在于计算子串元素出现的次数
var findAnagrams = function (s, p) {
  let l = 0;
  let r = 0;
  const res = [];
  const ananSet = new Map();
  const strSet = new Map();
  const pLength = p.length;
  const strLength = s.length - 1;

  for (let i = 0; i < p.length; i++) {
    if (ananSet.has(p[i])) {
      ananSet.set(p[i], ananSet.get(p[i]) + 1);
    } else {
      ananSet.set(p[i], 1);
    }
  }

  while (r <= strLength) {
    if (r - l + 1 === pLength) {
      if (r === 0) {
        strSet.set(s[r], 1);
      }

      let hasSetKey = 0;
      for (let [key, value] of ananSet.entries()) {
        if (strSet.has(key) && strSet.get(key) === value) {
          hasSetKey++;
          if (value > 1) {
            hasSetKey += value - 1;
          }
        }
      }
      if (hasSetKey === pLength) {
        res.push(l);
      }

      strSet.set(s[l], strSet.get(s[l]) - 1);
      r++;
      l++;
      if (!strSet.has(s[r])) {
        strSet.set(s[r], 1);
      } else {
        strSet.set(s[r], strSet.get(s[r]) + 1);
      }
    } else {
      if (!strSet.has(s[r])) {
        strSet.set(s[r], 1);
      } else {
        strSet.set(s[r], strSet.get(s[r]) + 1);
      }
      r++;
      if (r === pLength - 1) {
        if (strSet.has(s[r])) {
          strSet.set(s[r], strSet.get(s[r]) + 1);
        } else {
          strSet.set(s[r], 1);
        }
      }
    }
  }
  return res;
};

console.log(findAnagrams("abab", "ab"));
