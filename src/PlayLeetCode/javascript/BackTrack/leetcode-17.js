/**
 * @param {string} digits
 * @return {string[]}
 */
// 这是一个可以看成树形问题的问题

const lettersMap = {
  0: " ",
  1: "",
  2: "abc",
  3: "def",
  4: "ghi",
  5: "jkl",
  6: "mno",
  7: "pqrs",
  8: "tuv",
  9: "wxyz",
};

let res = [];
var letterCombinations = function (digits) {
  if(digits === "") {
      return []
  }
  res = [];
  findCombinationLetters(digits, 0, "");
  return res;
};

const findCombinationLetters = (digits, index, s) => {
  if (index === digits.length) {
    res.push(s);
    return;
  }
  const letterWords = lettersMap[digits[index]];

  for (let i = 0; i < letterWords.length; i++) {
    findCombinationLetters(digits, index + 1, `${s}${letterWords[i]}`);
  }
};

console.log("recursionData", letterCombinations("234"));
