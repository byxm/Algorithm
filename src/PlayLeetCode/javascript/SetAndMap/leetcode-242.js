/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }
  const sArr = new Array(26).fill(0);
  const tArr = new Array(26).fill(0);
  for (let i = 0; i < s.length; i++) {
    sArr[s.charCodeAt(i) - 97]++;
    tArr[t.charCodeAt(i) - 97]++;
  }
  if (sArr.join("") !== tArr.join("")) {
    return false;
  }
  return true;
};

console.log('isAnagram', isAnagram('rat', 'car'));
