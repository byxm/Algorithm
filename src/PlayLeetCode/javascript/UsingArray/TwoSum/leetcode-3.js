/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  // 滑动窗口解法
  let l = 0;
  let r = -1;
  let strLen = s.length - 1;
  let max = 0;
  const hasSameEle = new Map();
  while (l <= strLen) {
    if (r < strLen && !hasSameEle.has(s[r + 1])) {
      hasSameEle.set(s[++r], s[r]);
    } else {
      //   console.log('isSameEle', s[l], hasSameEle.has(s[l]), hasSameEle);
      if (hasSameEle.has(s[r + 1])) {
        hasSameEle.delete(s[l]);
      }
      l++;
    }

    max = Math.max(max, r - l + 1);
  }
  return max;
};

console.log(lengthOfLongestSubstring(""));
