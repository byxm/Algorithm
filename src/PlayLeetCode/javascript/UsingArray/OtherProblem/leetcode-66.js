/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  let lastEle = digits[digits.length - 1] + 1;
  let dIndex = digits.length - 1;
  if (lastEle === 10) {
    // digits[digits.length - 1] = 0;
    digits[dIndex] = digits[dIndex] + 1;
    while (digits[dIndex] === 10) {
      digits[dIndex] = 0;
      dIndex--;
      if (dIndex < 0) {
        digits.unshift(1);
        break;
      }
      digits[dIndex] = digits[dIndex] + 1;
    }
  } else {
    digits[digits.length - 1] = lastEle;
  }

  return digits;
};

console.log(plusOne([9]));
