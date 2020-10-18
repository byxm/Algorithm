/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
  const patternMap = new Map();
  const wordMap = new Map();
  const sArr = s.split(" ");
  if(pattern.length !== sArr.length) {
      return false;
  }
  for (let i = 0; i < pattern.length; i++) {
    const patternLetter = pattern[i];
    const sWord = sArr[i];
    if (patternMap.has(patternLetter)) {
      if (patternMap.get(patternLetter) !== sWord) {
        return false;
      }
    } else {
      patternMap.set(patternLetter, sWord);
      if(wordMap.has(sWord)) {
         return false;
      }
      wordMap.set(sWord, 1);
      i--;
    }
  }
  return true;
};

console.log("wordPattern", wordPattern("aaa", "aa aa aa aa"));
