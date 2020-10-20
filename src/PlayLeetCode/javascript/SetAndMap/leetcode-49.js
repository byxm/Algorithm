/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  if (strs.length < 2) {
    return [strs];
  }
  const strsMap = new Map();
  const valueMap = new Map();
  const res = [];
  for (let i = 0; i < strs.length; i++) {
    const wordAnaMap = new Array(26).fill(0);
    for (let j = 0; j < strs[i].length; j++) {
      wordAnaMap[strs[i][j].charCodeAt(0) - 97]++;
    }
    if (strsMap.has(strs[i])) {
      strsMap.set(strs[i], {
        value: wordAnaMap.join("-"),
        count: strsMap.get(strs[i]).count + 1,
      });
    } else {
      strsMap.set(strs[i], {
        value: wordAnaMap.join("-"),
        count: 1,
      });
    }
  }


  for (let [key, values] of strsMap.entries()) {
    const value = values.value;
    const count = values.count;
    for (let i = 0; i < count; i++) {
      if (valueMap.has(value)) {
        valueMap.get(value).push(key);
        valueMap.set(value, valueMap.get(value));
      } else {
        valueMap.set(value, [key]);
      }
    }
  }
  for (const v of valueMap.values()) {
    res.push(v);
  }

  return res;
};

console.log("groupAnagrams", groupAnagrams(["",""]));
