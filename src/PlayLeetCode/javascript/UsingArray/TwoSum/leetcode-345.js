/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
  let left = 0;
  let right = s.length - 1;
  const vowels = ["a", "e", "i", "o", "u","A",'E','I', 'O', 'U'];
  const result = s.split("");
  while (left < right) {
    if (vowels.includes(result[left]) && !vowels.includes(result[right])) {
      right--;
      continue;
    }
    if (!vowels.includes(result[left]) && vowels.includes(result[right])) {
      left++;
      continue;
    }
    if (vowels.includes(result[left]) && vowels.includes(result[right])) {
      [result[left], result[right]] = [result[right], result[left]];
    }
    left++;
    right--;
  }
  return result.join("");
};

console.log(reverseVowels("leetcode"));
