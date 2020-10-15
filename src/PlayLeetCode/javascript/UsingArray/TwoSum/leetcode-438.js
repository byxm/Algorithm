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

// console.log(findAnagrams("Abab", "Aba"));

/**
 * 上述解法逻辑写的复杂的原因在于统计遍历的子串中各个字母相应的出现顺序
 * 因为题目中说明了只会出现小写字母，所以可以用数组来分别记录母串和子串出现的相应词频
 */
var findAnagrams2 = function (s, p) {
  const sArray = new Array(26).fill(0);
  const pArray = new Array(26).fill(0);
  const res = [];
  for (let i = 0; i < p.length; i++) {
    pArray[p.charCodeAt(i) - 97]++;
    sArray[s.charCodeAt(i) - 97]++;
  }

  for (let i = 0; i < s.length; i++) {
    if (isAnagram(sArray, pArray)) {
      res.push(i);
    }
    sArray[s.charCodeAt(i) - 97]--;
    sArray[s.charCodeAt(i + p.length) - 97]++;
  }
  return res;
};

const isAnagram = (sArray, pArray) => {
  for (let i = 0; i < pArray.length; i++) {
    if (sArray[i] !== pArray[i]) {
      return false;
    }
  }
  return true;
};




// console.log(findAnagrams2('Abab', 'Aab'))




